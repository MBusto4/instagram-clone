import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],

    /*    how to use the default sign page next provides for you
        
    theme: {
            logo: "https://links.papareact.com/sq0",
            brandColor: "#F13287",
            colorScheme: "auto"
} */
    pages: {
        signIn: '/auth/signin'
    }
})