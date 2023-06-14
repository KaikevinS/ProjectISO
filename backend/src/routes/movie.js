const express = require("express");
const router = express.Router();
const multer = require("multer")
const {
    queryMovie,
    getSingleMovie,
    postMovie,
    putMovie,
    deleteMovie,
} = require("../controllers/movie");//ini dirubah

const upload = multer();

router.get("/", queryMovie);//ini dirubah
router.get("/:id", getSingleMovie);//ini dirubah
router.post("/",upload.none(), postMovie);//ini dirubah
router.put("/:id", putMovie);//ini dirubah
router.delete("/:id", deleteMovie);//ini dirubah

module.exports = router;
