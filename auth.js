<<<<<<< HEAD
import NextAuth from "next-auth"
 import GoogleProvider from "next-auth/providers/google";
 import GitHubProvider from "next-auth/providers/github";
 import { FirestoreAdapter } from "@auth/firebase-adapter"
 import { cert } from "firebase-admin/app"
=======
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
>>>>>>> c8c677974ae8121f15ea98002fb29bca9509705d

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
<<<<<<< HEAD
        clientId:process.env.AUTH_GOOGLE_ID,
        clientSecret:process.env.AUTH_GOOGLE_SECRET
    }),
      GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
  ],
   adapter: FirestoreAdapter({
     credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
    }),
   })
})
=======
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  }),
});
>>>>>>> c8c677974ae8121f15ea98002fb29bca9509705d
