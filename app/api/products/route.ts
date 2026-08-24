import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../server-config";

export const GET = async (req: NextRequest) => {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries());
  const res = await globalServer.get("/products", { params });
  return NextResponse.json(res.data);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await globalServer.post("/public/products", body);
  return NextResponse.json(res.data);
};
