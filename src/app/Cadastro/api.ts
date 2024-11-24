export interface IUser {
    nome: string
    email: string
    preferencia: string
}

export const createUsuario = async (dados: IUser) => {
    const resposta = await fetch('http://localhost:3000/api/usuarios-interesse',{
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!resposta.ok) {
        throw new Error(`HTTP error! status: ${resposta.status}`);
    }

    return await resposta.json();
}