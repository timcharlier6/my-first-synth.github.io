const synth = new Tone.Synth().toDestination();

function changeColorOnClick(note) {
  note.classList.add("clickedState");
  setTimeout(function() {
    note.classList.remove("clickedState");
  }, 500);
}

function playNote(note, name) {
  let square = name;
  switch (note.id) {
    case "c3":
      synth.triggerAttackRelease("C3", "4n");
      square.textContent = "Do";
      break;
    case "d3":
      synth.triggerAttackRelease("D3", "4n");
      square.textContent = "Ré";
      break;
    case "e3":
      synth.triggerAttackRelease("E3", "4n");
      square.textContent = "Mi";
      break;
    case "f3":
      synth.triggerAttackRelease("F3", "4n");
      square.textContent = "Fa";
      break;
    case "g3":
      synth.triggerAttackRelease("G3", "4n");
      square.textContent = "Sol";
      break;
    case "a3":
      synth.triggerAttackRelease("A3", "4n");
      square.textContent = "La";
      break;
    case "b3":
      synth.triggerAttackRelease("B3", "4n");
      square.textContent = "Si";
      break;
    case "c4":
      synth.triggerAttackRelease("C4", "4n");
      square.textContent = "Do";
      break;
    case "d4":
      synth.triggerAttackRelease("D4", "4n");
      square.textContent = "Ré";
      break;
    case "e4":
      synth.triggerAttackRelease("E4", "4n");
      square.textContent = "Mi";
      break;
    case "f4":
      synth.triggerAttackRelease("F4", "4n");
      square.textContent = "Fa";
      break;
    case "g4":
      synth.triggerAttackRelease("G4", "4n");
      square.textContent = "Sol";
      break;
    case "a4":
      synth.triggerAttackRelease("A4", "4n");
      square.textContent = "La";
      break;
    case "b4":
      synth.triggerAttackRelease("B4", "4n");
      square.textContent = "Si";
      break;
  }
}

const keys = document.getElementsByClassName("key");
const square = document.getElementById("square");

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", function() {
    if (Tone.context.state !== "running") {
      Tone.start();
    }
    playNote(this, square);
    changeColorOnClick(this);
  });
}
