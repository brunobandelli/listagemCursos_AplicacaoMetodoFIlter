// Seleciona o elemento com o id "caixaCursos"
const caixaCursos = document.querySelector("#caixaCursos")
// Seleciona todos os elementos com a classe "cursos" e os transforma em um array
const btn_c=[...document.querySelectorAll(".cursos")]
// Seleciona o elemento com o id "c1_2"
const c1_2=document.querySelector("#c1_2")
// Seleciona o botão com o id "btnCursoSelecionado"
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")

// Botões
const btnRemoveCurso=document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois=document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")


const cursos=['HTML',"CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

let indice = 0

const tirarSelecao=()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

/*
A função tirarSelecao() é usada para desselecionar todos os cursos,
removendo a classe "selecionado" de cada curso que estava previamente selecionado. 
Isso é feito antes de selecionar um novo curso, garantindo que apenas um curso esteja selecionado por vez.

*/

const criarNovoCurso=(curso)=>{

        // Cria um novo elemento <div> para o curso
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id","c"+indice)
        novoElemento.setAttribute("class","curso c1")
        novoElemento.innerHTML=curso
        novoElemento.addEventListener("click",(evt)=>{
            tirarSelecao() //remove a classe "selecionado" de todos os cursos 
            evt.target.classList.toggle("selecionado") // a classe "selecionado" é usada para identificar qual curso foi selecionado no momento.
        })
    
        return novoElemento

}

/*
Na função criarNovoCurso(), um evento de clique é adicionado a cada novo elemento de curso criado. 
Quando o elemento é clicado, a função de callback é chamada. 
Dentro dessa função de callback, tirarSelecao() é chamada para remover a classe "selecionado" de todos os cursos e, 
em seguida, evt.target.classList.toggle("selecionado") é usado para adicionar ou remover a classe "selecionado" 
no curso que foi clicado, dependendo do seu estado atual.

Portanto, a classe "selecionado" é usada para identificar qual curso foi selecionado no momento.
*/

// Para cada curso no array "cursos", cria elementos HTML correspondentes
cursos.map((el,chave)=>{


    const novoElemento = criarNovoCurso(el)

    // Adiciona o novo elemento de curso como filho da caixa de cursos
    caixaCursos.appendChild(novoElemento)

    indice++
})

const cursoSelecionado = () => {      //radioSelcionado -> cursoSelecionado

    //Seleciona todos os elementos que possuem a classe "selecionado" e armazena esses elementos em uma array chamada cursosSelecionados
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")] 
    
    //Acessa o conteudo do novo array gerado pelo filter de radios.
    return cursosSelecionados[0]    //radioSelcionado -> cursoSelecionado

}


// Adiciona um ouvinte de evento de clique ao botão selecionado
btnCursoSelecionado.addEventListener("click",(evt)=>{

    try{

    alert("Curso selecionado: " + cursoSelecionado().innerHTML)   // cursoSelecionado -> cursoSelecionado().innerHTML
        
    }catch(err){

    alert("Selecione um curso!")

    }
    
})

btnRemoveCurso.addEventListener("click",(evt)=>{


    const cs = cursoSelecionado()

    if(cs!=undefined){  //rs -> cs

    //remove o curso selecionado, (o input completo).
    cs.remove()       //cursoSelecionado -> cs
    }else{

    alert("Selecione um curso!")
    
    }
    
    // console.log(cursoSelecionado)
  
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{

    
        try{

            if(nomeCurso.value != ""){
    
                const novoCurso = criarNovoCurso(nomeCurso.value)
    
                caixaCursos.insertBefore(novoCurso, cursoSelecionado()) // cursoSelecionado -> cursoSelecionado()
            }else{
    
                alert("Digite o nome do curso!")
    
            }
            
        }catch(err){
    
        alert("Selecione um curso!")
    
        }

})
btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{

        try{

        if(nomeCurso.value != ""){

            const novoCurso = criarNovoCurso(nomeCurso.value)

            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling) // cursoSelecionado -> cursoSelecionado()
        }else{

            alert("Digite o nome do curso!")

        }
        
            
        }catch(err){
    
        alert("Selecione um curso!")
    
        }

})
