import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#1f5453]  text-white w-64 flex flex-col">
      <nav className="mt-16">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block py-2 px-4  rounded-md">
              Choose Hotel
            </Link>
          </li>
          <li>
            <Link href="/userdetails" className="block py-2 px-4  rounded-md">
              Admin
            </Link>
          </li>
          <li>
            <Link href="/hotel-form" className="block py-2 px-4  rounded-md">
              Hotel Details
            </Link>
          </li>
          <li>
            <Link href="/hotel-image" className="block py-2 px-4  rounded-md">
              Hotel Images
            </Link>
          </li>
          <li>
            <Link href="/room-form" className="block py-2 px-4  rounded-md">
              Room Details
            </Link>
          </li>
          <li>
            <Link href="/room-image" className="block py-2 px-4  rounded-md">
              Room Images
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="block py-2 px-4  rounded-md">
              Booking History
            </Link>
          </li>
          <li>
            <Link href="/review" className="block py-2 px-4  rounded-md">
              Review
            </Link>
          </li>
          <li>
            <Link href="/" className="block py-2 px-4  rounded-md">
              About Room Angel
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
