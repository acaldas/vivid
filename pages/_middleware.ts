import { NextResponse, NextMiddleware } from "next/server";
import { MINT_ENABLED } from "../config";

export const middleware: NextMiddleware = async function (req, ev) {
  const { pathname, origin } = req.nextUrl;
  if (pathname == "/mint" && !MINT_ENABLED) {
    return NextResponse.redirect(origin + "/gallery");
  }
  return NextResponse.next();
};
