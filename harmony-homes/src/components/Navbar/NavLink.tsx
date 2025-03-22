import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors hover:text-gray-500 ${
        isActive ? "text-black" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink