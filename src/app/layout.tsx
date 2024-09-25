import Header from "./components/Header";
import NavBar from "./components/NavBar"; // Import your NavBar component
import "./globals.css"; // Import global styles (if any)

export const metadata = {
  title: "My Next.js App",
  description: "A sample Next.js app",
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
        <NavBar /> {/* Navigation bar that persists across pages */}
        <main>{children}</main> {/* This renders the current page content */}
      </body>
    </html>
  );
}
