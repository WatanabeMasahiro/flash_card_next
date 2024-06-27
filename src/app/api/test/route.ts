import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Its TEST, I say GET!!!"
  });
}

export async function POST() {
  return NextResponse.json("Its TEST, I say POST!!!");
}

// export async function POST(request: any) {
//   const reqBody = await request.json();
//   console.log(reqBody);
//   return NextResponse.json("HELLO!!POST!!");
// }

export async function DELETE() {
  return NextResponse.json("Its TEST, I say DELETE!!!");
}
