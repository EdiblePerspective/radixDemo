
export const metadata = {
  title: 'Radix Example',
  description: 'AHHHHHHHH',
}
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="pageBody">
      
      <h1>Working!</h1>
      {children}
      </body>
    </html>
  );
}
