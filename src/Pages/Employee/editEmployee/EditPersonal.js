import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { getToken } from "../../../Utils/Common";
import { useNavigate } from "react-router-dom";
import { SelectImgContext } from "../DetailEmployee";
import { toast } from "react-toastify";

function EditPersonal({ id }) {
  const [datalist, setData] = useState([]);
  const [fullname, setFullname] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [maritualStatus, setMaritualStatus] = useState("");
  const [blood, setBlood] = useState("");
  const [religion, setReligion] = useState("");
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [portalCode, setPortalCode] = useState("");
  const [idExp, setIdExp] = useState("");
  const [idAddr, setIdAddr] = useState("");
  const [residentialAddr, setResidentialAddr] = useState("");

  const { selectImg } = useContext(SelectImgContext);

  const [permanent, setPermanent] = useState(false);

  useEffect(() => {
    console.log(selectImg);
    axios
      .get(`https://people.api.zainzo.com/api/admin/employee/personal/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data[0]);
        setFullname(res.data.data[0].employee_fullname);
        setNickname(res.data.data[0].employee_nickname);
        setEmail(res.data.data[0].email);
        setPhoneNumber(res.data.data[0].employee_phone_number);
        setBirthPlace(res.data.data[0].employee_birth_place);
        setDob(res.data.data[0].employee_dob);
        setGender(res.data.data[0].employee_gender);
        setMaritualStatus(res.data.data[0].employee_maritual_status);
        setBlood(res.data.data[0].employee_blood);
        setReligion(res.data.data[0].employee_religion);
        setIdType(res.data.data[0].employee_id_type);
        setIdNumber(res.data.data[0].employee_id_number);
        setPortalCode(res.data.data[0].employee_portal_code);
        setIdExp(res.data.data[0].employee_exp_date);
        setIdAddr(res.data.data[0].employee_id_address);
        setResidentialAddr(res.data.data[0].employee_residential_addr);
      })
      .catch((err) => console.log(err.message));
  }, [id]);
  // console.log(getToken());
  const data = {
    employee_fullname: fullname,
    employee_photo: selectImg,
    employee_nickname: nickname,
    email: email,
    employee_phone_number: phoneNumber,
    employee_birth_place: birthPlace,
    employee_dob: dob,
    employee_gender: gender,
    employee_maritual_status: maritualStatus,
    employee_blood: blood,
    employee_religion: religion,
    employee_id_type: idType,
    employee_id_number: idNumber,
    employee_portal_code: portalCode,
    employee_exp_date: idExp,
    employee_id_address: idAddr,
    employee_residential_addr: residentialAddr,
  };

  const handleSave = () => {
    const formData = new FormData();

    formData.append("employee_fullname", fullname);
    formData.append("employee_photo", selectImg);
    formData.append("employee_nickname", nickname);
    formData.append("email", email);
    formData.append("employee_phone_number", phoneNumber);
    formData.append("employee_birth_place", birthPlace);
    formData.append("employee_dob", dob);
    formData.append("employee_gender", gender);
    formData.append("employee_maritual_status", maritualStatus);
    formData.append("employee_blood", blood);
    formData.append("employee_religion", religion);
    formData.append("employee_id_type", idType);
    formData.append("employee_id_number", idNumber);
    formData.append("employee_portal_code", portalCode);
    formData.append("employee_exp_date", idExp);
    formData.append("employee_id_address", idAddr);
    formData.append("employee_residential_addr", residentialAddr);
    // fetch(`https://people.api.zainzo.com/api/admin/update/personal/${id}`, {
    //   method: "POST",
    //   headers: {
    //     // "Content-Type": "application/json",
    //     Authorization: "Bearer " + getToken(),
    //   },
    //   // body: JSON.stringify(data),
    //   body: formData,
    // })
    //   .then((response) => {
    //     if (response.status >= 400) {
    //       alert("Isi Data anda dengan lengkap!");
    //     } else {
    //       alert("Data Berhasil Diubah!");
    //       console.log(formData.get("employee_photo"));
    //       console.log(response);
    //       navigate("/employees");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    axios
      .post(
        `https://people.api.zainzo.com/api/admin/update/personal/${id}`,
        {
          employee_fullname: fullname,
          employee_photo: formData.get("employee_photo"),
          employee_nickname: nickname,
          email: email,
          employee_phone_number: phoneNumber,
          employee_birth_place: birthPlace,
          employee_dob: dob,
          employee_gender: gender,
          employee_maritual_status: maritualStatus,
          employee_blood: blood,
          employee_religion: religion,
          employee_id_type: idType,
          employee_id_number: idNumber,
          employee_portal_code: portalCode,
          employee_exp_date: idExp,
          employee_id_address: idAddr,
          employee_residential_addr: residentialAddr,
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
        navigate("/employees");
      })
      .catch((error) => {
        console.log(error);
        // toast.error("data gagal disimpan");
      });
  };

  const handlePhoto = () => {
    const formData = new FormData();
    formData.append("employee_photo", selectImg);

    fetch(`https://people.api.zainzo.com/api/users/upload/photo`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        // if(response.status >= 400){
        //   alert('Isi Foto Anda Dengan Benar!')
        // } else {
        //   alert("Foto Berhasil Diubah!");
        //   // navigate('/employees')
        // }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="px-12 py-4 flex flex-col w-full">
        <div className="h-auto">
          <h1 className="text-lg font-bold">Data Pribadi</h1>
          <p className="text-gray-disabledText mb-8 text-sm">Isi semua informasi pribadi karyawan</p>
          <div className="grid grid-cols-2 gap-y-10 text-sm">
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Nama Lengkap</span>
              <input type="text" className="outline-none col-span-2 mb-2" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8  border-gray-divider transition`}>
              <span className="text-gray-disabledText">Nama Panggilan</span>
              <input className="outline-none col-span-2 mb-2" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Email</span>
              <input className="outline-none col-span-2 mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Nomor Telepon</span>
              <input className="outline-none col-span-2 mb-2" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Tempat Lahir</span>
              <input type="text" className="outline-none col-span-2 mb-2" placeholder="Tempat Lahir" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Tanggal Lahir</span>
              <input type="date" className="outline-none col-span-2 mb-2" value={dob} onChange={(e) => setDob(e.target.value)} />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Jenis Kelamin</span>
              <select type="text" className="outline-none col-span-2 mb-2 bg-white invalid:text-gray-200" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value={""} disabled>
                  Pilih Jenis Kelamin
                </option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
              </select>
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Status Pernikahan</span>
              <select
                type="text"
                className="outline-none col-span-2 mb-2 bg-white"
                // onFocus={() => setIsFocused("status")}
                // onBlur={() => setIsFocused("")}
                name="employee_maritual_status"
                value={maritualStatus ? maritualStatus : "Pilih Status"}
                onChange={(e) => setMaritualStatus(e.target.value)}
              >
                <option disabled>Pilih Status</option>
                <option value={"Married"}>Married</option>
                <option value={"Widow"}>Widow</option>
                <option value={"Widower"}>Widower</option>
              </select>
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Golongan Darah</span>
              <select
                type="text"
                className="outline-none col-span-2 mb-2 bg-white"
                // onFocus={() => setIsFocused("blood-type")}
                // onBlur={() => setIsFocused("")}
                // name="employee_blood"
                value={blood ? blood : "Pilih Golongan Darah"}
                onChange={(e) => setBlood(e.target.value)}
              >
                <option disabled>Pilih Golongan Darah</option>
                <option value={"A"}>A</option>
                <option value={"B"}>B</option>
                <option value={"AB"}>AB</option>
                <option value={"O"}>O</option>
              </select>
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Agama</span>
              <select
                type="text"
                className="outline-none col-span-2 mb-2 bg-white"
                // onFocus={() => setIsFocused("religion")}
                // onBlur={() => setIsFocused("")}
                // name="employee_religion"
                value={religion ? religion : "Agama"}
                onChange={(e) => setReligion(e.target.value)}
              >
                <option disabled>Agama</option>
                <option value={"Islam"}>Islam</option>
                <option value={"Catholic"}>Catholic</option>
                <option value={"Christian"}>Christian</option>
                <option value={"Buddha"}>Buddha</option>
                <option value={"Hindu"}>Hindu</option>
                <option value={"Confucius"}>Confucius</option>
                <option value={"Other"}>Other</option>
              </select>
            </label>
          </div>
        </div>
        <div className="">
          <h1 className="text-base font-bold pt-8 pb-6">Identitas & Alamat</h1>
          <div className="grid grid-cols-2 gap-y-10 text-sm">
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Tipe Identitas</span>
              <select
                className="outline-none col-span-2 bg-white"
                // onFocus={() => setIsFocused("id-type")}
                // onBlur={() => setIsFocused("")}
                // name="employee_id_type"
                value={idType ? idType : "Pilih Jenis Kartu Identitas"}
                onChange={(e) => setIdType(e.target.value)}
              >
                <option disabled>Pilih Jenis Kartu Identitas</option>
                <option value={"KTP"}>KTP</option>
                <option value={"Passport"}>Passport</option>
              </select>
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Nomor Identitas</span>
              <input type="text" className="outline-none col-span-2 mb-2" placeholder="Masukan Nomor ID" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
            </label>
            {/* Belum Ada */}
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition mb-8`}>
              <span className="text-gray-disabledText">ID Expiration Date</span>
              <input type="date" className={`outline-none col-span-2 mb-2 bg-white ${permanent ? "pointer-events-none opacity-50" : ""}`} value={idExp} disabled={permanent} onChange={(e) => setIdExp(e.target.value)} />
            </label>
            <div class="absolute mt-8 flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                onChange={(e) => {
                  setPermanent(e.target.checked);
                }}
              />
              <label htmlFor="link-checkbox" className="ml-2 text-sm">
                Permanent
              </label>
            </div>
            {/* Belum Ada */}
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition mb-8`}>
              <span className="text-gray-disabledText flex items-center">Kode Pos</span>
              <input className="outline-none col-span-2" placeholder="Masukkan Kode Pos" value={portalCode} onChange={(e) => setPortalCode(e.target.value)} />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Alamat KTP</span>
              <input className="outline-none col-span-2 mb-2" value={idAddr} onChange={(e) => setIdAddr(e.target.value)} placeholder="Citizen ID" />
            </label>
            <label className={`grid grid-cols-3 border border-x-0 border-t-0 border-b-1 mr-8 border-gray-divider transition`}>
              <span className="text-gray-disabledText">Alamat Domisili</span>
              <input className="outline-none col-span-2 mb-2" value={residentialAddr} onChange={(e) => setResidentialAddr(e.target.value)} placeholder="Residential Address" />
            </label>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-end pr-24 gap-2">
        <button className="w-24 h-[38px] border-[2px] border-[#717171] rounded-full text-sm text-[#717171]" onClick={() => navigate(`/employees`)}>
          Back
        </button>

        <button
          className="w-24 h-[38px] bg-redColor rounded-full text-sm text-white"
          onClick={() => {
            handleSave();
            // handlePhoto();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditPersonal;
