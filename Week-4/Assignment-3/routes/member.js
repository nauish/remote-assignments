import { Router } from "express";

const router = Router();

// Server-side rendered protected route
router.get("/", (req, res) => {
  if (req.session.status) {
    res.render("member.ejs", { email: req.session.email });
  } else {
    res.redirect("/");
  }
});

export default router;
