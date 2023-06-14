const express = require("express");
const router = express.Router();
const { queryKategori } = require("../controllers/kategori");

router.get("/", queryKategori);

module.exports = router;
