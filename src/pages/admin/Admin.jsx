import { useState } from "react";
import AdminForm from "./form/AdminForm";
import TableAdmin from "./table/TableAdmin";

const Admin = () => {
    const[refresh,setRefresh] = useState(false)
  return (
    <div className="">
      <section className="flex flex-col gap-6">
       <AdminForm setRefresh={setRefresh} refresh={refresh}/>
       <TableAdmin setRefresh={setRefresh} refresh={refresh}/>
      
      </section>
    </div>
  );
};

export default Admin;
