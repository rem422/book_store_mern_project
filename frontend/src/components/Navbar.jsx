import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Avatar from "../assets/avatar.png";

const Navbar = () => {
  const currentUser = true;

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiBars3CenterLeft className="size-6"/>
          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-0">
            <IoSearchSharp className="absolute inline-block left-3 inset-y-2"/>
            <input type="text" placeholder="Search..." className="bg-[#eaeaea] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
          </div>
        </div>
        {/* right side */}
        <div className=" relative flex items-center sm:space-x-3 space-x-2">
          <div>
            {
              currentUser ? 
              <>
              <button>
                <img src={Avatar} alt="avatar" 
                className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ""}`}/>
              </button>
              </> 
              : 
              <Link to='/login'>
                <FaRegUser className="size-6"/>
              </Link>
            }
          </div>
          
            
          <button className="hidden sm:block">
            <FaRegHeart className="size-6"/>
          </button>
          <Link to='/cart' className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md">
            <MdOutlineShoppingCart/>
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar