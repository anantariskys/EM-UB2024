import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTautan } from "../../../api/services/tautan";


const adminFormSchema = z.object({
  nama: z.string().min(1, "Nama tidak boleh kosong"),
  link: z.string().min(1, "Link tidak boleh kosong"),
});

const TautanForm = ({setRefresh,refresh}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(adminFormSchema),
  });

  const onSubmit = async(data) => {
    console.log(data)
    try {
        const response = await createTautan(data);
        setRefresh(!refresh)
        
    } catch (error) {
        console.log(error)
    }
  }

 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-md">
      <div className="flex flex-col gap-1">
        <label htmlFor="">Nama</label>
        <input
          {...register("nama")}
          className="border rounded-md py-1 px-3 border-primary-charcoalGray"
          type="text"
        />
        {errors.nama && <small className="text-red-500">{errors.nama.message}</small>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Link</label>
        <input
          {...register("link")}
          className="border rounded-md py-1 px-3 border-primary-charcoalGray"
          type="text"
        />
        {errors.link && <small className="text-red-500">{errors.link.message}</small>}
      </div>
      <button
        type="submit"
        className="px-3 py-1 rounded-md active:scale-95 duration-200 ease-in-out bg-primary-charcoalGray text-primary-white"
      >
        Tambah
      </button>
    </form>
  );
};

export default TautanForm;