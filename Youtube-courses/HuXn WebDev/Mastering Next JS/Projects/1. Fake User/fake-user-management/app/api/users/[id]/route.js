import { NextResponse } from "next/server";
import { users } from "@/util/db";

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
  } = users.find((u) => u.id === id);

  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({ result: "Data Successfully Sent." });
    
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "Please fill all the input fields" });
  }

  return NextResponse.json({ result: "Invalid Credentials" });
}
