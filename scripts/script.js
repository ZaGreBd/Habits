const form = document.querySelector("#form-habits")
const registerButton = document.getElementById("register-button")
const nlwSetup = new NLWSetup(form)

registerButton.addEventListener("click", add)
form.addEventListener("change", save)


function add(){
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  if(nlwSetup.dayExists(today)){
    alert("O dia já foi existe!")
  }else{
    nlwSetup.addDay(today)
    alert(`Dia ${today} registrado com sucesso!`)
  }
}

function save(){
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()