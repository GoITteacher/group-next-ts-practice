import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";
import { parseCookie } from "cookie";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await globalServer.post("/auth/login", body);

  //!================= ЗБЕРЕЖЕННЯ COOKIE з серверу на frontend ========================
  const cookieStorage = await cookies();

  const setCookie = res.headers["set-cookie"] as string[];
  for (const cookieStr of setCookie) {
    const cookie = parseCookie(cookieStr);
    const options = {
      maxAge: Number(cookie["Max-Age"]),
      path: cookie.Path,
      expires: cookie.expires ? new Date(cookie.expires) : undefined,
    };

    if (cookie.refreshToken) {
      cookieStorage.set("refreshToken", cookie.refreshToken, options);
    }

    if (cookie.accessToken) {
      cookieStorage.set("accessToken", cookie.accessToken, options);
    }
  }
  //!======================================================================

  return NextResponse.json(res.data);
};
