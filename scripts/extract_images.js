const fs = require('fs');
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
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
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
  let cookieHeader = (loginPage.headers['set-cookie'] || []).map(c => c.split(';')[0]).join('; ');

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

  if (loginRes.headers['set-cookie']) {
    const newCookies = loginRes.headers['set-cookie'].map(c => c.split(';')[0]);
    cookieHeader = (cookieHeader ? cookieHeader + '; ' : '') + newCookies.join('; ');
  }

  const items = [
    { id: '107919', url: 'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=107919' },
    { id: '107921', url: 'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=107921' },
    { id: '189357', url: 'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=189357' },
    { id: '216551', url: 'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=216551' }
  ];

  for (const item of items) {
    const res = await request(item.url, {
      headers: {
        'Cookie': cookieHeader,
        'Referer': 'https://daonnet.xn--oy2b11vgra637a7nb.com/'
      }
    });

    const html = res.body;

    // Look for all <img> tags in the page
    const imgs = [...html.matchAll(/<img[^>]+src="([^">]+)"/gi)].map(m => m[1]);
    const itemImgs = imgs.filter(src => !src.includes('banner') && !src.includes('theme') && !src.includes('icon') && !src.includes('btn'));
    
    // Look for category / path
    const locMatch = html.match(/<div class="loc[^"]*">([\s\S]*?)<\/div>/i) ||
                     html.match(/<ol class="breadcrumb">([\s\S]*?)<\/ol>/i) ||
                     html.match(/<ul class="snavi">([\s\S]*?)<\/ul>/i) ||
                     html.match(/<div id="sit_navi">([\s\S]*?)<\/div>/i);

    console.log(`\n========================================`);
    console.log(`ITEM ${item.id}`);
    console.log('Images:', itemImgs.slice(0, 5));
    if (locMatch) console.log('Location match:', locMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    else {
      // Find category in meta or header
      const subNavi = html.match(/<div class="sub_navi">([\s\S]*?)<\/div>/i);
      console.log('Subnavi:', subNavi ? subNavi[0].replace(/<[^>]+>/g, ' ') : 'N/A');
    }
  }
}

main().catch(console.error);
