import { Router } from "express";
import {
  memberRedirect,
  addNewArticle,
} from "../controllers/memberController.js";

const router = Router();

router.get("/", memberRedirect);
router.post("/newArticle", addNewArticle);

export default router;
