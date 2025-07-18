import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import Authprovider from "@/components/Authprovider";
=======
import AuthProvider from "@/components/AuthProvider";
>>>>>>> c8c677974ae8121f15ea98002fb29bca9509705d

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
<<<<<<< HEAD
  title: "Kookbook | Sharing Recipies",
  description: "Cooking Inspirations. Akitchen companion for everyday dishes.",
=======
  title: "KookBook | Sharing Recipes",
  description: "Cooking Inspirations. A kitchen companion for everyday dishes.",
>>>>>>> c8c677974ae8121f15ea98002fb29bca9509705d
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Authprovider>
          <Nav />
        {children}
        <Footer />
        </Authprovider>
        
=======
      <body className={`${montserrat.className} antialiased`}>
        <AuthProvider>
          <Nav />
          {children}
          <Footer />
        </AuthProvider>
>>>>>>> c8c677974ae8121f15ea98002fb29bca9509705d
      </body>
    </html>
  );
}
