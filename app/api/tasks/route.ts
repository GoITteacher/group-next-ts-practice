import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../server-config";
import { cookies } from "next/headers";
import { AxiosError } from "axios";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const cookieStorage = await cookies();
    const res = await globalServer.post("/tasks", body, {
      headers: {
        Cookie: cookieStorage.toString(),
      },
    });

    return NextResponse.json(res.data);
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;

    return NextResponse.json(
      {
        errorMessage: error.response?.data.message || error.message,
      },
      {
        status: error.response?.status || 500,
      },
    );
  }
};
