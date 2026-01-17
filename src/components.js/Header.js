import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="absolute  px-36 py-2 z-40">
      <img className="w-36 " src={user?.photoURL} alt="Logo" />
    </div>
  );
};

export default Header;
