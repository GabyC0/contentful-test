// middleware.js
export function middleware() {
    return Response.next()
  }
  
//for matching specific paths later
//   export const config = {
//     matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
//   }
  