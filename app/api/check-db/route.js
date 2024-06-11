import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const dbUrl = process.env.POSTGRES_URL;
  res.status(200).json({ dbUrl });

  return NextResponse.json(post);
}
