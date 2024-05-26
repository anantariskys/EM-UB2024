import { useState } from 'react'
import TautanForm from './form/TautanForm';
import TableTautan from './table/TableTautan';

const Tautan = () => {
    const[refresh,setRefresh] = useState(false)
    return (
      <div className="">
        <section className="flex flex-col gap-6">
         <TautanForm setRefresh={setRefresh} refresh={refresh}/>
         <TableTautan setRefresh={setRefresh} refresh={refresh}/>
        
        </section>
      </div>
    );
}

export default Tautan