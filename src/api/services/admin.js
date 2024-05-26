import coreApi from "../coreApi";

const createAdmin = async (form) => {
    const token = localStorage.getItem("token");
  try {
    const response = await coreApi.post(
      "tambahAdmin",
      form,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      }
    );
      return response
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const deleteAdmin = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await coreApi.delete(`lihatAdmin/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      });
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
const getAllAdmin = async () => {
    try {
      const token = localStorage.getItem("token");
  
      const response = await coreApi.get("lihatAdmin", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      });
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
export { createAdmin ,deleteAdmin,getAllAdmin};