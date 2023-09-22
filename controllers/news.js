const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

async function getNews(req, res, next) {
  const keyWord = req.query.q;

  if (!keyWord) {
    return res
      .status(400)
      .json({ error: "O termo de pesquisa é obrigatório." });
  }

  const toDate = new Date().toISOString().split("T")[0];
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];

  try {
    const response = await newsapi.v2.everything({
      q: keyWord,
      language: "pt",
      sortBy: "relevancy",
      page: 1,
      from: fromDate,
      to: toDate,
      pageSize: 100,
    });

    // Formata a resposta dos artigos para se adequar ao esquema article
    const transformedArticles = response.articles.map((article) => ({
      keyword: keyWord,
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      source: article.source.name,
      url: article.url,
      urlToImage: article.urlToImage,
    }));

    // Mantem o formato geral da resposta da NewsAPI, mas substitui a response no campo de artigos
    res.json({
      status: response.status,
      totalResults: response.totalResults,
      articles: transformedArticles,
    });
  } catch (err) {
    console.error("Erro ao buscar notícias:", err);
    const error = new Error("Erro ao buscar notícias.");
    error.status = 500;
    next(error);
  }
}

module.exports = {
  getNews,
};
