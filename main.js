const generateBtn = document.getElementById('generate-btn');
const menuElement = document.querySelector('.menu');
const historyList = document.getElementById('history-list');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const dinnerMenus = ["Pizza", "Hamburger", "Sushi", "Pasta", "Chicken", "Salad", "Steak", "Taco", "Ramen", "Curry"];

// Load saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

console.log('Script loaded');

generateBtn.addEventListener('click', () => {
    console.log('Generate button clicked');

    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];

    console.log('Recommended menu:', recommendedMenu);

    menuElement.textContent = recommendedMenu;

    const historyItem = document.createElement('li');
    historyItem.textContent = recommendedMenu;
    historyList.prepend(historyItem);
});