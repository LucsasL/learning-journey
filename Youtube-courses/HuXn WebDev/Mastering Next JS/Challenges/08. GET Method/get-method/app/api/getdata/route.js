import { NextResponse } from "next/server";

export async function GET(req, res) {
  const fetchData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await data.json();

    console.log(data);
    return data;
  }

  const posts = await fetchData();

  return NextResponse.json({ posts });
}