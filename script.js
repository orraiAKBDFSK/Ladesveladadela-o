
const participants = [
  { name: "Participante 1",  photo: "images/participantes/1.png"  },
  { name: "Participante 2",  photo: "images/participantes/2.jpg"  },
  { name: "Participante 3",  photo: "images/participantes/3.jpg"  },
  { name: "Participante 4",  photo: "images/participantes/4.jpg"  },
  { name: "Participante 5",  photo: "images/participantes/5.jpg"  },
  { name: "Participante 6",  photo: "images/participantes/6.jpg"  },
  { name: "Participante 7",  photo: "images/participantes/7.jpg"  },
  { name: "Participante 8",  photo: "images/participantes/8.jpg"  },
  { name: "Participante 9",  photo: "images/participantes/9.jpg"  },
  { name: "Participante 10", photo: "images/participantes/10.jpg" },
  { name: "Participante 11", photo: "images/participantes/11.jpg" },
  { name: "Participante 12", photo: "images/participantes/12.jpg" },
];

const grid = document.getElementById("participants-grid");

function renderParticipants() {
  grid.innerHTML = "";

  participants.forEach((person, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;

    const photo = document.createElement("div");
    photo.className = "card-photo";

    if (person.photo) {
      photo.style.backgroundImage = `url("${person.photo}")`;
      // Si la imagen no existe todavía, mostramos la inicial como respaldo
      const testImg = new Image();
      testImg.onerror = () => {
        photo.style.backgroundImage = "none";
        photo.textContent = person.name.charAt(0);
      };
      testImg.src = person.photo;
    } else {
      photo.textContent = person.name.charAt(0);
    }

    const name = document.createElement("div");
    name.className = "card-name";
    name.textContent = person.name;

    card.appendChild(photo);
    card.appendChild(name);
    card.addEventListener("click", () => selectParticipant(card));

    grid.appendChild(card);
  });
}

function selectParticipant(card) {
  document.querySelectorAll(".card.selected").forEach(c => c.classList.remove("selected"));
  card.classList.add("selected");

  const index = card.dataset.index;
  const person = participants[index];
  console.log("Seleccionado:", person.name);
  // Aquí puedes añadir lo que quieras que pase al elegir a alguien,
  // por ejemplo mostrar sus datos, redirigir a otra sección, etc.
}

renderParticipants();