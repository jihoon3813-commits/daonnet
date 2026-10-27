import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 추모공원 목록 조회 (이미지 URL 포함)
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
      parks = parks.filter((p) => {
        const name = (p.name || "").toLowerCase();
        const loc = (p.loc || "").toLowerCase();
        const addr = (p.addr || "").toLowerCase();
        const desc = (p.desc || "").toLowerCase();
        return (
          name.includes(q) ||
          loc.includes(q) ||
          addr.includes(q) ||
          desc.includes(q)
        );
      });
    }

    // 각 공원에 대해 업로드된 파일이 있으면 signed URL을 조합
    const resolvedParks = await Promise.all(
      parks.map(async (p) => {
        let displayImageUrl = p.imageUrl || null;
        if (p.imageStorageId) {
          const storageUrl = await ctx.storage.getUrl(p.imageStorageId);
          if (storageUrl) {
            displayImageUrl = storageUrl;
          }
        }
        return {
          ...p,
          displayImageUrl,
        };
      })
    );

    return resolvedParks;
  },
});

// 이미지 파일 업로드용 Signed URL 생성
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

// 신규 추모공원 추가
export const createPark = mutation({
  args: {
    region: v.string(), // "CAPITAL" | "CHUNG_GANG" | "YEONGNAM" | "HONAM_JEJU"
    regionLabel: v.string(), // "수도권" | "충청·강원" | "경상·영남" | "호남·제주"
    loc: v.string(),
    name: v.string(),
    type: v.string(), // "직영" | "재단" | "사설" | "공설"
    addr: v.string(),
    desc: v.string(),
    featured: v.optional(v.boolean()),
    phone: v.optional(v.string()),
    website: v.optional(v.string()), // 공식 홈페이지 링크
    supportBenefit: v.string(),
    imageStorageId: v.optional(v.id("_storage")),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("memorialParks", {
      ...args,
      createdAt: Date.now(),
    });
    return { success: true, id };
  },
});

// 추모공원 수정
export const updatePark = mutation({
  args: {
    id: v.id("memorialParks"),
    region: v.string(),
    regionLabel: v.string(),
    loc: v.string(),
    name: v.string(),
    type: v.string(),
    addr: v.string(),
    desc: v.string(),
    featured: v.optional(v.boolean()),
    phone: v.optional(v.string()),
    website: v.optional(v.string()),
    supportBenefit: v.string(),
    imageStorageId: v.optional(v.id("_storage")),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
    return { success: true };
  },
});

// 추모공원 삭제
export const deletePark = mutation({
  args: {
    id: v.id("memorialParks"),
  },
  handler: async (ctx, args) => {
    const park = await ctx.db.get(args.id);
    if (park?.imageStorageId) {
      try {
        await ctx.storage.delete(park.imageStorageId);
      } catch {
        // 이미 없거나 삭제 실패 시 무시
      }
    }
    await ctx.db.delete(args.id);
    return { success: true };
  },
});

// 초기 추모공원 일괄 시딩 (중복 체크 후 신규 등록 또는 강제 덮어쓰기)
export const seedInitialParks = mutation({
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
        website: v.optional(v.string()),
        supportBenefit: v.string(),
        imageUrl: v.optional(v.string()),
      })
    ),
    overwrite: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("memorialParks").collect();
    
    if (existing.length > 0 && !args.overwrite) {
      return {
        success: true,
        count: existing.length,
        message: `이미 ${existing.length}개의 추모공원이 등록되어 있습니다.`,
      };
    }

    // 만약 overwrite 요청이면 기존 데이터 정리 후 재삽입
    if (args.overwrite) {
      for (const p of existing) {
        await ctx.db.delete(p._id);
      }
    }

    let inserted = 0;
    for (const p of args.parks) {
      await ctx.db.insert("memorialParks", {
        ...p,
        createdAt: Date.now(),
      });
      inserted++;
    }

    return {
      success: true,
      count: inserted,
      message: `${inserted}개의 추모공원이 DB에 성공적으로 등록되었습니다.`,
    };
  },
});
