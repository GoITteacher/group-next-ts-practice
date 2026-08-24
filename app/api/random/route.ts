import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries());
  const { min = 0, max = 100 } = params;

  const random = Math.round(
    Math.random() * (Number(max) - Number(min)) + Number(min),
  );

  return NextResponse.json({
    random: random,
  });
};
