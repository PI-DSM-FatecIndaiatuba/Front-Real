export interface IUser {
    name: string
    email: string
    preferencia: string
}

export const createUsuario = async (dados: IUser) => {
    const resposta = await fetch('link',{
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json"
        }
    })
}