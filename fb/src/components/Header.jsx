import {Facebook,Search,Home, Video, Store,Users,LayoutGrid,Plus,MessageCircle,Bell,ChevronDown,} from "lucide-react";
import { useAuthContext } from "../context/AuthProvider";

export default function Header() {
  const {userDetails} = useAuthContext()
  console.log(userDetails)
  return (
    <header className="w-full h-14 bg-white shadow flex items-center justify-between px-4">
      
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <Facebook className="text-blue-600 w-9 h-9" />

        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-transparent outline-none px-2 text-sm w-48"
          />
        </div>
      </div>

      {/* CENTER */}
      <div className="flex items-center gap-12">
        <NavIcon icon={<Home />} active />
        <NavIcon icon={<Video />} />
        <NavIcon icon={<Store />} />
        <NavIcon icon={<Users />} />
        <NavIcon icon={<LayoutGrid />} />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <IconCircle icon={<Plus />} />
        <IconCircle icon={<MessageCircle />} />
        <IconCircle icon={<Bell />} />

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </header>
  );
}

/* ---------- Small Components ---------- */

const NavIcon = ({ icon, active }) => (
  <div
    className={`flex items-center justify-center w-24 h-12 cursor-pointer
      ${active ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-600 hover:bg-gray-100 rounded-lg"}
    `}
  >
    {icon}
  </div>
);

const IconCircle = ({ icon }) => (
  <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
    {icon}
  </div>
);
