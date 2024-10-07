// 1. Знаходимо список категорій
const categoriesList = document.querySelector('#categories');

// Отримуємо кількість категорій
const categoriesCount = categoriesList.children.length;
console.log(`Number of categories: ${categoriesCount}`);

// 2. Для кожної категорії виводимо інформацію
const categories = document.querySelectorAll('.item');

categories.forEach(category => {
    // Знаходимо заголовок категорії
    const categoryTitle = category.querySelector('h2').textContent;
    
    // Знаходимо всі елементи в категорії
    const elementsCount = category.querySelectorAll('li').length;
    
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsCount}`);
});