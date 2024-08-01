// Creating dynamic api for users, this way we can identify the user and return the requested page to the client

import { NextResponse } from "next/server";

export function GET(req, res) {
  const { id } = res.params;

  return NextResponse.json({ id });
}
