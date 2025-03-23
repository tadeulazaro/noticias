// api/noticias.js
export default async function handler(req, res) {
    const apiKey = 'ee4e0f9306c94eef9444e4aceeb2641a';  // Sua chave da NewsAPI
    const targetUrl = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`;

    try {
        const response = await fetch(targetUrl);
        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(500).json({ error: 'Erro ao buscar notícias' });
        }
    } catch (error) {
        console.error('Erro na requisição à NewsAPI:', error);
        res.status(500).json({ error: 'Erro ao buscar notícias. Tente novamente mais tarde.' });
    }
}
