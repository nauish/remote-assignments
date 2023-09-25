import { Router } from "express";
import { getArticle } from "../models/db.js";

const router = Router();

// Server-side rendered protected route
router.get("/", async (req, res) => {
  if (req.session.status) {
    const articles = await getArticle(req.session.email);
    res.render("member.ejs", { email: req.session.email, articles: articles });
  } else {
    res.redirect("/");
  }
});

export default router;
