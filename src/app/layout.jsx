import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

// Load both fonts
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800','900'],
  display: 'swap' });
// const unbounded = Unbounded({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700', '800','900'],
//   display: 'swap'
// });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Orvo</title>
        <meta name="description" content="Orvo" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
