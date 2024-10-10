const titulo = document.querySelector(".titulo")

titulo.textContent = "Esse é o meu título!"
titulo.style.textAlign = "center"

const lista = document.querySelector(".lista")
lista.innerHTML =  `<ul>
                        <li> Item 1 </li>
                        <li> Item 2 </li>
                        <li> Item 3 </li>
                    </ul>`
                        
const body = document.querySelector("body")
body.style.backgroundColor = "aqua"
body.style.color = "red"