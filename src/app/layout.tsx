import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "My Todo",
  description: "A simple Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
