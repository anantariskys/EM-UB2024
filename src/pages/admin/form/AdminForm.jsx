import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAdmin } from "../../../api/services/admin";


const adminFormSchema = z.object({
  username: z.string().min(1, "Username tidak boleh kosong").min(5, "Username minimal 5 karakter"),
  password: z.string().min(1, "Password tidak boleh kosong").min(8, "Password minimal 8 karakter"),
  role: z.string().min(1, "Role tidak boleh kosong"),
});

const AdminForm = ({setRefresh,refresh}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(adminFormSchema),
  });

  const onSubmit = async(data) => {
    try {
        const response = await createAdmin(data);
        setRefresh(!refresh)
        
    } catch (error) {
        console.log(error)
    }
  }

  const roleOptions = [
    { value: "", label: "Pilih role" },
    { value: "admin", label: "Admin" },
    { value: "alumni", label: "Alumni" },
    { value: "tautan", label: "Tautan" },
    { value: "proker", label: "Proker" },
    { value: "berita", label: "Berita" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-md">
      <div className="flex flex-col gap-1">
        <label htmlFor="">Username</label>
        <input
          {...register("username")}
          className="border rounded-md py-1 px-3 border-primary-charcoalGray"
          type="text"
        />
        {errors.username && <small className="text-red-500">{errors.username.message}</small>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Password</label>
        <input
          {...register("password")}
          className="border rounded-md py-1 px-3 border-primary-charcoalGray"
          type="password"
        />
        {errors.password && <small className="text-red-500">{errors.password.message}</small>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Role</label>
        <select
          {...register("role")}
          className="border rounded-md py-1 px-3 border-primary-charcoalGray"
        >
          {roleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.role && <small className="text-red-500">{errors.role.message}</small>}
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

export default AdminForm;