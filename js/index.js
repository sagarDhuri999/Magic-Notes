console.log('Om');
showNotes();
// if user add a note,add to localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
})
function showNotes() {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }
    let html = "";

    notesObj.forEach(function (element, index) {

        html += `<div class="noteCard my-2 mx-2card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button onClick="deleteBtn(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesEln = document.getElementById('notes');
    notesEln.style.color = "purple"
    if (notesObj.length != 0) {
        notesEln.innerHTML = html;

    }
    else {
        notesEln.innerHTML = `<h2>"No notes to show!"stupid :(</h2>`;
    }

}
// function to delete Btn
function deleteBtn(index) {
    // console.log('"Deleted"', index);

    let notes = localStorage.getItem('notes');
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
//Search bar code:

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('in', inputVal);
    let cards = document.getElementsByClassName('noteCard');
    Array.from(cards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt)
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";

        }
        else {
            element.style.display = "none";
        }

    })
})