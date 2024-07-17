import fetch from 'node-fetch';

async function Test() {
  const prompt = 'расскажи длинный рассказ на русском языке?'; // ваш запрос

  try {
    const response = await fetch('http://127.0.0.1:8080/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Выводим сгенерированный текст из поля content
    console.log(data.content);
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
  }
}

Test();
