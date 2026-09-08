import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const res = await globalServer.post("/auth/register", body);
  return NextResponse.json(res.data);
};
