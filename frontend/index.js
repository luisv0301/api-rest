const button = document.getElementById("button")
const form = document.getElementById("form")

button.addEventListener("click", (e) => {
    e.preventDefault()
    const formulario = new FormData(form)
    formulario.append("nota", "ir a comer parrilla")
    console.log(formulario.values())
})