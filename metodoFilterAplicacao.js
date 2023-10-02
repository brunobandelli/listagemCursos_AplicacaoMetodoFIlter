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

const criarNovoCurso=(curso)=>{

        // Cria um novo elemento <div> para o curso
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id","c"+indice)
        novoElemento.setAttribute("class","curso c1")
        novoElemento.innerHTML=curso
    
        // Cria um elemento <div> para os comandos
        const comandos = document.createElement("div")
        comandos.setAttribute("class","comandos")
    
        // Cria um elemento <input> do tipo "radio"
        const rb = document.createElement("input")
        rb.setAttribute("type","radio")
        rb.setAttribute("name","rb_cursos")
    
        // Adiciona o elemento <input> como filho do elemento de comandos
        comandos.appendChild(rb)
    
         // Adiciona o elemento de comandos como filho do novo elemento de curso
        novoElemento.appendChild(comandos)
    
        return novoElemento

}

// Para cada curso no array "cursos", cria elementos HTML correspondentes
cursos.map((el,chave)=>{


    const novoElemento = criarNovoCurso(el)

    // Adiciona o novo elemento de curso como filho da caixa de cursos
    caixaCursos.appendChild(novoElemento)

    indice++
})

const radioSelecionado = () => {

    // Seleciona todos os inputs do tipo "radio" e os transforma em um array
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]

    // Filtra os botões de rádio selecionados
    const radioSelecionado = todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    
    //Acessa o conteudo do novo array gerado pelo filter de radios.
    return radioSelecionado[0] 

    // console.log(todosRadios)
    // console.log(radioSelecionado)
}


// Adiciona um ouvinte de evento de clique ao botão selecionado
btnCursoSelecionado.addEventListener("click",(evt)=>{

    //captura o resultado do radio selecionado
    const rs = radioSelecionado()
    // console.log(rs)

    try{
    //Exemplo de outra forma de acessar o conteudo do texto que desejamos, apatir do elemento pai superior a o elemento pai do input pegando o primeiro filho entre os elementos filhos.
    // const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent

    //Acessa o conteúdo de texto do input contido no elemento irmão anterior ao elemento de rádio
    const cursoSelecionado = rs.parentNode.previousSibling.textContent 
    
    // Exibe um alerta com o curso selecionado
    alert("Curso selecionado: " + cursoSelecionado)
        
    }catch(err){

    alert("Selecione um curso!")

    }
    
    // console.log(cursoSelecionado)
})

btnRemoveCurso.addEventListener("click",(evt)=>{

    //captura o resultado do radio selecionado
    const rs = radioSelecionado()
    // console.log(rs)

    if(rs!=undefined){
    //Acessa o conteúdo de texto do input radio completo
    const cursoSelecionado = rs.parentNode.parentNode

    //remove o curso selecionado, (o input completo).
    cursoSelecionado.remove()
    }else{

    alert("Selecione um curso!")
    
    }
    
    // console.log(cursoSelecionado)
  
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{

        //captura o resultado do radio selecionado
        const rs = radioSelecionado()
        // console.log(rs)
    
        try{

            if(nomeCurso.value != ""){
                //Acessa o conteúdo de texto do input radio completo
                const cursoSelecionado = rs.parentNode.parentNode
    
                const novoCurso = criarNovoCurso(nomeCurso.value)
    
    
                caixaCursos.insertBefore(novoCurso, cursoSelecionado)
            }else{
    
                alert("Digite o nome do curso!")
    
            }
            
        }catch(err){
    
        alert("Selecione um curso!")
    
        }

})
btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{

        //captura o resultado do radio selecionado
        const rs = radioSelecionado()
        // console.log(rs)
    
        try{

        if(nomeCurso.value != ""){
            //Acessa o conteúdo de texto do input radio completo
            const cursoSelecionado = rs.parentNode.parentNode

            const novoCurso = criarNovoCurso(nomeCurso.value)


            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        }else{

            alert("Digite o nome do curso!")

        }
        
            
        }catch(err){
    
        alert("Selecione um curso!")
    
        }

})

//parentNode - usada para acessar o nó pai de um elemento no DOM.
//childNode[nodenumber] - é uma lista de nós filhos do elemento. [nodenumber] permite acessar um nó filho específico pelo seu índice.
//firstChild - é usada para acessar o primeiro nó filho de um elemento.
//lastchild - é usada para acessar o último nó filho de um elemento.
//nextSibling - é usada para acessar o nó irmão seguinte (posterior) de um nó no DOM.
//previousSibling - é usada para acessar o nó irmão anterior (anterior) de um nó no DOM.
