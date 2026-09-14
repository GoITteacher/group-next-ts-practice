import { NextResponse } from "next/server";
import { globalServer } from "../server-config";
import { cookies } from "next/headers";
import { AxiosError } from "axios";

export const GET = async () => {
  try {
    const cookieStore = await cookies();
    const res = await globalServer.get("/news", {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
    return NextResponse.json(res.data);
  } catch (error) {
    const eRor = error as AxiosError<{
      message: string;
    }>;
    return NextResponse.json(
      { message: eRor.response?.data.message || eRor.message },
      {
        status: eRor.response?.status || 500,
      },
    );
  }
};
