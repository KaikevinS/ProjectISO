import React from "react";

const EmployeeStatus = () => {
  const dataList = [
    {
      name: "Gojek",
      haveEndDate: new Date().toString(),
      actions: "Junior Recuiter",
    },
    {
      name: "Gojek",
      haveEndDate: new Date().toString(),
      actions: "Junior Recuiter",
    },
    {
      name: "Gojek",
      haveEndDate: new Date().toString(),
      actions: "Junior Recuiter",
    },
  ];
  return (
    <div className="max-w-full overflow-x-auto">
      <table>
        <thead className="border-b-2 border-gray-divider">
          <tr>
            <th className="min-w-[180px] pr-8 py-3 text-sm font-bold text-left text-[#3a3a3a]">
              Name
            </th>
            <th className="min-w-[180px] pr-8 py-3 text-sm font-bold text-left text-[#3a3a3a]">
              Have End Date
            </th>
            <th className="pr-8 py-3 text-sm font-bold text-left text-[#3a3a3a]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataList.map((item, index) => {
            return (
              <tr key={index}>
                <td className="pr-8 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <p className="text-left text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                  </div>
                </td>
                <td className="pr-8 py-4 whitespace-nowrap">
                  <p className="text-left text-sm text-gray-900">
                    {item.haveEndDate}
                  </p>
                </td>
                <td className="pr-8 py-4">
                  <p className="text-left whitespace-nowrap text-sm text-gray-500">
                    {item.actions}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeStatus;
