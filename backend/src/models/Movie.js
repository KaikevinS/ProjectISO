const { mongoose, Schema } = require("mongoose");

const MovieSchema = new Schema({
    _id: Number,//Ini gausah kalau id tdk dimintai input
    nama: String,
    tahun_terbit: Number,
    kategori: { type: Number, ref: "kategori_movie" },
    publisher: String,
    deskripsi: String,
    img: String,
    // release: [{ _id: mongoose.Types.ObjectId, tipe: String, airing: Number }],
    release: [{ _id: Number, tipe: String, airing: Number }],//tabel didalam tabel
});

MovieSchema.virtual("id").get(function () {//id tidak dimintai input / auto increment ini gausah
    return this._id.toString();
});

MovieSchema.set("toJSON", {
    virtuals: true,
});

/**
 * Parameter ketiga model adalah nama collection di mongodb mu
 */
const Movie = mongoose.model("movie", MovieSchema, "movie");//nama tabel di mongodb

module.exports = Movie; // file ini dipanggil ke index model
