import { NextResponse } from "next/server";
import { globalServer } from "../server-config";
import { cookies } from "next/headers";

export const GET = async () => {
  const cookieStore = await cookies();
  const res = await globalServer.get("/news", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return NextResponse.json(res.data);
};
