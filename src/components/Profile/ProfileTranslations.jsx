import ProfileTranslationsItem from "./ProfileTranslationsItem";

const ProfileTranslations = ({ translations }) => {
  const translationsList = translations.map((translation, index) => (
    <ProfileTranslationsItem
      key={index + "-" + translation}
      translation={translation}
    />
  ));

  return (
    <>
      <section>
        <h4>Your ten latest translations!</h4>
        <ul>{translationsList}</ul>
      </section>
    </>
  );
};
export default ProfileTranslations;
