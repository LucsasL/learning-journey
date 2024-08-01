import { NextResponse } from "next/server";

export function GET(req, res) {
  const { id } = res.params;

  return NextResponse.json({ id });
}