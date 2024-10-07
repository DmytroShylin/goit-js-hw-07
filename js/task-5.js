// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо необхідні елементи DOM
const changeColorBtn = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');

// Додаємо обробник події для кнопки
changeColorBtn.addEventListener('click', function() {
  // Генеруємо новий випадковий колір
  const newColor = getRandomHexColor();
  
  // Змінюємо колір фону body
  document.body.style.backgroundColor = newColor;
  
  // Оновлюємо текст у span з новим кольором
  colorSpan.textContent = newColor;
});