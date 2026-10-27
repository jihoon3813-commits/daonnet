"use client";

import React, { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convexUrl =
  process.env.NEXT_PUBLIC_CONVEX_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://secret-mockingbird-318.convex.cloud"
    : "https://mild-seal-714.convex.cloud");
const convex = new ConvexReactClient(convexUrl);

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
