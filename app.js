// console.log("addnote")
shownotes();
//if user add note to local storage

let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click", function () {
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
    // console.log(notes);
    shownotes();
});


function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="notecard card my-2 mx-2 ">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="cardtext">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary" id="addbtn">Delete Note</button>
        </div>
    </div>
        `;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML= `Nothing to show Use Add Notes section to add notes`;
    }

}

// to delte note

function deletenote(index) {
    // console.log("i m deleting")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
  
     let notecard=document.getElementsByClassName("notecard")
     Array.from(notecard).forEach(function(element) {
         let cardtext=element.getElementsByTagName("p")[0].innerText;
         if(cardtext.includes(inputval)){
             element.style.display="block";
            //  console.log("input fired",inputval);
         }
         else{
            element.style.display="none";
            // console.log("input fired",inputval);
         }
     })
     
})