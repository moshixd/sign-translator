import ProfileTranslationsItem from "./ProfileTranslationsItem";

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
      <section>
        <h4>Your ten latest translations!</h4>
        {translationsList.length === 0 && <p>You have no translations yet!</p>}
        <ul>{translationsList}</ul>
      </section>
    </>
  );
};
export default ProfileTranslations;
