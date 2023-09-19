const quotes = [
    "十分方便！一键生成旅行相册视频，真是太方便了。",
    "独特的旅行回忆！MapTok以独特而酷炫的方式展示了我的旅行打卡照片。",
    // 添加其他评价...
];

const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
});
