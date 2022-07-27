import ProfileTranslationsItem from "./ProfileTranslationsItem";

const ProfileTranslations = ({ translations }) => {
  const translationsList = translations
    .slice(-10)
    .map((translation, index) => (
      <ProfileTranslationsItem
        key={index + "-" + translation}
        translation={translation}
      />
    ));
  console.log(translations);

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
