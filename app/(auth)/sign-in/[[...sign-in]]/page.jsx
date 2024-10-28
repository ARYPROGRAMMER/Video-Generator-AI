import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="relative w-full h-full">
        <Image
          src="/login.png"
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-80"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <SignIn />
        </div>
      </div>
    </div>
  )
}