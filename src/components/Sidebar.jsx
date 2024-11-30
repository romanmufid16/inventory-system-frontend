import { GiBarrelLeak } from "react-icons/gi"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-white w-full h-full max-w-72 rounded-md shadow-md hidden md:flex flex-col px-4 py-3">
      <div className="flex items-center justify-center gap-2 mb-5">
        <GiBarrelLeak className="size-8" />
        <span className="block text-lg font-bold text-default">
          Inventory System
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="space-y-3">
          <li>Overview</li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>Product</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar