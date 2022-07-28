import Navbar from "../components/Navbar/Navbar";
import ProfileAction from "../components/Profile/ProfileAction";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslations from "../components/Profile/ProfileTranslations";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

import "../components/Profile/Profile.css";

const Profile = () => {
  const { user } = useUser();

  return (
    <>
      <Navbar page={"Profile"} />
      <div className="main">
        <div className="main-position">
          <ProfileHeader username={user.username} />
          <ProfileTranslations translations={user.translations} />
          <ProfileAction />
        </div>
      </div>
    </>
  );
};

export default withAuth(Profile);
