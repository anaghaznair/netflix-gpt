import { useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils.js/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils.js/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubsribe();
  }, []);
  // return (
  //   // <div className="absolute  px-36 py-2 z-40">
  //   //   <img className="w-36 " src={user?.photoURL} alt="Logo" />
  //   // </div>
  //   <div></div>
  // );
};

export default Header;
