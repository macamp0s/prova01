const Questao01A = () => {

    const alunos = [
        { nome: "sicras", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "beltras", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "fulas", notas: { ap1: 7.3, ap2: 9.2 } },

    ]

    function Questao01B({ alunos }) {
        let medias = []

        //usando o foreach para percorrer o array
        alunos.forEach((aluno) => {
            //adicionando as medias e o aluno correspondende em um array de objetos com o push
            const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
            medias.push({ nome: aluno.nome, media: media });
        });

        return (
            //usando o map para percorrer o vetor e imprir o nome de cada aluno e sua media

            
            <div>

                {medias.map((aluno) => (
                    
                    <div>
                        
                        {aluno.nome} : {aluno.media}
                    </div>
                    

                   
                ))
                
                
                
                } 
            </div>


                   

        )
    }

   
    return (
        <>
            <Questao01B alunos={alunos}></Questao01B>
        
        </>



    )
}

export default Questao01A



