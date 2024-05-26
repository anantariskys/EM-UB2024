import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/services/auth";
import Logo from "../assets/logoNavbar.png";
import { useAuth } from "../hooks/useAuth";

const Sidebar = ({ setIsActive }) => {
 const { profile } = useAuth();
 const navigate = useNavigate();

 const handleLogout = async () => {
   try {
     await logout();
     window.localStorage.removeItem("token");
     navigate("/");
   } catch (error) {
     console.log(error);
   }
 };

 return (
   <aside
     className={`left-0 top-0 z-9999 flex h-screen w-72 flex-col justify-between overflow-y-hidden bg-primary-charcoalGray text-primary-white duration-300 ease-linear static font-normal py-5`}
   >
     <div className="">
       <img
         src={Logo}
         alt="logo"
         draggable="false"
         className="w-full aspect-auto mx-auto"
       />
       <div className="flex flex-col mt-5 divide-y p-4 divide-primary-white justify-center">
         {profile && profile.role ? (
           profile.role === "admin" ? (
             <>
               <div
                 onClick={() => setIsActive("dashboard")}
                 className="flex cursor-pointer justify-between py-2 w-full items-center"
               >
                 <p>Dashboard</p>
               </div>
               <div
                 onClick={() => setIsActive("admin")}
                 className="flex cursor-pointer justify-between py-2 w-full items-center"
               >
                 <p>Admin</p>
               </div>
               <div
                 onClick={() => setIsActive("berita")}
                 className="flex cursor-pointer justify-between py-2 w-full items-center"
               >
                 <p>Berita</p>
               </div>
               <div
                 onClick={() => setIsActive("tautan")}
                 className="flex cursor-pointer justify-between py-2 w-full items-center"
               >
                 <p>Tautan</p>
               </div>
             </>
           ) : profile.role === "berita" ? (
             <>
               <div
                 onClick={() => setIsActive("dashboard")}
                 className="flex cursor-pointer justify-between py-2 w-full items-center"
               >
                 <p>Dashboard</p>
               </div>
               <div
                 onClick={() => setIsActive("berita")}
                 className="flex cursor-pointer justify-between py-2 w-full items-center"
               >
                 <p>Berita</p>
               </div>
             </>
           ) : profile.role === "tautan" ? (
             <>
               <div
                 onClick={() => setIsActive("dashboard")}
                 className="flex cursor-pointer justify-between py-2 w-full items-center"
               >
                 <p>Dashboard</p>
               </div>
               <div
                 onClick={() => setIsActive("tautan")}
                 className="flex cursor-pointer justify-between py-2 w-full items-center"
               >
                 <p>Tautan</p>
               </div>
             </>
           ) : (
             <div>Role tidak valid</div>
           )
         ) : (
           <div>Loading...</div>
         )}
       </div>
     </div>
     <div className="px-4 w-full">
       <button
         onClick={() => handleLogout()}
         className="bg-primary-white w-full text-primary-navbarText py-1 rounded-lg active:scale-95 duration-200 ease-in-out"
       >
         Logout
       </button>
     </div>
   </aside>
 );
};

export default Sidebar;