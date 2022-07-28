import ProfileTranslationsItem from "./ProfileTranslationsItem";

import "./Profile.css";

// Displays 10 last translation from API of user
const ProfileTranslations = ({ translations }) => {
  const translationsList = translations
    .slice(-10)
    .map((translation, index) => (
      <ProfileTranslationsItem
        key={index + "-" + translation}
        translation={translation}
      />
    ));

  return (
    <>
      <section className="profile-body">
        <h4 className="profile-body-label">Your latest translations!</h4>
        {translationsList.length === 0 && <p>You have no translations yet!</p>}
        <ol>{translationsList}</ol>
      </section>
    </>
  );
};
export default ProfileTranslations;
