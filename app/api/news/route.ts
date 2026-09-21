import { NextRequest, NextResponse } from "next/server";
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

export const POST = async (req: NextRequest) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const body = await req.json();
  const res = await globalServer.post("/news", body, {
    headers: {
      // Cookie: cookieStore.toString(),
      // "X-Api-Key": "c8747511a2c34730a83caaff4f3693e7",
      // Authorization: `Bearer ${accessToken}`,
      // MY_API_KEY: accessToken,
      // apiKey: "c8747511a2c34730a83caaff4f3693e7",
    },
  });

  return NextResponse.json(res.data);
};
