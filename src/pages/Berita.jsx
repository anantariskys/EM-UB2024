import Heder from '../assets/Berita/heroimage.png';
import HederName from '../assets/Berita/Berita.png';


const Berita = () => {
  return (
    <div className='bg-primary-white font-helvetica-regular'>
      <header className='h-fit w-full text-primary-white relative font-helvetica-regular'>
        <img src={Heder} className='w-full aspect-auto' draggable="false" alt="hero" />
        <img src={HederName} draggable="false" className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 w-1/6' alt="text" />
        <h1 className='text-[3vw] font-semibold  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/4'>EM UB <span className='font-medium'>2024</span></h1>
      </header>
      <main className='container mx-auto lg:px-24 md:px-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-10 md:py-10 py-5 lg:py-20'>
        <div className='w-full text-primary-charcoalGray  aspect-[12/9] bg-white shadow-lg lg:shadow-2xl flex'>
          <div className='w-3/4 h-full p-3 font-medium relative rounded-lg overflow-hidden'>
            <div className='flex justify-between items-center'>
              <small>20 april 2024</small>
              <small className='bg-primary-tealBlue text-primary-white rounded-3xl px-2 py-1'>LUGRI</small>

            </div>
            <h1 className='w-full text-base md:text-xl lg:text-2xl font-semibold line-clamp-2'>
              judul berita judul berita Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className='line-clamp-5 lg:text-base text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit, consequuntur id tenetur impedit incidunt beatae. Molestiae nostrum neque molestias placeat modi dicta necessitatibus voluptates ad suscipit sequi repellat cupiditate iste tempore illo cumque ipsa corrupti accusantium magnam, omnis earum!</p>
            <button className='absolute bottom-3 active:scale-95 duration-200 ease-in-out left-1/2 -translate-x-1/2 bg-primary-charcoalGray px-2 py-1 rounded  text-primary-white lg:text-base  text-xs'>Baca Selengkapnya</button>

          </div>
          <div className='w-1/4 h-full bg-black'>
            <img src="https://source.unsplash.com/random/900×700/?fruit" alt="card-img" draggable="false" className='w-full h-full object-cover ' />
          </div>

        </div>
        

      </main>



    </div>
  )
}

export default Berita