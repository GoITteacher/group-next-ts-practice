import { cookies } from "next/headers";
import { globalServer } from "../../server-config";
import { NextResponse } from "next/server";
import { AxiosError } from "axios";

export const POST = async () => {
  try {
    const cookieStorage = await cookies();

    const res = await globalServer.post("/auth/logout", null, {
      headers: {
        Cookie: cookieStorage.toString(),
      },
    });

    cookieStorage.delete("accessToken");
    cookieStorage.delete("refreshToken");

    return NextResponse.json(res.data);
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return NextResponse.json(
      {
        dateTime: new Date(),
        errorMessage: error.response?.data.message || error.message,
      },
      {
        status: error.response?.status || 500,
      },
    );
  }
};
