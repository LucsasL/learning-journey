import { NextResponse } from "next/server";
import { users } from "@/app/util/db";

// 1. All users Data
export function GET() {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}
