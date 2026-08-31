import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";

interface ProductsResponse {
  params: Promise<{ id: string }>;
}

export const GET = async (req: NextRequest, { params }: ProductsResponse) => {
  const { id } = await params;
  const res = await globalServer.get(`/products/${id}`);
  return NextResponse.json(res.data);
};
export const DELETE = async (
  req: NextRequest,
  { params }: ProductsResponse,
) => {
  const { id } = await params;
  const res = await globalServer.delete(`/products/${id}`);
  return NextResponse.json(res.data);
};
