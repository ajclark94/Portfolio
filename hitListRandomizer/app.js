const generate = document.querySelector('.generate');
const clear = document.querySelector('.clear');
const checkBox = document.querySelectorAll("[data-container]")
const pooh = document.querySelector('.pooh')
const drives = document.querySelector('.drives');
const absent = document.querySelector('.absent');
const data = document.querySelector('.data');
const lingering = document.querySelector('.lingering');

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
})

const para = document.createElement('p')
const result1 = document.createTextNode(list[0]);
const result2 = document.createTextNode(list[1]);
const result3 = document.createTextNode(list[2]);
const result4 = document.createTextNode(list[3]);
const result5 = document.createTextNode(list[4]);
const result6 = document.createTextNode(list[5]);
const result7 = document.createTextNode(list[6]);

console.log(result1)


