import { Link } from "react-router-dom";
import { translationClearHistory } from "../../api/translationClearHistory";
import { STORAGE_KEY_USER } from "../../const/StorageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete, storageSave } from "../../utils/storage";

const ProfileAction = ({ logout }) => {
  const { user, setUser } = useUser();

  // Function for logging out, deletes current session storage and redirects to login page
  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  // Deletes translations from API of user, warns before doing it.
  const handleClearHistory = async () => {
    if (!window.confirm("Are you sure?\nThis cannot be undone!")) {
      return;
    }

    const [clearError] = await translationClearHistory(user.id);

    if (clearError !== null) {
      return;
    }

    const updatedUser = {
      ...user,
      translations: [],
    };

    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
  };
  return (
    <>
      <ul>
        <Link to='translation'></Link>
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
