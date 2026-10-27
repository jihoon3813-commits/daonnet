const https = require('https');
const querystring = require('querystring');

function request(url, options = {}, postData = null) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const reqOptions = {
      hostname: u.hostname,
      port: u.port || 443,
      path: u.pathname + u.search,
      method: options.method || 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        ...options.headers
      }
    };
    const req = https.request(reqOptions, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        body: data
      }));
    });
    req.on('error', reject);
    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function main() {
  const loginPage = await request('https://daonnet.xn--oy2b11vgra637a7nb.com/bbs/login.php');
  console.log('Login page status:', loginPage.statusCode);
  
  let setCookies = loginPage.headers['set-cookie'] || [];
  let cookieHeader = setCookies.map(c => c.split(';')[0]).join('; ');
  console.log('Initial cookies:', cookieHeader);

  // find login form
  const formMatch = loginPage.body.match(/<form[^>]*action="([^"]*login_check[^"]*)"[^>]*>([\s\S]*?)<\/form>/i) ||
                    loginPage.body.match(/<form[^>]*>([\s\S]*?)<\/form>/i);
  if (formMatch) {
    console.log('Form snippet:', formMatch[0].substring(0, 400));
  }

  // Look for inputs
  const inputMatches = [...loginPage.body.matchAll(/<input[^>]+name="([^"]+)"[^>]*value="?([^">]*)"?/gi)];
  console.log('Inputs in login page:', inputMatches.map(m => [m[1], m[2]]));

  // Perform login with test1 / 1234
  // Typically GNUBoard / YoungCart uses mb_id & mb_password
  const postData = querystring.stringify({
    mb_id: 'test1',
    mb_password: '1234',
    url: '/'
  });

  const loginRes = await request('https://daonnet.xn--oy2b11vgra637a7nb.com/bbs/login_check.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      'Cookie': cookieHeader,
      'Referer': 'https://daonnet.xn--oy2b11vgra637a7nb.com/bbs/login.php'
    }
  }, postData);

  console.log('Login check res status:', loginRes.statusCode, loginRes.headers.location);
  if (loginRes.headers['set-cookie']) {
    const newCookies = loginRes.headers['set-cookie'].map(c => c.split(';')[0]);
    cookieHeader = (cookieHeader ? cookieHeader + '; ' : '') + newCookies.join('; ');
  }
  console.log('Session Cookie:', cookieHeader);

  // Now fetch the 4 URLs
  const items = [
    'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=107919',
    'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=107921',
    'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=189357',
    'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=216551'
  ];

  for (const url of items) {
    const itemRes = await request(url, {
      headers: {
        'Cookie': cookieHeader,
        'Referer': 'https://daonnet.xn--oy2b11vgra637a7nb.com/'
      }
    });

    console.log('\n====================================');
    console.log('ITEM URL:', url);
    const html = itemRes.body;

    // Title
    const titleMatch = html.match(/<h2[^>]*class="[^"]*tit[^"]*"[^>]*>([\s\S]*?)<\/h2>/i) ||
                       html.match(/<title>([\s\S]*?)<\/title>/i);
    console.log('Title:', titleMatch ? titleMatch[1].trim() : 'N/A');

    // Extract table rows or price blocks
    const priceTableMatches = [...html.matchAll(/<(?:tr|div|li)[^>]*>([\s\S]*?)<\/(?:tr|div|li)>/gi)];
    for (const m of priceTableMatches) {
      const text = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (/시중가|소비자가|판매가|회원가|포인트|할인|결제금액|공급가/i.test(text) && /[0-9,]{3,}/.test(text) && text.length < 150) {
        console.log('  Price Row:', text);
      }
    }
  }
}

main().catch(console.error);
