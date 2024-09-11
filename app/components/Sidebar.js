import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#1f5453] text-white w-64 flex flex-col">
      <div className="p-4 text-lg font-semibold">Menu</div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link href="/hotel-form" className="block py-2 px-4  rounded-md">
              Hotel Details
            </Link>
          </li>
          <li>
            <Link href="/room-form" className="block py-2 px-4  rounded-md">
              Room Details
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
