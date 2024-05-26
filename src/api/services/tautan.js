import coreApi from "../coreApi";

const createTautan = async (form) => {
    const token = localStorage.getItem("token");
    try {
        const response = await coreApi.post(
      "tambahTautan",
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
const deleteTautan = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await coreApi.delete(`lihatTautan/${id}`, {
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
const getAllTautan = async () => {
    try {
      const token = localStorage.getItem("token");
  
      const response = await coreApi.get("lihatTautan", {
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
export {createTautan,deleteTautan,getAllTautan };