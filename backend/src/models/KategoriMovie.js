const { mongoose, Schema } = require("mongoose");

const KategoriMovieSchema = new Schema({
    _id: Number,
    nama: String,
});

KategoriMovieSchema.virtual("id").get(function () {
    return this._id.toString();
});

KategoriMovieSchema.set("toJSON", {
    virtuals: true,
});

/**
 * Parameter ketiga model adalah nama collection di mongodb mu
 */
const KategoriMovie = mongoose.model(
    "kategori_movie",
    KategoriMovieSchema,
    "kategori_movie"
);

module.exports = KategoriMovie;
