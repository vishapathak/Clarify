  import { Link } from 'react-router-dom';
  
  export default function Navbar(){
    return(
        <div className="w-screen h-24 bg-black flex items-center justify-between px-9">
          <button className="border border-white text-white px-4 py-2 rounded  ">Sign-in</button>
          <h1 className=" text-4xl text-white flex items-center justify-auto"> CLARIFY</h1>
          <div className='text-2xl text-white'>
             <Link to='/' className='px-3 items-center justify-center'>Home</Link>
             <Link to='About'className=' px-3 items-center justify-center'>About</Link>
             <Link to='Contact'className='px-3 items-center justify-center'>Contact</Link>
             <Link to='Faq'className=' px-3 items-center justify-center'>FAQs</Link>
          </div>

        </div>
        
    )
}


