import { NextResponse } from "next/server";
import { users } from "@/util/db";

export function GET() {
  const data = users;
  return NextResponse.json({ data });
}
