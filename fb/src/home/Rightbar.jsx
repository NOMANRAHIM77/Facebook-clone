import {
  Gift,
  MoreHorizontal,
  Video,
  Search,
} from "lucide-react";

/* ---------- Contact Item Component ---------- */
const ContactItem = ({ name }) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      <div className="relative">
        <img
          src="https://i.pravatar.cc/40"
          alt={name}
          className="w-8 h-8 rounded-full"
        />
        {/* Online Indicator */}
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

const Rightbar = () => {
  return (
    <aside className="w-80 hidden lg:block p-4">

      {/* Sponsored */}
      <section>
        <h3 className="text-gray-600 text-sm font-semibold mb-3">
          Sponsored
        </h3>

        <div className="flex gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1601924582975-7d1d8f1b4f3a"
            alt="ad"
            className="w-28 h-20 rounded-lg object-cover"
          />
          <div>
            <p className="font-medium text-sm">Lebo's Pizza</p>
            <p className="text-xs text-gray-500">
              Experience the trendy pizza spot in Palo Alto.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-4" />

      {/* Birthdays */}
      <section>
        <h3 className="text-gray-600 text-sm font-semibold mb-3">
          Birthdays
        </h3>

        <div className="flex items-center gap-2 text-sm">
          <Gift className="text-blue-600" size={20} />
          <p>
            <span className="font-medium">Jessica, Erica</span> and
            <span className="font-medium"> 2 others</span> have birthdays today
          </p>
        </div>
      </section>

      <hr className="my-4" />

      {/* Contacts */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-600 text-sm font-semibold">
            Contacts
          </h3>

          <div className="flex items-center gap-3 text-gray-500">
            <Video size={18} className="cursor-pointer" />
            <Search size={18} className="cursor-pointer" />
            <MoreHorizontal size={18} className="cursor-pointer" />
          </div>
        </div>

        <div className="space-y-2">
          <ContactItem name="Dennis Han" />
          <ContactItem name="Eric Jones" />
          <ContactItem name="Cynthia Lopez" />
          <ContactItem name="Betty Chen" />
          <ContactItem name="Tina Lim" />
          <ContactItem name="Molly Carter" />
        </div>
      </section>
    </aside>
  );
};

export default Rightbar;
