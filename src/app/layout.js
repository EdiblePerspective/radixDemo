
export const metadata = {
  title: 'Radix Example',
  description: 'Radix Demo',
}
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <h1>Radix Demo</h1>
      {children}
    </html>
  );
}
