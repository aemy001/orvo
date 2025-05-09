import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Orvo</title>
        <meta name="description" content="Orvo" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
