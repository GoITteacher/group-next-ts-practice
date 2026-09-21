import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";

interface DeleteParams {
  params: Promise<{ id: string }>;
}

export const DELETE = async (req: NextRequest, { params }: DeleteParams) => {
  const { id } = await params;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");

  const res = await globalServer.delete(`/news/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return NextResponse.json(res.data);
};
