import "./globals.css";

export const metadata = {
  title: "Corvid Creative",
  description: "Pixel Art Commission Pricing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
