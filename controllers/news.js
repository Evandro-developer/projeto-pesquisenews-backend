const isValidArticle = (article) => {
  // Lista de valores indesejados
  // List of unwanted values
  const undesiredValues = [null, "[Removed]", "https://removed.com", ""];

  // Verifica se algum valor indesejado está presente em quaisquer propriedades dos artigos
  // Checks if any unwanted value is present in any properties of the articles
  const hasUndesiredContent = [
    "title",
    "description",
    "source",
    "url",
    "urlToImage",
  ].some((prop) => undesiredValues.includes(article[prop]));

  // Verifica se tem uma data inválida
  // Checks for an invalid date
  const hasInvalidDate = article.publishedAt === "1970-01-01T00:00:00Z";

  return !(hasUndesiredContent || hasInvalidDate);
};

async function searchNews(req, res, next) {
  const keyWord = req.query.q;
  const lang = req.query.lang || "en";

  const toDate = new Date().toISOString().split("T")[0];
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];

  const baseURL = "https://nomoreparties.co/news/v2/everything?";
  const queryParams = [
    `q=${keyWord}`,
    `language=${lang}`,
    "sortBy=relevancy",
    "page=1",
    `from=${fromDate}`,
    `to=${toDate}`,
    "pageSize=100",
    `apiKey=${process.env.NEWS_API_KEY}`,
  ].join("&");

  const url = baseURL + queryParams;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar notícias: ${response.statusText}`);
    }

    const responseData = await response.json();

    const transformedArticles = responseData.articles
      .filter(isValidArticle)
      .map((article) => ({
        keyword: keyWord,
        title: article.title,
        description: article.description,
        publishedAt: article.publishedAt,
        source: article.source.name,
        url: article.url,
        urlToImage: article.urlToImage,
        lang,
      }));

    res.json({
      status: responseData.status,
      totalResults: transformedArticles.length,
      articles: transformedArticles,
    });
  } catch (err) {
    console.error("Erro ao buscar notícias:", err);
    const error = new Error("Erro ao buscar notícias.");
    error.status = 500;
    next(error);
  }
}

module.exports = { searchNews };
