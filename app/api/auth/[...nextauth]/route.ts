import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Enter email" },
        password: {
          label: "Password",
          type: "text",
          placeholder: "Enter password",
        },
      },
    }),
    GoogleProvider({}),
  ],
});

export { handler as GET, handler as POST };
