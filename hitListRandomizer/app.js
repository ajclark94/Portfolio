const generate = document.querySelector('.generate');
const clear = document.querySelector('.clear');
const checkBox = document.querySelectorAll("[data-container]")
const pooh = document.querySelector('.pooh')
const drives = document.querySelector('.drives');
const absent = document.querySelector('.absent');
const data = document.querySelector('.data');
const lingering = document.querySelector('.lingering');
const container = document.querySelector('.display');

const list = []

generate.addEventListener('click', () => {
  
  if (pooh.checked) {
    list.push('Pooh')
  }
  if (drives.checked) {
    list.push('Drives')
  }
  if (absent.checked) {
    list.push("Zexion", "Vexen", "Larxene", "Lexaeus", "Marluxia")
  }
  if (data.checked) {
    list.push("Xemnas", "Xigbar", "Xaldin", "Saix", "Axel", "Demyx", "Luxord", "Roxas");
  }
  if (lingering.checked) {
    list.push("Lingering Will")
  }
  list.sort(() => (Math.random() > 0.5) ? 1 : -1)

  const outcome = document.createElement('div');
  const p = document.createElement('p')

  for (let i = 0; i < 7; i++) {
    outcome.classList.add('results');
    container.appendChild(outcome)
    p.innerText += ` ${list[i]} `
    outcome.appendChild(p)
  }
})






