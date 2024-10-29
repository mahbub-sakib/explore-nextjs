import { NextResponse } from "next/server"


// export const middleware = (request) => {
//     return NextResponse.redirect(new URL('/about', request.url))
// }
// export const middleware = (request) => {
//     return NextResponse.redirect(new URL('/contacts', request.url))
// }
// export const middleware = (request) => {
//     if (request.nextUrl.pathname.startsWith('/about')) {
//         return NextResponse.redirect(new URL('/contacts', request.url))
//     }
// }

// user authentication
// const user = true;

// export const middleware = (request) => {
//     if(!user){
//         return NextResponse.redirect(new URL('/login', request.url))
//     }    

//     return NextResponse.next()
// }

// authentication by cookies
const cook = 'my-cooki'

export const middleware = (request) => {
    const cookies = request.cookies.get('token');
    if(!cookies || cookies.value !== cook){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}


export const config = {
    matcher: ['/dashboard', '/services']
}