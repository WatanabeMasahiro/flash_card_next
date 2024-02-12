// import { NextResponse } from "next/server";

// export async function middleware() {
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/test", "/api/test"],
// };

export const logger = store => next => action => {
  console.log("before: %O", store.getState());
  next(action);
  console.log("after: %O", store.getState());
};