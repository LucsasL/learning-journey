import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { name, age, email } = await req.json();

  if (!name || !age || !email) {
    return NextResponse.json(
      { error: "Bad request, Require all the fields to be filled", ok: false },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { res: "Data sent successfully! :D", ok: true },
    { status: 201 }
  );
}
