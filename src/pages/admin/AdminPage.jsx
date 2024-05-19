import React from "react";
import SideBar from "./SideBar";

const AdminPage = () => {
  return (
    <>
      <div>
        <div className="drawer-content absolute left-[40%] top-[45%] text-white font-helvetica">
          <h2 className="text-primary-tealBlue font-helvetica font-extrabold text-3xl ">
            Welcome To Admin Page!!!
          </h2>
          <p>Menu Admin dapat dilihat pada sidebar di samping kiri</p>
          <p>
            Mohon untuk mengisikan data dengan benar ketika mengunggah sesuatu
          </p>
        </div>
        <div className=""></div>
        <SideBar />
      </div>
    </>
  );
};

export default AdminPage;
