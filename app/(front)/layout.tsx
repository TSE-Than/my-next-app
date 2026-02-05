import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"

export default function FrontLayout({
  children,
}:
{
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
