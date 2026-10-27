const https = require('https');

https.get('https://daonnet.xn--oy2b11vgra637a7nb.com/', (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const loginMatches = d.match(/href="([^"]*login[^"]*)"/gi) || [];
    console.log('Login matches:', loginMatches);
    const allPhp = d.match(/href="([^"]*\.php[^"]*)"/gi) || [];
    console.log('Unique php links:', Array.from(new Set(allPhp)).slice(0, 15));
  });
});
