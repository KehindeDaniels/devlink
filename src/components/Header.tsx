import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Tab from "./Tab";
import logo from "../../public/icons/logo.svg"; // Adjust the path as needed
import { FiLink, FiUser, FiEye } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white  p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <Image src={logo} alt="Logo" width={40} height={40} />
          </Link>
          <span className="hidden md:block text-xl font-bold">devlinks</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center space-x-4 mx-auto">
          <Link href="/links" passHref>
            <div>
              <Tab label="Links" state="active" icon={<FiLink />} />
            </div>
          </Link>

          <Link href="/profile" passHref>
            <div>
              <Tab label="Profile Details" state="default" icon={<FiUser />} />
            </div>
          </Link>
        </div>

        {/* Desktop Preview Button */}
        <div className="hidden md:flex">
          <Link href="/preview" passHref>
            <div>
              <Button label="Preview" variant="secondary" state="default" />
            </div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden space-x-4 items-center">
          <Link href="/links" passHref>
            <div className="bg-purple-light rounded-md p-2">
              <FiLink className="text-purple" />
            </div>
          </Link>
          <Link href="/profile" passHref>
            <div>
              <FiUser className="text-gray" />
            </div>
          </Link>
          <Link href="/preview" passHref>
            <div className="border-2 border-purple p-2 rounded-md">
              <FiEye className="text-purple" />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
