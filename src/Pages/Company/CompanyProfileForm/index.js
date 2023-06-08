import React, { useEffect, useReducer, useState } from "react";
import zainzoWhiteLogo from "../../../Assets/facitIcons/red-logo.svg";
import CustomInput from "../../../Components/CustomInput";
import SignatureExampleImage from "../../../Assets/signature-example.png";
import { IoAddCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { getToken } from "../../../Utils/Common";
import axios from "axios";

const CompanyProfileForm = () => {
  const [dataCompany, setDataCompany] = useState({
    company_logo: null,
    company_alamat: "",
    company_province: "",
    company_city: "",
    company_portalcode: "",
    company_phone: "",
    company_email: "",
    company_bpjs: "",
    company_jkk: "",
    company_npwp: "",
    company_taxable_date: "",
    company_tax_person_name: "",
    company_tax_person_npwp: "",
    company_klu: "",
    company_sign: null,
  });
  const [company_esign, setCompany_esign] = useState(null);
  const [signPreview, setSignPreview] = useState(null);
  const [company_logo, setCompany_logo] = useState(null);
  const [LogoPreview, setLogoPreview] = useState(null);

  useEffect(() => {
    axios
      .get("https://people.api.zainzo.com/api/admin/company", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        console.log(response.data.company);
        setSignPreview(response.data.company[0].company_esign);
        setDataCompany({
          ...dataCompany,
          company_logo: response.data.company[0].company_logo,
          company_alamat: response.data.company[0].company_alamat,
          company_province: response.data.company[0].company_province,
          company_city: response.data.company[0].company_city,
          company_portalcode: response.data.company[0].company_portalcode,
          company_phone: response.data.company[0].company_phone,
          company_email: response.data.company[0].company_email,
          company_bpjs: response.data.company[0].company_bpjs,
          company_jkk: response.data.company[0].company_jkk,
          company_npwp: response.data.company[0].company_npwp,
          company_taxable_date: response.data.company[0].company_taxable_date,
          company_tax_person_name: response.data.company[0].company_tax_person_name,
          company_tax_person_npwp: response.data.company[0].company_tax_person_npwp,
          company_klu: response.data.company[0].company_klu,
          company_sign: response.data.company[0].company_sign,
        });
        console.log(dataCompany);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const onSubmit = (e) => {
    let formData = new FormData();
    formData.append("company_esign", company_esign);
    formData.append("company_logo", company_logo);
    e.preventDefault();
    axios
      .post(
        `https://people.api.zainzo.com/api/admin/company/edit`,
        {
          company_alamat: dataCompany.company_alamat,
          company_province: dataCompany.company_province,
          company_city: dataCompany.company_city,
          company_portalcode: dataCompany.company_portalcode,
          company_phone: dataCompany.company_phone,
          company_email: dataCompany.company_email,
          company_bpjs: dataCompany.company_bpjs,
          company_jkk: dataCompany.company_jkk,
          company_npwp: dataCompany.company_npwp,
          company_taxable_date: dataCompany.company_taxable_date,
          company_tax_person_name: dataCompany.company_tax_person_name,
          company_tax_person_npwp: dataCompany.company_tax_person_npwp,
          company_klu: dataCompany.company_klu,
        },
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`,
          },
          // body: JSON.stringify(inputData),
        }
      )
      .then((response) => {
        console.log(response.data.message);
        toast.success("Data berhasil disimpan");
        console.log(dataCompany);
      })
      .catch((error) => {
        console.log(error);
        toast.error("data gagal disimpan");
      });

    axios
      .post(
        `https://people.api.zainzo.com/api/admin/company/upload/e-sign`,
        { company_esign: formData.get("company_esign") },
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`,
          },
          // body: JSON.stringify(inputData),
        }
      )
      .then((response) => {
        console.log(response.data.message);
        // toast.success("Data berhasil disimpan");
        console.log(dataCompany);
      })
      .catch((error) => {
        console.log(error);
        // toast.error("data gagal disimpan");
      });

    axios
      .post(
        `https://people.api.zainzo.com/api/admin/company/upload/logo`,
        { company_logo: formData.get("company_logo") },
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.message);
        // toast.success("")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const newDataCompany = { ...dataCompany };
    newDataCompany[e.target.name] = e.target.value;
    setDataCompany(newDataCompany);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <img src={dataCompany.company_logo ? `https://people.api.zainzo.com/storage/${dataCompany.company_logo}` : zainzoWhiteLogo} alt="Company Logo" className={`h-16 ${company_logo && "hidden"}`} />
          <img src={company_logo && LogoPreview} alt="Company Logo" className={`h-16 ${!company_logo && "hidden"}`} />
          <div className="mt-6">
            <label className="items-center px-6 py-1.5 bg-white text-gray-disabledText rounded-full border border-gray-disabledText cursor-pointer">
              <span className="text-sm font-semibold text-gray-disabledText">Change Logo</span>
              <input
                name="company_logo"
                type="file"
                accept="image/png, image/jpg"
                className="hidden"
                onChange={(e) => {
                  if (!e.target.files[0]) return;
                  setCompany_logo(e.target.files[0]);
                  setLogoPreview(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </label>
          </div>
          <div className="mt-10">
            <CustomInput name="company_alamat" id="alamat" title="Alamat Perusahaan" onChange={handleChange} value={dataCompany.company_alamat} />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-9 gap-y-10">
            <CustomInput name="company_province" id="provinsi" title="Provinsi" onChange={handleChange} value={dataCompany.company_province} />
            <CustomInput name="company_city" id="kota" title="Kota" onChange={handleChange} value={dataCompany.company_city} />
            <CustomInput name="company_portalcode" id="kodepos" title="Kode Pos" type="number" onChange={handleChange} value={dataCompany.company_portalcode} />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-9 gap-y-10">
            <CustomInput name="company_phone" id="notelp" title="No. Telp" onChange={handleChange} value={dataCompany.company_phone} />
            <CustomInput name="company_email" id="email" title="Email" type="email" onChange={handleChange} value={dataCompany.company_email} />
            <CustomInput name="company_bpjs" id="bpjs" title="BPJS" onChange={handleChange} value={dataCompany.company_bpjs} />
            <CustomInput name="company_JKK" id="JKK" title="JKK" onChange={handleChange} value={dataCompany.company_jkk} />
            <CustomInput name="company_npwp" id="npwp" title="NPWP Perusahaan" onChange={handleChange} value={dataCompany.company_npwp} />
            <CustomInput name="company_taxable_date" id="taxable" title="Tgl. Bayar Pajak" type="date" onChange={handleChange} value={dataCompany.company_taxable_date} />
            <CustomInput name="company_tax_person_name" id="namapajak" title="Nama Pemilik Pajak" onChange={handleChange} value={dataCompany.company_tax_person_name} />
            <CustomInput name="company_tax_person_npwp" id="npwppajak" title="Nama Pemilik NPWP" onChange={handleChange} value={dataCompany.company_tax_person_npwp} />
            <CustomInput name="company_klu" id="kodeklu" title="Kode KLU" type="number" onChange={handleChange} value={dataCompany.company_klu} />
          </div>
        </div>
        <p className="mt-10 w-[303px] text-sm text-gray-disabledText leading-5">Upload your scanned signature with company stamp to be attached on 1721-A1 document.</p>
        <div className="mt-8 flex gap-9 items-center">
          <label className="group relative flex justify-center w-[250px] h-[110px] items-center bg-white text-gray-disabledText rounded-2xl border border-red-main border-dashed cursor-pointer overflow-hidden">
            {dataCompany.company_sign && (
              <div className="absolute top-0 left-0 right-0 bottom-0 m-1 rounded-xl flex items-center justify-center overflow-hidden">
                <img src={`https://people.api.zainzo.com/storage/${dataCompany.company_sign}`} alt="Signature" className={`min-w-full min-h-full ${company_esign && "hidden"}`} />
                <img src={signPreview} alt="Signature" className={`min-w-full min-h-full ${!company_esign && "hidden"}`} />
                {/* <img src={URL.createObjectURL(inputData.signature)} alt="Signature" className="min-w-full min-h-full" /> */}
              </div>
            )}
            <div className={`${dataCompany.company_sign && "hidden group-hover:flex group-hover:bg-white/40"} z-10 text-sm font-semibold flex w-full h-full justify-center items-center transition-all`}>
              <div className="flex items-center gap-1 text-red-main">
                <span>Upload E-Sign</span> <IoAddCircleOutline />
              </div>
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={(e) => {
                if (!e.target.files[0]) return;
                setCompany_esign(e.target.files[0]);
                setSignPreview(URL.createObjectURL(e.target.files[0]));
              }}
              // onChange={(e) => setCompany_esign(e.target.files[0])}
            />
          </label>
          <img src={SignatureExampleImage} alt={"Example Signature"} />
        </div>
        <div className="mt-16 flex">
          <button className="ml-auto bg-red-main text-white rounded-full py-4 px-12">Save</button>
        </div>
      </form>
    </div>
  );
};

export default CompanyProfileForm;
