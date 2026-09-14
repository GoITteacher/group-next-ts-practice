import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";
import { parseCookie } from "cookie";

export const POST = async (req: NextRequest) => {
  const cookieStore = await cookies();

  const res = await globalServer.post("/auth/refresh", null, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  const cookiesArr = res.headers["set-cookie"] as string[];

  for (const item of cookiesArr) {
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
