import { useState } from 'react'
import BeritaForm from './form/BeritaForm';
import TableBerita from './table/TableBerita';

const Berita = () => {
    const[refresh,setRefresh] = useState(false)
    return (
      <div className="">
        <section className="flex flex-col gap-6">
         <BeritaForm setRefresh={setRefresh} refresh={refresh}/>
         <TableBerita setRefresh={setRefresh} refresh={refresh}/>
        
        </section>
      </div>
    );
}

export default Berita