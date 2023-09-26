import { Router } from "express";
import { selectArticleByEmail, insertArticle } from "../models/db.js";

const router = Router();

// Server-side rendered protected route
router.get("/", async (req, res) => {
  if (req.session.status) {
    const articles = await selectArticleByEmail(req.session.email);
    res.render("member.ejs", { email: req.session.email, articles: articles });
  } else {
    res.redirect("/");
  }
});

router.post("/newArticle", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: "Please fill in the title and the content before submitting",
    });
  }

  await insertArticle(title, content, req.session.email);
  res.status(201).json({ success: true, message: "New article added!" });
});

export default router;
