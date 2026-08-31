import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";

interface RequestParams {
  params: Promise<{ id: string }>;
}

export const GET = async (req: NextRequest, { params }: RequestParams) => {
  const { id } = await params;

  const res = await globalServer.get(`/todos/${id}`);

  return NextResponse.json(res.data);
};

export const PATCH = async (req: NextRequest, { params }: RequestParams) => {
  const { id } = await params;
  const body = await req.json();
  const res = await globalServer.patch(`/todos/${id}`, body);
  return NextResponse.json(res.data);
};

export const DELETE = async (req: NextRequest, { params }: RequestParams) => {
  const { id } = await params;
  const res = await globalServer.delete(`/todos/${id}`);
  return NextResponse.json(res.data);
};
