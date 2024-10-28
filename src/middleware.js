import { NextResponse } from "next/server"


// export const middleware = (request) => {
//     return NextResponse.redirect(new URL('/about', request.url))
// }
// export const middleware = (request) => {
//     return NextResponse.redirect(new URL('/contacts', request.url))
// }
export const middleware = (request) => {
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.redirect(new URL('/contacts', request.url))
    }
}



// export const config = {
//     matcher: ['/about', '/services']
// }