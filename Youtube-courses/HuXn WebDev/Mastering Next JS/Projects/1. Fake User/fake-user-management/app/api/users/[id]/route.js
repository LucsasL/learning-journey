import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 2. Get specific User
export function GET(req, res) {
  const { id } = res.params;

  return NextResponse.json({ id, ...users[id - 1] });
}

// 3. Login
export async function POST(req, res) {
  let { name, email, password } = await req.json();
  const { id } = await res.params;

  const { name: uName, email: uEmail, password: uPassword } = users[id - 1];

  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({ result: "Logged in Successfully." });
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "Please fill all the input fields" });
  }

  return NextResponse.json({ result: "Invalid Credentials" });
}

// 6. Delete User
export async function DELETE(req, res) {
  const { id } = await res.params;

  // Find the index of the user to delete in the user array
  const userIndex = users.findIndex((u) => u.id == id);

  if (userIndex === -1) {
    return NextResponse.json(
      { result: "User not found", ok: false },
      { status: 404 }
    );
  }

  // Remove the user from the users array
  users.splice(userIndex, 1);

  // Update the users
  const updatedArray = users;

  const updatedData = JSON.stringify(updatedArray, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );

  return NextResponse.json(
    { result: "User Successfully Deleted", ok: true },
    { status: 201 }
  );
}
