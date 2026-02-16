const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const historyList = document.getElementById('history-list');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

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

console.log('Script loaded'); // 스크립트가 로드되었는지 확인

generateBtn.addEventListener('click', () => {
    console.log('Generate button clicked'); // 버튼 클릭 확인

    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    console.log('Generated numbers:', sortedNumbers); // 생성된 숫자 확인

    numberElements.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
    });

    const historyItem = document.createElement('li');
    historyItem.textContent = sortedNumbers.join(', ');
    historyList.prepend(historyItem);
});