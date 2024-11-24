"use client"
import { useState } from "react"
import { createUsuario, IUser } from "./api"
import Link from 'next/link'
import { ArrowLeftFromLine } from "lucide-react"

const Cadastro = () => {

  const [usuario, setUsuario] = useState<IUser>({
    nome: '',
    email: '',
    preferencia: ''
  })

  const apagarCampos = () => {
    setUsuario({
      nome: '',
      email: '',
      preferencia: ''
    })
  }

  const tudoPreenchido = (usuario: IUser) => {
    return (usuario.nome == '' || usuario.email == '' || usuario.preferencia == '') ? false : true;
  }

  const envioCadastro = async (e: React.FormEvent) =>{
    e.preventDefault()

    if(!tudoPreenchido(usuario)){
        alert('Preencha todos os campos!')
        return
    }

    try {
        await createUsuario(usuario)
        alert('Cadastro realizado com sucesso!')
        apagarCampos()
    } catch (error) {
        console.log(error);
        alert('Erro ao cadastrar!')
    }
  }
    
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-8 border border-neutral-700 rounded-xl min-h-4/5 w-80 md:w-96 m-auto flex justify-start flex-col gap-4 duration-300 text-xl box-border'>
      
      <div className="flex justify-start items-center gap-9 md:gap-16">
          <Link href="/"><ArrowLeftFromLine className="hover:text-neutral-700 duration-200ms hover:duration-150" /></Link>
          <h1 className="text-center text-4xl">Cadastro</h1>        
      </div>

        <form className='flex justify-start flex-col gap-8 md:gap-10' >

            <div className='flex justify-start flex-col'>
                <label>Nome</label>
                <input type="text" className="text-white bg-neutral-700 rounded-xl indent-2 h-8 md:h-10" value={usuario.nome} onChange={(e) => setUsuario({...usuario, nome: e.target.value})}/>
            </div>

            <div className='flex justify-start flex-col'>
                <label>E-mail</label>
                <input className="text-white bg-neutral-700 rounded-xl indent-2 h-8 md:h-10" type="email" value={usuario.email} onChange={(e) => setUsuario({...usuario, email: e.target.value})}/>
            </div>

            <div className='flex justify-start flex-col gap-3'>
                <label>Preferência</label>
                <select className="text-white bg-neutral-700 rounded-xl indent-2 h-8 md:h-10" value={usuario.preferencia} onChange={(e) => setUsuario({...usuario, preferencia: e.target.value})}>
                    <option value="">Selecione</option>
                    <option value="Notícias da Dengue">Notícias da Dengue</option>
                    <option value="Sintomas">Sintomas</option>
                    <option value="Prevenção">Prenvenção</option>
                </select>
            </div>

            <button className='bg-gradient-to-r from-blue-500 to-blue-800 rounded-xl hover:bg-neutral-700 hover:duration-200 duration-300 text-white p-2 rounded-md mt-20' onClick={envioCadastro} >Cadastrar</button>
        </form>

      </div>
    </div>
  )
}

export default Cadastro
