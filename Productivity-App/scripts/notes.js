let notes = JSON.parse(localStorage.getItem("notes"));
if (notes == null) {
    notes = [];
}

displayNotes();

function showForm() {
    document.getElementById("noteForm").style.display = "block";
}

function hideForm() {
    document.getElementById("noteForm").style.display = "none";
}

function saveNote() {

    let titleInput = document.getElementById("titleInput");
    let title = titleInput.value.trim();

    let contentInput = document.getElementById("contentInput");
    let content = contentInput.value.trim();

    if (title === "" || content === "") {
        alert("Please fill both fields!");
        return;
    }

    let note = {
        title: title,
        content: content
    };

    notes.push(note);

    saveNotes();
    displayNotes();

    titleInput.value = "";
    contentInput.value = "";

    hideForm();
}

function displayNotes() {

    let container = document.getElementById("notesContainer");
    container.innerHTML = "";

    if (notes.length === 0) {
        container.innerHTML = "<p>No notes yet...</p>";
        return;
    }

    for (let i = 0; i < notes.length; i++) {

        let note = notes[i];

        container.innerHTML +=
            "<div class='note'>" +
            "<h3>" + note.title + "</h3>" +
            "<p>" + note.content + "</p>" +
            "<button onclick='copyNote(" + i + ")'>📋 Copy</button>" +
            "<button onclick='deleteNote(" + i + ")'>🗑️ Delete</button>" +
            "</div>";
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    displayNotes();
}

function copyNote(index) {
    let text = notes[index].title + "\n" + notes[index].content;

    navigator.clipboard.writeText(text)
        .then(function () {
            alert("Copied!");
        })
        .catch(function () {
            alert("Copy failed");
        });
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}