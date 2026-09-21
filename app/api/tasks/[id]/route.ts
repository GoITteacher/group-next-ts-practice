import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";
import { cookies, headers } from "next/headers";
interface TaskId {
  params: Promise<{ id: string }>;
}
export const DELETE = async (req: NextRequest, { params }: TaskId) => {
  const { id } = await params;
  const cookie = await cookies();
  const res = await globalServer.delete(`/tasks/${id}`, {
    headers: {
      Cookie: cookie.toString(),
    },
  });
  return NextResponse.json(res.data);
};

export const GET = async (req: NextRequest, { params }: TaskId) => {
  const { id } = await params;
  const cookie = await cookies();
  const res = await globalServer.get(`/tasks/${id}`, {
    headers: {
      Cookie: cookie.toString(),
    },
  });
  return NextResponse.json(res.data);
};

export const PUT = async (req: NextRequest, { params }: TaskId) => {
  const { id } = await params;
  const body = await req.json();
  const cookie = await cookies();
  const res = await globalServer.put(`/tasks/${id}`, body, {
    headers: {
      Cookie: cookie.toString(),
    },
  });
  return NextResponse.json(res.data);
};
