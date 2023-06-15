


// // More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
// export default withAuth(
//     function middleware(req) {
//         console.log(req.nextauth.token)
//     },
//     // {
//     //     callbacks: {
//     //         authorized({ req, token }) {
//     //             console.log(req.nextUrl.pathname);
//     //             console.log(token);


//     //             // `/admin` requires admin role
//     //             if (req.nextUrl.pathname === "/admin") {
//     //                 return token?.userRole === "admin"
//     //             }
//     //             // `/me` only requires the user to be logged in
//     //             return !!token
//     //         },
//     //     },
//     // }
// )

export { default } from "next-auth/middleware";
export const config = {
    matcher: [
        '/admin/:path*',
    ]
}