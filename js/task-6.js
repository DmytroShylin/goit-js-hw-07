// Отримуємо посилання на елементи DOM
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Функція для отримання випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для створення боксів
function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  
  boxesContainer.innerHTML = ''; // Очищаємо попередні бокси
  boxesContainer.appendChild(fragment);
}

// Функція для очищення боксів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Обробник кліку на кнопку Create
createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищаємо значення input
  }
});

// Обробник кліку на кнопку Destroy
destroyButton.addEventListener('click', destroyBoxes);