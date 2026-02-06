"use client"
//rfc
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navbar(
  {href, children}: 
  {href: string, children: React.ReactNode}
) {

  const pathname = usePathname()
  const isActive = pathname === href

  console.log("Current pathname:", pathname)

  return (
    <header className="flex bg-blue-800 text-amber-50 p-4">
          <h1 className="text-3xl font-bold"><Link href="/">My App</Link></h1>
          <ul className="flex space-x-4 ml-8 mt-2">
            <li><Link className={pathname === '/' ? "text-amber-300" : ""} href="/">หน้าแรก</Link></li>
            <li><Link className={pathname === '/home' ? "text-amber-300" : ""} href="/home">Home</Link></li>
            <li><Link className={pathname === '/about' ? "text-amber-300" : ""} href="/about">About</Link></li>
            <li><Link className={pathname === '/contract'? "text-amber-300" : ""} href="/contract">Contract</Link></li>
            <li><Link className={pathname === '/blog' ? "text-amber-300" : ""} href="/blog">Blog</Link></li>
            <li><Link className={pathname === '/counter' ? "text-amber-300" : ""} href="/counter">Counter</Link></li>
            <li><Link className={pathname === '/login' ? "text-amber-300" : ""} href="/login">Login</Link></li>
          </ul>
    </header>
  )
}
