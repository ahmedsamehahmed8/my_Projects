function Contact (props) {
    return (

        <div ref={props.contact} className='bg-blue-100 p-10 '>
        <div className='container flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold'>Get in touch</p>
        </div>
  
        <div className='flex p-10 flex-wrap '>
          <div className='p-5 w-[30%]'>
  
          googlemaps 
  
          </div>
          <div className='p-5'>
            <p className='text-2xl font-bold p-1'>Head office</p>
            <p className='p-1'>Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
            <div className='bg-slate-600 w-[100%] h-[1px] m-2'/>
            <div className='p-1'>Phone<span className='ms-3 text-lg text-emerald-500 hover:text-emerald-900 cursor-pointer'>110-220-3400 </span></div>
            <div className='p-1'>Email<span className='ms-3 text-lg text-emerald-500 hover:text-emerald-900 cursor-pointer'>info@company.com</span></div>
  
          </div>
  
          <div className='p-5'>
            <p className='text-2xl font-bold p-1'>Head office</p>
            <p className='p-1'>Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
            <div className='bg-slate-600 w-[100%] h-[1px] m-2'/>
            <div className='p-1'>Phone<span className='ms-3 text-lg text-emerald-500 hover:text-emerald-900 cursor-pointer'>110-220-3400 </span></div>
            <div className='p-1'>Email<span className='ms-3 text-lg text-emerald-500 hover:text-emerald-900 cursor-pointer'>info@company.com</span></div>
            
          </div>
          </div>
  
      </div>


    );
}

export default Contact ;