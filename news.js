// News ticker data for Kurdish sports and movies
const newsItems = [
    "هەر کەسەکئ تو بنیاسی و ژهەژی هندئ بیت بهئت زێدە کرن لپەشئ پەیوەندی ریسالەکئ بومە فرئکە",
];

// Function to initialize the news ticker
function initNewsTicker() {
    const tickerText = document.querySelector('.ticker-text');
    if (tickerText) {
        // Shuffle and display news
        const shuffledNews = [...newsItems];
        for (let i = shuffledNews.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledNews[i], shuffledNews[j]] = [shuffledNews[j], shuffledNews[i]];
        }
        tickerText.innerHTML = shuffledNews.map(item =>
            `<a href="#" class="news-link" onclick="alert('${item}')">${item}</a>`
        ).join('<span class="separator"> • </span>');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initNewsTicker);
