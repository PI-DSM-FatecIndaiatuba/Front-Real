import React, { useState } from 'react'
import { createFeedback, IFeedBack } from './api'

const Feedback = () => {
    const [nome, setNome] = useState<string>('')
    const [feedback, setFeedback] = useState<IFeedBack>({
        conteudo: ''
    })

    const apagarCampos = () => {
        setNome('')
        setFeedback({ conteudo: '' })
    }

    const tudoPreenchido = (nome: string, feedback: IFeedBack) => {
        return (nome == '' || feedback.conteudo == '') ? false : true;
    }

    const envioFeedback = async (e: React.FormEvent) =>{
        e.preventDefault()

        if(!tudoPreenchido(nome, feedback)){
            alert('Preencha todos os campos!')
            return
        }

        try {
            await createFeedback(feedback)
            alert('Feedback enviado com sucesso!')
            apagarCampos()
        } catch (error) {
            console.log(error);
            alert('Erro ao enviar feedback!')
        }
    }

  return (
    <div>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>Deixe seu <span className='bg-gradient-to-r from-green-500 to-blue-800 text-transparent bg-clip-text'>FeedBack</span></h2>
      
        <div className='max-w-2xl mx-auto p-8 border border-neutral-700 rounded-xl shadow-md rounded-lg'>
            <form>
                <div className='mb-4'>
                    <label className='block text-sm  mb-2' htmlFor='name'>
                        Nome
                    </label>
                    <input
                        className='text-white bg-neutral-700 rounded-xl indent-2 h-8 md:h-10 w-full leading-tight focus:outline-none focus:shadow-outline'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        id='name'
                        type='text'
                        placeholder='Seu nome'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm  mb-2' htmlFor='feedback'>
                        Feedback
                    </label>
                    <textarea
                        className='shadow text-white bg-neutral-700 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                        id='feedback'
                        value={feedback.conteudo}
                        onChange={(e) => setFeedback({ ...feedback, conteudo: e.target.value })}
                        placeholder='Seu feedback'
                        rows={5}
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button className='bg-gradient-to-r from-blue-500 to-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'type='button' onClick={envioFeedback}>
                        Enviar
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Feedback
