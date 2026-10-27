const { ConvexHttpClient } = require("convex/browser");
const path = require("path");
const fs = require("fs");

const { api } = require(path.resolve(__dirname, "../convex/_generated/api.js"));

const url = "https://secret-mockingbird-318.convex.cloud";
const client = new ConvexHttpClient(url);

async function run() {
  console.log("Connecting to Production Convex:", url);

  // 1. 관리자 초기 계정 생성/확인
  console.log("Initializing Admin account...");
  const adminRes = await client.mutation(api.admin.login, {
    username: "admin",
    password: "admin1234"
  });
  console.log("Admin account status:", adminRes.message);

  // 2. 추모공원 56개 주입
  const parksRaw = JSON.parse(fs.readFileSync(path.resolve(__dirname, "parks.json"), "utf8"));
  const parks = parksRaw.map(p => ({
    region: p.region,
    regionLabel: p.regionLabel,
    loc: p.loc,
    name: p.name,
    type: p.type,
    addr: p.addr,
    desc: p.desc,
    featured: !!p.featured,
    phone: p.phone || undefined,
    website: p.website || undefined,
    supportBenefit: p.supportBenefit,
  }));

  console.log(`Seeding ${parks.length} memorial parks to Production DB...`);
  const seedRes = await client.mutation(api.parks.seedInitialParks, {
    parks,
    overwrite: true
  });
  console.log("Seed result:", seedRes);

  // 3. 확인
  const count = await client.query(api.parks.listParks, {});
  console.log(`Total memorial parks currently in Production DB: ${count.length}개`);
}

run().catch(console.error);
