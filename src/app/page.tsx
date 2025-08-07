"use client"

import { useState } from "react";
import Input from "./components/design/Input";

export default function HomePage() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")

  function handleSubmit() {
  }

  return (
    <div className="min-h-dvh w-full bg-neutral-100 text-black">
      <div className="max-w-lg min-h-dvh w-full mx-auto flex flex-col justify-center px-6">
        <h1 className="text-5xl font-bold mb-10">CADASTRO.</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <Input
            placeholder="NOME"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="flex gap-6">
            <Input
              placeholder="E-MAIL"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              placeholder="CPF"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
            />
          </div>
          <button type="submit" className="py-3 px-4 bg-black rounded text-white font-medium hover:translate-y-0.5 hover:opacity-90 cursor-pointer">CADASTRAR</button>
        </form>
      </div>
    </div>
  )
}