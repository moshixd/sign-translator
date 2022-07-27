import { Link } from "react-router-dom";
import translationAPI from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/StorageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete, storageRead } from "../../utils/storage";

const ProfileAction = ({ logout }) => {
  const { user, setUser } = useUser();

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  const handleClearHistory = async () => {
    const updatedUser = await translationAPI("");
    setUser(updatedUser);
  };

  return (
    <>
      <ul>
        <Link to="translation"></Link>
        <li>
          <button onClick={handleClearHistory}>Clear translations</button>
        </li>
        <li>
          <button onClick={handleLogoutClick}>Log out</button>
        </li>
      </ul>
    </>
  );
};
export default ProfileAction;
