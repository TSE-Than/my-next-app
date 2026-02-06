"use client"
//rfc
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Loginpage() {

  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //ฟังก์ชันจัดการการล็อคอิน
  const handleLogin = (e: React.FormEvent) =>{
    e.preventDefault()
    if (username === 'admin' && password === '1234'){
      alert('Login successful')
      //สั่งไปหน้า counter
      router.push('/counter') //ไปที่หน้า counter เมื่อล็อคอินสำเร็จ

    }else{
      alert('Login failed. Please try agian.')
    }
  }

  //สั่งไปหน้า counter
  //router.push('/counter')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Login</h1>
      {/*Login Screen*/}
      <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-80">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded-md"
        />
        <input
           onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form> 
      <p>Back to Home <Link className="text-blue-800"href="/">Home</Link></p>
    </div>
  )
}