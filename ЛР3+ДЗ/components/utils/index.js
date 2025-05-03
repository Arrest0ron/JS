export class TrackUtils {
    // 1. Поиск групп анаграмм
    static findAnagramGroups(titles) {
        const anagrams = {};
        for (let title of titles) {
            const key = this.normalizeTitle(title);
            if (!anagrams[key]) anagrams[key] = [];
            anagrams[key].push(title);
        }
        return Object.values(anagrams).filter(group => group.length >= 2);
    }

    // 2. Нормализация названия для анаграмм
    static normalizeTitle(title) {
        return title
            .toLowerCase()
            .replace(/[\s']/g, '')
            .split('')
            .sort()
            .join('');
    }

    // 3. Фильтрация треков по выбранным анаграммам
    static filterByAnagramKeys(data, selectedKeys) {
        return data.filter(track => {
            const key = this.normalizeTitle(track.title);
            return selectedKeys.includes(key);
        });
    }

    // 4. Создание "жадной" квадратной матрицы
    static createSquareMatrix(arr) {
        const length = arr.length;
        let size = Math.floor(Math.sqrt(length));
        if (size < 2) return null;

        const totalElements = size * size;
        const trimmed = arr.slice(0, totalElements);
        const matrix = [];

        for (let i = 0; i < size; i++) {
            matrix.push(trimmed.slice(i * size, (i + 1) * size));
        }

        return matrix;
    }

    // 5. Сумма элементов главной и побочной диагоналей
    static diagonalSum(matrix) {
        let sum = 0;
        const n = matrix.length;

        for (let i = 0; i < n; i++) {
            sum += matrix[i][i];                 // Главная диагональ
            sum += matrix[i][n - 1 - i];         // Побочная диагональ
        }

        // Учитываем центральный элемент только один раз для нечётных матриц
        if (n % 2 === 1) {
            const mid = Math.floor(n / 2);
            sum -= matrix[mid][mid];
        }

        return sum;
    }

    // 6. Сумма квадратов элементов массива
    static sumOfSquares(arr) {
        return arr.reduce((sum, num) => sum + num ** 2, 0);
    }

    // 7. Сумма и произведение элементов массива
    static getSumAndMultOfArray(arr) {
        const sum = arr.reduce((acc, num) => acc + num, 0);
        const mult = arr.length > 0 ? arr.reduce((acc, num) => acc * num, 1) : 0;
        return { sum, mult };
    }

    // 8. Рендеринг анаграмм в интерфейсе
    static renderAnagramGroups(container, groups, onChange) {
        container.innerHTML = '';

        if (groups.length === 0) {
            container.innerHTML = '<p>Группы анаграмм среди треков не найдены.</p>';
            return;
        }

        container.innerHTML += '<p>Группы анаграмм среди треков:</p>';

        groups.forEach((group, index) => {
            const key = this.normalizeTitle(group[0]);
            const groupName = group.join(', ');
            const checkboxHTML = `
                <div style="margin-bottom: 8px;">
                    <input type="checkbox" id="anagram-group-${index}" data-anagram-key="${key}">
                    <label for="anagram-group-${index}">${groupName}</label>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', checkboxHTML);

            const checkbox = document.getElementById(`anagram-group-${index}`);
            checkbox.addEventListener('change', onChange);
        });
    }

    // 9. Получение выбранных ключей анаграмм
    static getSelectedAnagramKeys(container) {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
        return Array.from(checkboxes).map(cb => cb.dataset.anagramKey);
    }
}