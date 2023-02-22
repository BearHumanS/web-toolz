const noteInput = document.querySelector("#noteInput");
      const btnSave = document.querySelector(".btnSave");
      const noteList = document.querySelector("#noteList");
      btnSave.addEventListener("click", function () {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(noteInput.value);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
        noteInput.value = "";
      });

      window.addEventListener("load", function () {
        renderNotes();
      });

      function renderNotes() {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        noteList.innerHTML = "";
        notes.forEach(function (note, index) {
          const li = document.createElement("li");
          const liNote = note.replace(/\n/g, "<br>");
          li.innerHTML = `
      ${liNote}
      <button class="delete">Delete</button>
    `;
          li.querySelector(".delete").addEventListener("click", function () {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
          });
          noteList.appendChild(li);
        });
      }
    