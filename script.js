async function loadHackerData(hackerId) {
    try {
        // 1. Загружаем файл
        const response = await fetch('hackers.json');
        const data = await response.json();

        // 2. Ищем нужного хакера по ID
        const hacker = data.hackers.find(h => h.id === hackerId);

        if (hacker) {
            // 3. Вставляем данные в элементы на странице
            document.getElementById('hacker-title').textContent = hacker.name;
            document.getElementById('hacker-desc').textContent = hacker.full_text;
            document.getElementById('status-text').textContent = hacker.date;
        }
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
}

// Вызываем функцию при загрузке страницы (например, для White Hat)
loadHackerData('white-hat');