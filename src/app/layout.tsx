import Navbar from "../components/Navbar"
// import LayoutWrapper from "../components/LayoutWrapper";
import "../css/global.css"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        {/* </LayoutWrapper> */}
      </body>
    </html>
  );
}