//rfc
import Link from "next/link"

export default function Loginpage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Login</h1>
      {/*Login Screen*/}
      <form className="flex flex-col space-y-4 w-80">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded-md"
        />
        <input
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