const generate = document.querySelector('.generate');
const clear = document.querySelector('.clear');
const checkBox = document.querySelectorAll("[data-container]")
const pooh = document.querySelector('.pooh')
const drives = document.querySelector('.drives');
const absent = document.querySelector('.absent');
const data = document.querySelector('.data');
const lingering = document.querySelector('.lingering');
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');
const result4 = document.querySelector('.result4');
const result5 = document.querySelector('.result5');
const result6 = document.querySelector('.result6');
const result7 = document.querySelector('.result7');



generate.addEventListener('click', () => {
  const list = []
  if (pooh.checked) {
    list.push('pooh')
  }
  if (drives.checked) {
    list.push('drives')
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
  return list;
})

console.log(list)
