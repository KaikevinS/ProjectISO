/**
 * https://mongoosejs.com/docs/api/query.html
 */
//INI TEMPAT INSERT UPDATE DELETE NYELOK MODELE
const { Movie, KategoriMovie } = require("../models");//bisadirubah
const mongoose = require("mongoose");

//INI READ NOMER1
const queryMovie = async (req, res) => {
    let { keyword, tahun_terbit_awal, tahun_terbit_akhir } = req.query;
    let result = Movie.find();//MENGAMBIL SEMUA
    // result = result.or([{ kategori_id: 1 }, { kategori_id: 2 }]);

    if (keyword !== undefined) {
        result = result.where("nama", new RegExp(keyword, "i"));
    }

    if (tahun_terbit_awal !== undefined) {
        // result = result.where({ tahun_terbit: { $gte: tahun_terbit_awal } });
        result = result.where("tahun_terbit").gte(Number(tahun_terbit_awal));
    }

    if (tahun_terbit_akhir !== undefined) {
        // result = result.where({ tahun_terbit: { $lte: tahun_terbit_akhir } });
        result = result.where("tahun_terbit").lte(Number(tahun_terbit_akhir));
    }

    result = await result
        .sort({ _id: 1, kategori_id: -1, tahun_terbit: -1 })
        .populate("kategori")
        .exec();//buat jalano query jgn lupa!!!

    if (result.length < 1) {
        return res.status(404).json({ message: "Movie Tidak Ditemukan" });
    } else {
        return res.status(200).json(result);
    }
};

const getSingleMovie = async (req, res) => {
    const movie = await Movie.findById(Number(req.params.id))
        .populate("kategori")
        .exec();
    const result = movie;

    if (!result) {
        return res.status(404).json({ message: "Movie Tidak Ditemukan" });
    } else {
        return res.status(200).json(result);
    }
};

const postMovie = async (req, res) => {
    console.log(req.body);
    /**
     * untuk mencari maximum ID
     * db.movie.aggregate([{$group:{_id:"", "maxId":{$max:"$_id"}}}])
     *
     * https://www.mongodb.com/docs/manual/reference/operator/aggregation/max/
     *
     * Bila penasaran soal project
     * db.movie.aggregate([
    {$project:{nama:1,tahun_terbit:1,publisher:1,maxAiring:{$max:"$release.airing"}}}
])
     *
     * */
    //INI MENGGABUNGKAN JOIN DI SQL BISA DIHAPUS
    const getMaxId = await Movie.aggregate()
        .group({ _id: null, maxId: { $max: "$_id" } })
        .project({ _id: 0, maxId: 1 })
        .exec();

    const id = Number(getMaxId[0].maxId) + 1;

    const body = req.body;
    body["_id"] = id;
    let release = [];
    for (let index = 0; index < body.tipe.length; index++) {
        const name = [body.tipe[index]]
        release.push({
            _id:index,
            tipe:body.tipe[index],
            airing:body[name]
        })
        
    }
    body["release"] = release;


//INI CREATE NOMER 1!!
    try {
        const result = await Movie.create(body); 
        if (result) {
            return res.status(200).json({ msg: "Berhasil insert", id: id });
        } else {
            return res.status(500).json({ msg: "Gagal insert" });
        }
    } catch (error) {
        console.log(error);
    }
    

    
};
//INI UPDATE
const putMovie = async (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const result = await Movie.findOneAndUpdate({ _id: id }, body, {
        new: true,
    });

    if (result) {
        return res.status(200).json({ msg: "Berhasil Update", result: result });
    } else {
        return res.status(500).json({ msg: "Gagal Update" });
    }
};
//INI DELETE NOMER 1    
const deleteMovie = async (req, res) => {
    const id = req.params.id;
    const result = await Movie.deleteOne({ _id: Number(id) });

    if (result) {
        return res.status(200).json({ msg: "Berhasil Delete", result: result });
    } else {
        return res.status(500).json({ msg: "Gagal Delete" });
    }
};

module.exports = {
    queryMovie,
    getSingleMovie,
    postMovie,
    putMovie,
    deleteMovie,
};
