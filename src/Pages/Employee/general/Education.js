import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../../Utils/Common";
import EditEmployment from "../editEmployee/EditEmployment";


export default function Education({ id }) {
    const [datalist, setData] = useState([]);
    const [edit, setEdit] = useState(true);

    useEffect(() => {
        // console.log(selectImg)
        axios
            .get(`https://people.api.zainzo.com/api/admin/employee/personal/${id}`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            })
            .then((res) => setData(res.data.data[0]))
            .catch((err) => console.log(err.message));
    }, [id]);
    console.log(datalist);

    return (
        <div className="px-12 py-4 flex flex-col gap-x-24">
            <div className="h-auto">
                <div className="lg:flex justify-between items-start">
                    <h1 className="text-lg font-bold mb-5 text-black-main flex-1">Education</h1>
                    <div className="flex">
                        <a href="#" className="px-4 py-2 rounded-full border border-gray-disabledText text-[12px] text-gray-disabledText mr-3">
                            Add new
                        </a>
                        <a href="#" className="px-4 py-2 rounded-full border border-gray-disabledText text-[12px] text-gray-disabledText">
                            Delete
                        </a>
                    </div>
                </div>

                <div class="overflow-auto scrollbar-hide hover:scrollbar-default">
                    <table className="max-w-full">
                        <thead class="border-b-2 border-gray-200 text-sm">
                            <tr>
                                <th class="w-16 p-3 text-left">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                        <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </th>
                                <th class="w-36 p-3 text-left">Grade</th>
                                <th class="p-3 text-left">Institution Name</th>
                                <th class="w-36 p-3 text-left">Major</th>
                                <th class="w-36 p-3 text-left">Start Year</th>
                                <th class="w-36 p-3 text-left whitespace-nowrap">End Year</th>
                                <th class="w-16 p-3 text-left">Score</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="bg-white">
                                <td class="w-16 p-3 text-sm text-gray-700">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                        <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </td>
                                <td class="w-36 p-3 text-sm text-gray-700">
                                    S.Kom
                                </td>
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap ">
                                    Universita Pembangunan Nasional "Veteran" Jawa Timur
                                </td>
                                <td class="p-3 text-sm text-gray-700">
                                    Informatics Engenering
                                </td>
                                <td class="p-3 text-sm text-gray-700">16/10/2020</td>
                                <td class="p-3 text-sm text-gray-700">1/1/2024 </td>
                            </tr>
                            <tr class="bg-white">
                                <td class="w-16 p-3 text-sm text-gray-700">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                        <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </td>
                                <td class="w-36 p-3 text-sm text-gray-700">
                                    S.Kom
                                </td>
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap ">
                                    Universita Pembangunan Nasional "Veteran" Jawa Timur
                                </td>
                                <td class="p-3 text-sm text-gray-700">
                                    Informatics Engenering
                                </td>
                                <td class="p-3 text-sm text-gray-700">16/10/2020</td>
                                <td class="p-3 text-sm text-gray-700">1/1/2024 </td>
                            </tr>
                            <tr class="bg-white">
                                <td class="w-16 p-3 text-sm text-gray-700">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                        <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </td>
                                <td class="w-36 p-3 text-sm text-gray-700">
                                    S.Kom
                                </td>
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap ">
                                    Universita Pembangunan Nasional "Veteran" Jawa Timur
                                </td>
                                <td class="p-3 text-sm text-gray-700">
                                    Informatics Engenering
                                </td>
                                <td class="p-3 text-sm text-gray-700">16/10/2020</td>
                                <td class="p-3 text-sm text-gray-700">1/1/2024 </td>
                            </tr>
                            {/* <tr>
                                <td class="p-3 text-sm text-gray-700">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                    <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </td>
                                <td class="p-3 w-32 text-sm text-gray-700">Kring New Fit office chair, mesh + PU, black</td>
                                <td class="p-3 text-sm text-gray-700">
                                    <span
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                                </td>
                                <td class="p-3 text-sm text-gray-700">16/10/2021</td>
                                <td class="p-3 text-sm text-gray-700">$200.00</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-3 text-sm text-gray-700">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                    <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </td>
                                <td class="p-3 w-32 text-sm text-gray-700">Kring New Fit office chair, mesh + PU, black</td>
                                <td class="p-3 text-sm text-gray-700">
                                    <span
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
                                </td>
                                <td class="p-3 text-sm text-gray-700">16/10/2021</td>
                                <td class="p-3 text-sm text-gray-700">$200.00</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

                <div className="lg:flex justify-between items-start  mt-20">
                    <h1 className="text-lg font-bold mb-5 text-black-main flex-1">Work Experience</h1>
                    <div className="flex">
                        <a href="#" className="px-4 py-2 rounded-full border border-gray-disabledText text-[12px] text-gray-disabledText mr-3">
                            Add new
                        </a>
                        <a href="#" className="px-4 py-2 rounded-full border border-gray-disabledText text-[12px] text-gray-disabledText">
                            Delete
                        </a>
                    </div>
                </div>

                <div class="overflow-auto scrollbar-hide hover:scrollbar-default">
                    <table className="max-w-full">
                        <thead class="border-b-2 border-gray-200 text-sm">
                            <tr>
                                <th class="w-16 p-3 text-left">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                        <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </th>
                                <th class="p-3 text-left whitespace-nowrap ">Previous Company Name</th>
                                <th class="p-3 text-left whitespace-nowrap ">Job Title</th>
                                <th class="w-48 p-3 text-left whitespace-nowrap ">From  Date</th>
                                <th class="w-48 p-3 text-left whitespace-nowrap ">To Date</th>
                                <th class="p-3 text-left whitespace-nowrap">Job Description</th>
                                {/* <th class="w-16 p-3 text-left">Score</th> */}
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="bg-white">
                                <td class="w-16 p-3 text-sm text-gray-700">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                        <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </td>
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap ">
                                    Google
                                </td>
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap ">
                                    Frontend Web Developer
                                </td>
                                <td class="p-3 text-sm text-gray-700">
                                    Jan-2010
                                </td>
                                <td class="p-3 text-sm text-gray-700">Jan-2023</td>
                                <td class="p-3 text-sm text-gray-700">Mengembangkan web google bagian frontend</td>
                            </tr>
                            {/* <tr>
                                <td class="p-3 text-sm text-gray-700">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                    <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </td>
                                <td class="p-3 w-32 text-sm text-gray-700">Kring New Fit office chair, mesh + PU, black</td>
                                <td class="p-3 text-sm text-gray-700">
                                    <span
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                                </td>
                                <td class="p-3 text-sm text-gray-700">16/10/2021</td>
                                <td class="p-3 text-sm text-gray-700">$200.00</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-3 text-sm text-gray-700">
                                    <a href="#" class="font-bold text-blue-500 hover:underline">
                                    <div className="w-[10px] aspect-square border border-gray-300 rounded-sm"></div>
                                    </a>
                                </td>
                                <td class="p-3 w-32 text-sm text-gray-700">Kring New Fit office chair, mesh + PU, black</td>
                                <td class="p-3 text-sm text-gray-700">
                                    <span
                                        class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
                                </td>
                                <td class="p-3 text-sm text-gray-700">16/10/2021</td>
                                <td class="p-3 text-sm text-gray-700">$200.00</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}