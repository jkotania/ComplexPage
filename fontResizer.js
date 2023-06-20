// Pobierz elementy przycisków plus i minus
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');

// Pobierz elementy, których rozmiar czcionki będzie zmieniany
const targetElements = {
  'h1': { size: 40, step: 4 },
  'a': { size: 16, step: 2 },
  'td': { size: 16, step: 2 },
  'th': { size: 16, step: 2 }
};

// Obsługa kliknięcia przycisku plus
plusButton.addEventListener('click', increaseFontSize);

// Obsługa kliknięcia przycisku minus
minusButton.addEventListener('click', decreaseFontSize);

// Zwiększ rozmiar czcionki
function increaseFontSize() {
  changeFontSize('increase');
}

// Zmniejsz rozmiar czcionki
function decreaseFontSize() {
  changeFontSize('decrease');
}

// Zmienia rozmiar czcionki dla wszystkich docelowych elementów
function changeFontSize(action) {
  for (const selector in targetElements) {
    const elementInfo = targetElements[selector];
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const currentSize = parseFloat(getComputedStyle(element).fontSize);
      let newSize;
      if (action === 'increase') {
        newSize = currentSize + elementInfo.step;
      } else if (action === 'decrease') {
        newSize = currentSize - elementInfo.step;
      }
      element.style.fontSize = `${newSize}px`;
    });
  }
}
