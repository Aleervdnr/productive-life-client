import { Link } from "react-router-dom"

function ItemNavBar({children,name,activeItem, handleClick}) {
  return (
    <li className="w-full max-w-[272px]" onClick={handleClick ? () => handleClick() : null }>
        <Link to={`/${name}`} className={` capitalize relative flex gap-4 w-full h-[50px] pl-[30%] items-center  max-lg:rounded-lg lg:rounded-r-lg text-dark-100 font-semibold max-lg:before:hidden ${activeItem == name && `bg-dark-200 text-white lg:before:absolute lg:before:w-[10px] lg:before:h-full lg:before:left-0 lg:before:bg-gradient-to-b before:from-[#7E73FF] lg:before:to-[#5B4DFF]`}`}>
            {children}
        </Link>
    </li>
  )
}

export default ItemNavBar