import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

// 2. Get specific User
export function GET(req, res) {
  const { id } = res.params;

  return NextResponse.json({ id, ...users[id - 1] });
}

// 3. Login
export async function POST(req, res) {
  let { name, email, password } = await req.json();
  const { id } = await res.params;

  const {
    name: uName,
    email: uEmail,
    password: uPassword,
  } = users[id - 1];

  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({ result: "Logged in Successfully." });
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "Please fill all the input fields" });
  }

  return NextResponse.json({ result: "Invalid Credentials" });
}
