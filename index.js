//exe1
let classCard = document.getElementsByClassName("card")
function mudaCorCard()
    {
        for(const elemento of classCard)
        {
            elemento.setAttribute("style", "background-color: #b5590b; color:#f8ddad;")
        }
    }
mudaCorCard();

//exe 2 e 3
let tituloCard = document.getElementsByClassName("titulo-card")
function mudaTituloCard()
    {
        for(const elemento of tituloCard)
        {
            elemento.InnerText = "Meu Card"
            elemento.setAttribute("style", "color: #2d3958; padding: 15px; margin-top: 15px;")
        }
    }
mudaTituloCard();

//exe 4 e 5
let descricaoCard = document.getElementsByClassName("descricao-Card")
function mudaDescricaoCard()
    {
        for (const elemento of descricaoCard)
            {
            elemento.InnerText = "Descrição modificada"
            elemento.setAttribute("style", "font-size: 15px; margin-bottom: 15px")    
            }
    }
mudaDescricaoCard();

//exe 6
let botaoCard = document.getElementsByClassName("botao-editar")
function mudaBotaoCard()
    {
        for(const elemento of botaoCard)
            {
                elemento.setAttribute("style", "background-color: green; border: none; border-radius: 7px; padding: 7px color: white")
                elemento.setAttribute("onclick", "mostraAlertaEditar()")
            }
    }
mudaBotaoCard();

//exe 7
let botaoCardDelete = document.getElementsByClassName("botao-apagar")
function mudaBotaoCardDelete()
    {
        for (const elemento of botaoCardDelete)
            {
                elemento.setAttribute("style", "background-color: red; border: none; border-radius: 7px; padding: 7px color: white")
                elemento.setAttribute("onclick", "mostraAlertaApagar()")
            }
    }
mudaBotaoCardDelete();

//exe 8
function mostraAlertaEditar()
    {
        alert("clicou em editar!")
    }

//exec9
function mostraAlertaApagar()
    {
        const confirma = confirm("Quer realmente apagar o card?")
        if (confirma) 
        {
            alert("Card apagado!")    
        }
            else
            {
                alert("Cancelou!")
            }
    }