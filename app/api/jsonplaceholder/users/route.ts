import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return NextResponse.json(res.data);
};
