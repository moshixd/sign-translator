import { Link } from "react-router-dom";
const ProfileAction = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='translation'></Link>
          <li>
            <button>Clear translations</button>
          </li>
          <li>
            <button>Log out</button>
          </li>
        </li>
      </ul>
    </>
  );
};
export default ProfileAction;
