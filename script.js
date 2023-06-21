// Pobierz elementy, których style będą zmieniane
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const body = document.body;
const headings = document.querySelectorAll('h1, h2, h3');
const paragraphs = document.querySelectorAll('p');
const projectHeadings = document.querySelectorAll('.projects h2, .projects h3');
const projectParagraphs = document.querySelectorAll('.projects p');

// Obsługa kliknięcia na element kontrastu
const contrastElement = document.querySelector('.contrast');
plusButton.addEventListener('click', increaseFontSize);
minusButton.addEventListener('click', decreaseFontSize);
contrastElement.addEventListener('click', toggleContrast);

function increaseFontSize() {
  const currentFontSize = parseInt(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = `${currentFontSize + 2}px`;
}

// Zmniejsz rozmiar czcionki
function decreaseFontSize() {
  const currentFontSize = parseInt(getComputedStyle(document.body).fontSize);
  if (currentFontSize > 12) {
    document.body.style.fontSize = `${currentFontSize - 2}px`;
  }
}

var video = document.getElementById("video-bg"); // Pobierz element odtwarzacza wideo
var pauseButton = document.getElementById("pauseButton"); // Pobierz przycisk pauzy
var pauseIcon = document.getElementById("pause-button");

// Dodaj obsługę kliknięcia przycisku pauzy
pauseButton.addEventListener("click", function() {
  if (video.paused) {
    video.play(); // Jeśli wideo jest zatrzymane, uruchom odtwarzanie
    pauseIcon.classList.remove("fa-play")
    pauseIcon.classList.add("fa-pause") // Zmień ikonę na przycisku na ikonę pauzy
  } else {
    video.pause(); // Jeśli wideo jest odtwarzane, zatrzymaj odtwarzanie
    pauseIcon.classList.remove("fa-pause")
    pauseIcon.classList.add("fa-play") // Zmień ikonę na przycisku na ikonę odtwarzania (play)
  }
});

function toggleContrast() {
  body.classList.toggle('high-contrast');
  headings.forEach((heading) => heading.classList.toggle('high-contrast'));
  paragraphs.forEach((paragraph) => paragraph.classList.toggle('high-contrast'));
  projectHeadings.forEach((heading) => heading.classList.toggle('high-contrast'));
  projectParagraphs.forEach((paragraph) => paragraph.classList.toggle('high-contrast'));
}



        // Pobierz elementy, których style będą zmieniane
        const td = document.querySelectorAll('td');
        const th = document.querySelectorAll('th');

        // Obsługa kliknięcia na element kontrastu
        const table = document.getElementById('myTable');
        contrastElement.addEventListener('click', toggleContrast);

        function toggleContrast() {
            body.classList.toggle('high-contrast');
            headings.forEach((heading) => heading.classList.toggle('high-contrast'));
            paragraphs.forEach((paragraph) => paragraph.classList.toggle('high-contrast'));
            td.forEach((td) => td.classList.toggle('high-contrast'));
            th.forEach((th) => th.classList.toggle('high-contrast'));
            table.classList.toggle('custom-table')
        }