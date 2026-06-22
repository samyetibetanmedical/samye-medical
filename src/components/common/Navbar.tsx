import { navItems } from "@/config/common";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-6xl mx-auto bg-primary sticky top-2 rounded-xl px-4 py-1">
      <div className="">
        <Image src={"/assets/logo.png"} alt="Logo" width={50} height={50} />
      </div>
      <div className="flex gap-3 items-center text-white">
        <ul className="flex gap-3 items-center">
          {navItems.map((item) => (
            <Link className="" href={item.link} key={item.id}>
              {item.title}
            </Link>
          ))}
        </ul>

        <button className="bg-white text-primary px-3 py-1 rounded-lg border border-secondary">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export { Navbar };
