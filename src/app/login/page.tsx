"use client"

import { FormEvent, useState } from "react";
import Input from "../components/design/Input";
import Button from "../components/design/Button";
import { useToast } from "../hooks/useToast";
import { useRouter } from "next/navigation";

export default function HomePage() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const toast = useToast()
  const router = useRouter()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:8081/fretec/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password
        })
      })

      if (!res.ok) {
        throw new Error("Some error has occurred")
      }

      const { token } = await res.json()

      document.cookie = `token=${token}; max-age=${60 * 60 * 24 * 365}; path=/;`
      router.push("/")
      
    } catch (error) {
      if (error instanceof Error) {
        toast.show(error.message)
      }
    }
  }

  return (
    <div className="min-h-dvh w-full text-black bg-amber-400">
      <div className="max-w-lg min-h-dvh w-full mx-auto flex flex-col justify-center px-6">
        <h1 className="text-6xl font-bold mb-10">LOGIN.</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <Input
            placeholder="E-MAIL"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />

          <Input
            placeholder="SENHA"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          
          <Button type="submit">ENTRAR</Button>
        </form>
      </div>
    </div>
  )
}