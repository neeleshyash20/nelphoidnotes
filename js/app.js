console.log('hello world');
showNotes();

//adding event listener

let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})


//showing the notes.
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div id="card2" class="card2" style="width: 18rem;">
        <div class="cardin">
            <h5 class="cards title">Notes ${index + 1}</h5>
            <p class="cardtext">${element}</p>
            <input type="button" class="btn1" id="${index}" onclick="deleteNote(this.id)" value="delete notes">
        </div>
    </div>`;

    });

    let notesElm = document.getElementById("notesrow");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `add your notes above`;
    }

};


//deleting the notes
function deleteNote(index) {
    console.log('deleting notes', index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//searching the notes.
let txt = document.getElementById("txt");
txt.addEventListener('input', function () {
    let inputval = txt.value;
    console.log('event fired', inputval);

    let card2 = document.getElementsByClassName("card2");

    Array.from(card2).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})