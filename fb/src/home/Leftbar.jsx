import {
  PlayCircle,
  CalendarDays,
  Users,
  Clock,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

/* ---------- Menu Item Component ---------- */
const MenuItem = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm">
      <span className="text-blue-600">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

/* ---------- Shortcut Item Component ---------- */
const ShortcutItem = ({ label }) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm">
      <img
        src="https://picsum.photos/32"
        alt={label}
        className="w-8 h-8 rounded-lg"
      />
      <span>{label}</span>
    </div>
  );
};

const Leftbar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white px-2 py-4 border-r hidden lg:block">

      {/* Profile */}
      <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full"
        />
        <span className="font-medium">Josephine Williams</span>
      </div>

      {/* Main Menu */}
      <div className="mt-4 space-y-1">
        <MenuItem icon={<PlayCircle size={20} />} label="Watch" />
        <MenuItem icon={<CalendarDays size={20} />} label="Events" />
        <MenuItem icon={<Users size={20} />} label="Friends" />
        <MenuItem icon={<Clock size={20} />} label="Memories" />

        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
          <ChevronDown size={18} />
          See More
        </button>
      </div>

      <hr className="my-4" />

      {/* Shortcuts */}
      <div className="px-3 flex items-center justify-between text-gray-600 text-sm mb-2">
        <span>Shortcuts</span>
        <MoreHorizontal size={16} className="cursor-pointer" />
      </div>

      <div className="space-y-1">
        <ShortcutItem label="Undiscovered Eats" />
        <ShortcutItem label="Weekend Trips" />
        <ShortcutItem label="Jasper's Market" />
        <ShortcutItem label="Red Table Talk Group" />
        <ShortcutItem label="Best Hidden Hiking Trails" />

        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
          <ChevronDown size={18} />
          See More
        </button>
      </div>
    </aside>
  );
};

export default Leftbar;
