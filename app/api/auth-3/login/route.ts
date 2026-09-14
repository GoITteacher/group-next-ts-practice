import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";
import { cookies } from "next/headers";
import { parseCookie } from "cookie";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await globalServer.post("/auth/login", body);

  const cookieStorage = await cookies();

  const setCookie = res.headers["set-cookie"] as string[];
  for (const item of setCookie) {
    const cookie = parseCookie(item);

    const options = {
      maxAge: Number(cookie["Max-Age"]),
      path: cookie.Path,
      expires: cookie.expires ? new Date(cookie.expires) : undefined,
    };

    if (cookie.accessToken) {
      cookieStorage.set("accessToken", cookie.accessToken, options);
    }
    if (cookie.refreshToken) {
      cookieStorage.set("refreshToken", cookie.refreshToken, options);
    }
  }

  return NextResponse.json(res.data);
};
