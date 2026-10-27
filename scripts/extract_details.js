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

    // Goods Name
    const nameMatch = html.match(/<h2[^>]*class="[^"]*tit[^"]*"[^>]*>([\s\S]*?)<\/h2>/i) ||
                      html.match(/<h3[^>]*class="[^"]*tit[^"]*"[^>]*>([\s\S]*?)<\/h3>/i) ||
                      html.match(/name="goods_name"[^>]*value="([^"]*)"/i) ||
                      html.match(/class="item_name"[^>]*>([\s\S]*?)<\//i);

    // Let's find specific price rows in table
    // Look for dl or tr or table
    console.log(`\n========================================`);
    console.log(`ITEM: ${item.id}`);

    // Let's grab product main image
    const imgMatch = html.match(/id="sit_pvi_big"[^>]*src="([^"]*)"/i) ||
                     html.match(/class="[^"]*goods_image[^"]*"[^>]*src="([^"]*)"/i) ||
                     html.match(/src="([^"]*\/data\/item\/[^"]*)"/i);
    console.log('Image:', imgMatch ? imgMatch[1] : 'N/A');

    // Breadcrumb / Category
    const cateMatch = html.match(/<div class="snavi">([\s\S]*?)<\/div>/i) ||
                      html.match(/<div class="location">([\s\S]*?)<\/div>/i);
    if (cateMatch) {
      console.log('Category path:', cateMatch[1].replace(/<[^>]+>/g, ' > ').replace(/\s+/g, ' ').trim());
    }

    // Inspect the area around "시중가격"
    const idx = html.indexOf('시중가격');
    if (idx !== -1) {
      console.log('HTML snippet around 시중가격:\n', html.substring(idx - 100, idx + 800).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    }
  }
}

main().catch(console.error);
