import { NextResponse } from "next/server";
import { users } from "@/app/util/db";
import * as fs from "fs";

// 1. All users Data
export function GET() {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}

// 4. Create User
export async function POST(req, res) {
  let { id, name, email, password } = await req.json();

  // Check if the data match with an user in the database
  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { result: "Required field not found", ok: false },
      { status: 400 }
    );
  }

  // Add the new user to the in-memory array
  users.push({ id, name, email, password });

  // Extract just the user array from the updated data
  const updatedArray = users;

  // Convert the updated users array to JSON string
  const updatedData = JSON.stringify(updatedArray, null, 2);

  // Write the updated users array to a JSON string
  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );

  // Returning that the user were registered
  return NextResponse.json(
    { result: "User registered Successfully!", ok: true },
    { status: 201 }
  );
}

// 5. Update the user
export async function PUT(req, res) {
  let { id, name, email, password } = await req.json();

  // Find the user in the users array by ID
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return NextResponse.json(
      { result: "User not found", ok: false },
      { status: 404 }
    );
  }

  if (name) {
    users[userIndex].name = name;
  }

  if (email) {
    users[userIndex].email = email;
  }
  if (password) {
    users[userIndex].password = password;
  }

  // Extract just the user array from the updated data
  const updatedArray = users;

  // Convert the updated users array to a JSON string
  const updatedData = JSON.stringify(updatedArray, null, 2);

  // Write the upload users array to a JSON string
  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );

  // Returning that the user were registered
  return NextResponse.json(
    { result: "User updated Successfully!", ok: true },
    { status: 201 }
  );
}