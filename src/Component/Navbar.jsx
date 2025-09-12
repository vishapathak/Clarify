  import { GiHamburgerMenu } from "react-icons/gi";
  import { Link } from 'react-router-dom';
  
  export default function Navbar(){
    return(
        <div className="w-full h-24 bg-black flex items-center justify-between px-9">
          <button className="border border-white text-white px-4 py-2 rounded  ">Sign-in</button>
          <h1 className=" text-4xl text-white flex items-center justify-auto"> CLARIFY</h1>
          <div className='text-2xl text-white hidden lg:block'>
             <Link to='/' className='px-3 items-center justify-center'>Home</Link>
             <Link to='/about'className=' px-3 items-center justify-center'>About</Link>
             <Link to='/contact'className='px-3 items-center justify-center'>Contact</Link>
             <Link to='/faq'className=' px-3 items-center justify-center'>FAQs</Link>
          </div>
          <GiHamburgerMenu className="text-white block lg:hidden " />

        </div>
    )
}


