import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
})

export const metadata: Metadata = {
  title: "Panthera Restolounge",
  description: "Panthera Restolounge - fine dining experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
// import { Josefin_Sans } from "next/font/google";
// import "./globals.css";

// const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

// export const metadata = {
//   title: "Panthera Restolounge",
//   description: "Panthera Restolounge - fine dining experience",
// };

// export default async function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`font-josefin antialiased`}>{children}</body>
//     </html>
//   );
// }
