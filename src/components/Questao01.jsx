const Questao01A = () => {
    const alunos = [
        { nome: "sicras", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "beltras", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "fulas", notas: { ap1: 7.3, ap2: 9.2 } },
        
    ]

    function Questao01B({alunos}) {

        var myArray=[{}]
        let id;

        return (
            alunos.map(alunos => 
            <div>

                {myArray=(id= 2, alunos.nome, alunos.notas.ap1 + alunos.notas.ap2)/2}
                
                {console.log(myArray)}
           
               
            </div>)
            )
    }


    return (
        <>
            <Questao01B alunos={alunos}></Questao01B>
           

        </>

    )
}

export default Questao01A



