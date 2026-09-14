import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";
import { parseCookie } from "cookie";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const cookieStore = await cookies();
  const body = await req.json();
  const res = await globalServer.post("/auth/login", body);
  const setCookie = res.headers["set-cookie"] as string[];

  for (const item of setCookie) {
    const cookieObj = parseCookie(item);

    const options = {
      maxAge: Number(cookieObj["Max-Age"]),
      path: cookieObj.Path,
      expires: cookieObj.expires ? new Date(cookieObj.expires) : undefined,
    };

    if (cookieObj.accessToken) {
      cookieStore.set("accessToken", cookieObj.accessToken, options);
    }
    if (cookieObj.refreshToken) {
      cookieStore.set("refreshToken", cookieObj.refreshToken, options);
    }
  }

  return NextResponse.json(res.data);
};
