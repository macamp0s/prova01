import axios from "axios"
import { useEffect, useState } from "react"


const Questao02 = () => {
    let virar = false;
    const [id, setId] = useState(61)
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    console.log(virar)

    useEffect(
        () => {
            //usar crase pra alterar a string da url pro id q eu quero
            axios.get(`https://pokeapi.co/api/v2/pokemon/25`)
                //promessa deu certo then vai exercutar uma funcao callback que retorna o objeto response - o pokemo
                .then(
                    (response) => {
                        console.log(response.data.name)
                        setNome(response.data.name)
                        setImagem(response.data.sprites.front_default)
                        if (virar == true) {
                            setImagem(response.data.sprites.back_default)
                        } else {
                            setImagem(response.data.sprites.front_default)
                        }

                    }
                )
                //deu errado
                .catch(
                    (error) => console.log(error)
                )

        },

        []
    )

    return (
        <>
            <h3>nome: {nome}</h3>
            <img src={imagem} style={{ width: "400" }} />


            <button
                onClick={
                    () => {
                        //mudar o valor da booleana que seria usada pra flutuar entre back e front sprites
                        virar = true
                        setImagem()

                    }
                }>      virar
            </button>



        </>
    )
}

export default Questao02