const Article = require("../models/article");
const User = require("../models/user");
const ArticleNotFoundError = require("../errors/ArticleNotFoundError");
const UnauthorizedError = require("../errors/UnauthorizedError");

const getSavedArticles = (req, res, next) => {
  const userId = req.user._id;

  Article.find({ owner: userId })
    .then((articles) => {
      return res.json({ articles: articles });
    })
    .catch(next);
};

const createArticle = async (req, res, next) => {
  try {
    const ownerId = req.user._id;

    // Obtém os dados do artigo diretamente do corpo da solicitação
    const {
      keyword,
      title,
      description,
      publishedAt,
      source,
      url,
      urlToImage,
    } = req.body;

    // Procura por um artigo existente na coleção Article com a mesma URL e owner
    const existingArticle = await Article.findOne({ url, owner: ownerId });

    // Verifica se um artigo com a mesma URL já existe
    if (existingArticle) {
      throw new Error("Este artigo já foi salvo.");
    }

    // Cria um novo artigo na coleção Article
    const newArticle = await Article.create({
      keyword,
      title,
      description,
      publishedAt,
      source,
      url,
      urlToImage,
      owner: ownerId,
    });

    // Atualiza o usuário para adicionar o ID do novo artigo aos savedArticles
    await User.findByIdAndUpdate(
      ownerId,
      { $push: { savedArticles: newArticle._id } },
      { new: true }
    );

    // Constrói a resposta
    const articlesArray = [newArticle];
    const response = {
      totalResults: articlesArray.length,
      articles: articlesArray,
      _id: articlesArray[0]._id.toString(),
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

const deleteArticle = (req, res, next) => {
  const { articlesId } = req.params;
  const userId = req.user._id;

  Article.findById(articlesId)
    .populate("owner", "email name")
    .then((article) => {
      if (!article) {
        throw new ArticleNotFoundError();
      }

      if (article.owner._id.toString() !== userId) {
        throw new UnauthorizedError();
      }

      return Article.findByIdAndDelete(articlesId);
    })
    .then((deletedArticle) => {
      if (!deletedArticle) {
        throw new ArticleNotFoundError();
      }

      // Após deletar o artigo, atualiza o usuário para remover o ID do artigo dos savedArticles
      return User.findByIdAndUpdate(
        userId,
        { $pull: { savedArticles: articlesId } },
        { new: true }
      );
    })
    .then(() => {
      res.json({ message: "Este artigo foi excluído" });
    })
    .catch(next);
};

module.exports = {
  getSavedArticles,
  createArticle,
  deleteArticle,
};
