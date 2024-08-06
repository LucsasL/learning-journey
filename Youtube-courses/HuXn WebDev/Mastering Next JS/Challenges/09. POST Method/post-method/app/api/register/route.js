import { NextResponse } from "next/server";

export async function POST(req, res) {
  let payload = await req.json();
  console.log(payload);

  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { success: "Required information missing", ok: true },
      { status: 400 }
    );
  }

  return NextResponse(
    { success: "The user was successfully registered.", ok: true },
    { status: 201 }
  );
}
