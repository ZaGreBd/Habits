const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: [
    "01-20",
    "01-21",
    "01-27"
  ],
  
  water: [
    "01-21",
    "01-22",
    "01-26"
  ],
  
  food: [
    "01-20",
    "01-22",
    "01-28"
  ],

  journal: [
    "01-21",
    "01-22",
    "01-27"
  ],

  takePills: [
    "01-26"
  ]  
}

nlwSetup.setData(data)
nlwSetup.load()