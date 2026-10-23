import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listParks = query({
  args: {
    region: v.optional(v.string()),
    type: v.optional(v.string()),
    search: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let parks = await ctx.db.query("memorialParks").collect();

    if (args.region && args.region !== "ALL") {
      parks = parks.filter((p) => p.region === args.region);
    }
    if (args.type && args.type !== "ALL") {
      parks = parks.filter((p) => p.type === args.type);
    }
    if (args.search && args.search.trim()) {
      const q = args.search.trim().toLowerCase();
      parks = parks.filter((p: Record<string, unknown>) => {
        const name = String(p.name || "").toLowerCase();
        const loc = String(p.loc || "").toLowerCase();
        const addr = String(p.addr || "").toLowerCase();
        const desc = String(p.desc || "").toLowerCase();
        return (
          name.includes(q) ||
          loc.includes(q) ||
          addr.includes(q) ||
          desc.includes(q)
        );
      });
    }

    return parks;
  },
});

export const seedParks = mutation({
  args: {
    parks: v.array(
      v.object({
        region: v.string(),
        regionLabel: v.string(),
        loc: v.string(),
        name: v.string(),
        type: v.string(),
        addr: v.string(),
        desc: v.string(),
        featured: v.optional(v.boolean()),
        phone: v.optional(v.string()),
        supportBenefit: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("memorialParks").take(1);
    if (existing.length > 0) {
      return { seeded: 0, message: "이미 추모공원 데이터가 존재합니다." };
    }

    let count = 0;
    for (const p of args.parks) {
      await ctx.db.insert("memorialParks", p);
      count++;
    }
    return { seeded: count, message: `${count}개 추모공원 DB 적재 완료` };
  },
});
