import { BiUser } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="bg-light flex flex-row justify-between px-5 py-2">
      <div>Logo</div>
      <div className="flex ">
        <BiUser className="text-2xl" /> <span className="pl-2">Profile</span>
      </div>
    </div>
  );
};

export default Navbar;
