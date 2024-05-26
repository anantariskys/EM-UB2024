import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteAdmin, getAllAdmin } from "../../../api/services/admin";
import { useAuth } from "../../../hooks/useAuth";

const TableAdmin = ({refresh,setRefresh}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const{profile} = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllAdmin();
        setData(response.data);
        setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    fetchData();
  }, [refresh]);

  const handleDelete=async(id)=>{
    try {
        const response = await deleteAdmin(id);
        console.log(response)
        setRefresh(!refresh)
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="relative overflow-x-auto ">
      <h1 className="text-2xl font-semibold">Daftar Admin</h1>
      <table className="w-full text-sm text-left  rtl:text-right ">
        <thead className="text-xs text-primary-charcoalGray uppercase bg-primary-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
               <tr >
               <td className="text-center" colSpan={5}>Loading...</td>
           </tr>
          ) : data && data.length < 1 ? (
            <tr >
            <td colSpan={5} className="text-center">tidak ada data</td>
        </tr>
          ) : (
            data.map((item,index)=>(
                <tr key={index} className="bg-white border-b ">
                <td className="p-4">
                  <h3>{index+1}</h3>
                </td>
                <td className="px-6 py-4 text-primary-charcoalGray">
                  <h3>{item.username}</h3>
                </td>
                <td className="px-6 py-4">
                  <h3>{item.password}</h3>
                </td>
                <td className="px-6 py-4 text-primary-charcoalGray">
                  <h3>{item.role}</h3>
                </td>
                <td className="px-6 py-4 flex gap-2">
                    {
                        item.idAdmin!==profile.idAdmin?(

                            <button onClick={()=>handleDelete(item.idAdmin)} className="px-3 py-1 active:scale-95 duration-200 ease-in-out rounded text-primary-white bg-primary-charcoalGray">Delete</button>
                        ):(
                            null
                        )
                    }
                </td>
              </tr>

            ))
            
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableAdmin;
