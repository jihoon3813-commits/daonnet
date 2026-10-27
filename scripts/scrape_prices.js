const https = require('https');

async function get(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function post(url, postData, headers = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
        ...headers
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function run() {
  const loginPage = await get('https://daonnet.xn--oy2b11vgra637a7nb.com/member/login.php');
  console.log('Login status:', loginPage.status);
  
  // Search for form in login page
  const html = loginPage.body;
  const formRegex = /<form[\s\S]*?<\/form>/gi;
  const forms = html.match(formRegex) || [];
  console.log('Forms found:', forms.length);
  for (const f of forms) {
    if (f.includes('password') || f.includes('login') || f.includes('mb_id') || f.includes('user_id')) {
      console.log('Found login form:', f.substring(0, 500));
    }
  }

  // Also check if index_no=107919 page has any prices without login or if it redirects
  const item1 = await get('https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=107919');
  console.log('Item 1 status:', item1.status);
  // Look for any table rows with numbers
  const rows = item1.body.match(/<tr[\s\S]*?<\/tr>/gi) || [];
  console.log('Total trs in item 1:', rows.length);
  for (const r of rows) {
    if (r.includes('원') || r.includes('가') || r.includes('포인트')) {
      console.log('TR:', r.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
    }
  }
}

run().catch(console.error);
