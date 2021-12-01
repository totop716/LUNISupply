import express from "express";
import controller from "../controllers/main";
const router = express.Router();

router.get("/", controller.getTotalSupply);

export = router;
