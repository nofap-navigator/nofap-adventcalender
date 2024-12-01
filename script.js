const challenges = {
    "1": "Go for a 20min walk",
    "2": "Read 15 pages of a book your choice",
    "3": "Hug a family member or a friend",
    "4": "Journal. Write down 4 things you are proud of and 1 thing you need to work on, regarding NoFap",
    "5": "Work out for at least 20mins",
    "6": "Cook yourself a healthy meal and and enjoy Saint Nicholas Day",
    "7": "Educate yourself about the devastating consequences frequent masturbation and porn usage has.",
    "8": "Go and compliment a stranger",
    "9": "Make a list of benefits and challenges you are facing coming to NoFap",
    "10": "Build a snowman",
    "11": "Delete any nsfw material if you have not done so already",
    "12": "Do 25 push-ups now!",
    "13": "Leave your comfort zone twice today",
    "14": "No social media for the rest of the day",
    "15": "Create a list of books you want to read",
    "16": "Write a letter to your future self (at least few sentences)",
    "17": "Next level: Go and compliment two strangers",
    "18": "Create a To-Do list",
    "19": "This one is special: try a new sport/activity",
    "20": "Groom yourself",
    "21": "Clean up your apartment",
    "22": "Check: Got presents for your friends and family?",
    "23": "Write down what you are pround of and where to progress",
    "24": "Merry Christmas. Celebrate with friends and family. You progressed!"
};

// Optional: Bilder für spezielle Türchen hinzufügen (nur für Tag 6 und 24)
const images = {};

function createCalendar() {
    const doorsContainer = document.getElementById('doors');
    for (let day = 1; day <= 24; day++) {
        const door = document.createElement('div');
        door.classList.add('door');
        door.innerText = day;
        door.addEventListener('click', function() {
            openDoor(day);
        });
        doorsContainer.appendChild(door);
    }
}
function createCalendar() {
    const doorsContainer = document.getElementById('doors');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    // Verhindere das Erstellen des Kalenders, wenn es nach Weihnachten ist
    if (currentMonth === 11 && currentDay > 24) {
        const message = document.createElement('div');
        message.innerText = "The calendar has ended. Merry Christmas!";
        message.style.color = "white";
        message.style.textAlign = "center";
        message.style.marginTop = "20px";
        doorsContainer.appendChild(message);
        return;
    }

    // Generiere die Türchen nur bis zum 24. Dezember
    for (let day = 1; day <= 24; day++) {
        const door = document.createElement('div');
        door.classList.add('door');
        door.innerText = day;

        // Türchen freigeben, wenn es heute oder in der Vergangenheit liegt
        if (day <= currentDay) {
            door.addEventListener('click', function () {
                openDoor(day);
            });
        } else {
            // Türchen deaktivieren, wenn es in der Zukunft liegt
            door.style.opacity = "0.7"; // Optisch ausgegraut
            door.style.cursor = "not-allowed"; // Zeiger zeigt blockiert
            door.addEventListener('click', function () {
                alert("You can't open this door yet!");
            });
        }

        doorsContainer.appendChild(door);
    }
}

function openDoor(day) {
    const modal = document.getElementById('modal');
    const challengeText = document.getElementById('challenge-text');
    const modalContent = document.querySelector('.modal-content');

    // Entferne vorherige Bilder, falls vorhanden
    const previousImage = document.getElementById('challenge-image');
    if (previousImage) {
        previousImage.remove();
    }

    // Überprüfe, ob ein Bild für diesen Tag existiert und füge es hinzu
    if (images[day]) {
        const img = document.createElement('img');
        img.src = images[day];
        img.id = 'challenge-image';
        modalContent.insertBefore(img, challengeText);
    }

    // Setze den Challenge-Text
    challengeText.innerText = challenges[day];
    modal.style.display = 'flex';
}

// Modal schließen
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Kalender erstellen, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', createCalendar);
