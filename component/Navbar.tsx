//rfc
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="flex bg-blue-800 text-amber-50 p-4">
          <h1 className="text-3xl font-bold"><Link href="/">My App</Link></h1>
          <ul className="flex space-x-4 ml-8 mt-2">
            <li><Link href="/"></Link>Home</li>
            <li><Link href="/about"></Link>About</li>
            <li><Link href="/contract"></Link>Contract</li>
            <li><Link href="/blog"></Link>Blog</li>
            <li><Link href="/counter"></Link>Counter</li>
            <li><Link href="/login"></Link>Login</li>
          </ul>
    </header>
  )
}
