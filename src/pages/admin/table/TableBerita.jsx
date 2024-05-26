import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteBerita, getAllBerita } from "../../../api/services/berita";

const TableBerita = ({refresh,setRefresh}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBerita();
        setData(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    fetchData();
  }, [refresh]);
  console.log(data);  

  const handleDelete=async(id)=>{
    try {
        const response = await deleteBerita(id);
        console.log(response)
        setRefresh(!refresh)
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="relative overflow-x-auto ">
      <h1 className="text-2xl font-semibold">Daftar Berita</h1>
      <table className="w-full text-sm text-left  rtl:text-right ">
        <thead className="text-xs text-primary-charcoalGray uppercase bg-primary-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Judul
            </th>
            <th scope="col" className="px-6 py-3">
             Informasi
            </th>
            <th scope="col" className="px-6 py-3">
             Gambar
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
                  <h3>{item.judul}</h3>
                </td>
                <td className="px-6 py-4">
                  <h3>{item.informasi}</h3>
                </td>
                <td className="px-6 py-4">
                  <img src={`http://localhost:8000/storage/app/public/${item.gambar}`} className='w-full aspect-square object-contain' alt="" />
                </td>
                <td className="px-6 py-4 flex gap-2">
                    <button onClick={()=>handleDelete(item.idBerita)} className="px-3 py-1 active:scale-95 duration-200 ease-in-out rounded text-primary-white bg-primary-charcoalGray">Delete</button>
                 
                </td>
              </tr>

            ))
            
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableBerita;
