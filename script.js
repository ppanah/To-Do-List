//Initial constant declarations 
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const title = document.querySelector('h2');
const clearButton = document.getElementById('clearBtn');
const textArea = document.getElementById('comment');


clearButton.disabled = true;

let notesArray = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
localStorage.setItem('notes', JSON.stringify(notesArray));

const data = JSON.parse(localStorage.getItem('notes'));


//Create list of notes
const listMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}


//Add note
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if(textArea.value!== ""){
    notesArray.push(textArea.value);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    listMaker(textArea.value);
    clearButton.disabled = false;
  }
  textArea.value = "";
});

data.forEach(note => {
  listMaker(note);
});

//Clear notes
clearButton.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  clearButton.disabled = true;
});