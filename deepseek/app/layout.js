import { Inter } from "next/font/google";
import "./globals.css";
import "./prism.css"
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSeek",
  description: "Full Stack Project",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <AppContextProvider>
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Toaster toastOptions={
          {success:{
            style:{
              background:"#333",
              color:"#fff",
            }
          },
          error:{
            style:{
              background:"#333",
              color:"#fff",
            }
          }}
        }/>
        {children}
      </body>
    </html>
    </AppContextProvider>
    </ClerkProvider>
  );
}
