import { NextResponse } from "next/server";
import { users } from "@/util/db";
import { redirect } from "next/navigation";

export function GET(req, res) {
  const { id } = res.params;

  if (id < users.length) {
    console.log(users[id - 1]);
    return NextResponse.json({ id, ...users[id - 1] });
  }

  redirect("/not-found");
}
