export interface IFeedBack {
    conteudo: string
}

export const createFeedback = async (dados: IFeedBack) => {
    const resposta = await fetch('https://back-api-dengue.onrender.com/api/feedbacks',{
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