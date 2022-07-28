import "./Profile.css";

const ProfileHeaders = ({ username }) => {
  return (
    <header className="label">
      <h2>
        Welcome {username}! <br />
      </h2>
    </header>
  );
};
export default ProfileHeaders;
