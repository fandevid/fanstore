import "@/styles/globals.css";
import { Inter } from "next/font/google";
// import 'boxicons'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FanStore",
  description: "Toko online milik bersama.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
