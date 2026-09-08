import { cookies } from "next/headers";
import { globalServer } from "../../server-config";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStorage = await cookies();

  const res = await globalServer.post("/auth/logout", null, {
    headers: {
      Cookie: cookieStorage.toString(),
    },
  });

  cookieStorage.delete("accessToken");
  cookieStorage.delete("refreshToken");

  return NextResponse.json(res.data);
};
