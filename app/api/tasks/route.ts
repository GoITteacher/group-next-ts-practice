import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../server-config";
import { cookies } from "next/headers";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const cookieStorage = await cookies();
  const res = await globalServer.post("/tasks", body, {
    headers: {
      Cookie: cookieStorage.toString(),
    },
  });
  return NextResponse.json(res.data);
};
