class Ajax {
    /**
     * GET запрос
     * @param {string} url - Адрес запроса
     * @returns {Promise<any>} - Результат в виде JSON
     */
    async get(url) {
        try {
            const response = await fetch(url);
            return this._handleResponse(response);
        } catch (error) {
            this._handleError(error);
        }
    }

    /**
     * POST запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для отправки
     * @returns {Promise<any>} - Результат в виде JSON
     */
    async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return this._handleResponse(response);
        } catch (error) {
            this._handleError(error);
        }
    }

    /**
     * PATCH запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для обновления
     * @returns {Promise<any>} - Результат в виде JSON
     */
    async patch(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return this._handleResponse(response);
        } catch (error) {
            this._handleError(error);
        }
    }

    /**
     * DELETE запрос
     * @param {string} url - Адрес запроса
     * @returns {Promise<any>} - Результат в виде JSON
     */
    async delete(url) {
        try {
            const response = await fetch(url, {
                method: 'DELETE'
            });
            return this._handleResponse(response);
        } catch (error) {
            this._handleError(error);
        }
    }

    /**
     * Обработчик успешного ответа
     * @param {Response} response - Объект Response из fetch
     * @returns {Promise<any>} - JSON или null
     */
    async _handleResponse(response) {
        let data = null;
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Data: ${JSON.stringify(data)}`);
        }

        return data;
    }

    /**
     * Обработчик ошибок
     * @param {Error} error - Ошибка
     */
    _handleError(error) {
        console.error('Network or fetch error:', error);
        throw error;
    }
}

// Экспортируем экземпляр
export const ajax = new Ajax();