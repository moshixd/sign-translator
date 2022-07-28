import Navbar from "../components/Navbar/Navbar";
import ProfileAction from "../components/Profile/ProfileAction";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslations from "../components/Profile/ProfileTranslations";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
const Profile = () => {
  const { user } = useUser();

  return (
    <>
      <Navbar page={"Profile"} />
      <ProfileHeader username={user.username} />
      <ProfileAction />
      <ProfileTranslations translations={user.translations} />
    </>
  );
};

export default withAuth(Profile);
