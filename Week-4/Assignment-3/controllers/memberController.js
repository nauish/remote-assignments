import { selectArticleByEmail, insertArticle } from "../models/db.js";

const memberRedirect = async (req, res) => {
  if (req.session.status) {
    const articles = await selectArticleByEmail(req.session.email);
    res.render("member.ejs", { email: req.session.email, articles: articles });
  } else {
    res.redirect("/");
  }
};

const addNewArticle = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: "Please fill in the title and the content before submitting",
    });
  }

  await insertArticle(title, content, req.session.email);
  res.status(201).json({ success: true, message: "New article added!" });
};

export { memberRedirect, addNewArticle };
