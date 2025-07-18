import { Inter } from 'next/font/google';
import "./globals.css";
import "./fonts.css";

const inter = Inter({
  subsets: ['latin'], // or ['latin', 'cyrillic'] etc.
  weight: ['100', '200', '300', '400', '500', '600', '700'], 
  variable: '--font-inter', // Optional: define a CSS variable
});

export const metadata = {
  title: "Shaheen Waitlist",
  description: "Your social media partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`inter.className  font-normal antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
