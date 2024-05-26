import React from "react";
import { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import Admin from "./Admin";
import Berita from "./Berita";
import Dashboard from "./Dashboard";
import Tautan from "./Tautan";


const AdminPage = () => {
  const [isActive,setIsActive] = useState("dashboard");
  const [loading,setLoading] = useState(true)

 

  return (
   <AdminLayout setIsActive={setIsActive} isActive={isActive}>
    {
      isActive==="dashboard"&&(
        <Dashboard/>
      )
    }
    {
      isActive==="admin"&&(
        <Admin/>
      )
    }
    {
      isActive==="berita"&&(
        <Berita/>
      )
    }
    {
      isActive==="tautan"&&(
        <Tautan/>
      )
    }

   </AdminLayout>
  );
};

export default AdminPage;
