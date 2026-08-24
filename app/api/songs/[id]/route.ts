import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../server-config";

interface SongsParams {
  params: Promise<{ id: string }>;
}

export const GET = async (req: NextRequest, { params }: SongsParams) => {
  const { id } = await params;
  const res = await globalServer.get(`/public/songs/${id}`);
  return NextResponse.json(res.data);
};
