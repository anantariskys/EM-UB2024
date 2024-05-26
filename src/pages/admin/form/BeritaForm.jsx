import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createBerita } from "../../../api/services/berita";


const isImageFile = (file) => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    return validTypes.includes(file.type);
  };

const adminFormSchema = z.object({
  judul: z.string().min(1, "Judul tidak boleh kosong"),
  informasi: z.string().min(1, "Informasi tidak boleh kosong"),
  gambar: z
  .preprocess((files) => (files ? Array.from(files) : []), z.array(z.instanceof(File)))
  .refine((files) => files.length >= 1, "Minimal 1 gambar harus diunggah")
  .refine((files) => files.length <= 3, "Maksimal 3 gambar yang dapat diunggah")
  .refine(
    (files) => files.every(isImageFile),
    "File harus berupa gambar (jpg, png, atau gif)"
  ),
});

const BeritaForm = ({ setRefresh, refresh }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(adminFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("judul", data.judul);
      formData.append("informasi", data.informasi);
  
      for (const file of data.gambar) {
        formData.append("gambar[]", file);
      }
  

    
      const response = await createBerita(formData);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const gambarFiles = watch("gambar") || [];
  const gambarFilesArray = Array.from(gambarFiles || []);
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-md"  >
      <div className="flex flex-col gap-1">
        <label htmlFor="">Judul</label>
        <input
          {...register("judul")}
          className="border rounded-md py-1 px-3 border-primary-charcoalGray"
          type="text"
        />
        {errors.judul && <small className="text-red-500">{errors.judul.message}</small>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="informasi">Informasi</label>
        <ReactQuill
          id="informasi"
          {...register("informasi")}
          onChange={(content, delta, source, editor) => {
            setValue("informasi", editor.getText());
          }}
       
        />
        {errors.informasi && <small className="text-red-500">{errors.informasi.message}</small>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="gambar">Gambar</label>
        <input
          type="file"
          id="gambar"
          {...register("gambar")}
          multiple
        />
        {errors.gambar && <small className="text-red-500">{errors.gambar.message}</small>}
        {/* Render preview gambar di bawah input file */}
        <div className="grid grid-cols-3 grid-rows-1 mt-2 gap-2">
        {gambarFilesArray.map((file, index) => (
      <div key={index}  className='w-full aspect-square'>
        <img src={URL.createObjectURL(file)} className='w-full aspect-square object-contain' alt={`Preview ${index}`} />
      </div>
))}

        </div>
      </div>
      <button
        type="submit"
        className="px-3 py-1 rounded-md active:scale-95 duration-200 ease-in-out bg-primary-charcoalGray text-primary-white"
      >
        Tambah
      </button>    </form>
  );
};

export default BeritaForm;