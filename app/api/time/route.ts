import { NextResponse } from "next/server";

export const GET = () => {
  const datetime = new Date();

  const date = datetime.toDateString();
  const time = datetime.toTimeString();

  return NextResponse.json({
    date: date,
    time: time,
  });
};
