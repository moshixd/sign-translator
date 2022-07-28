import Navbar from "../components/Navbar/Navbar";
import TranslationForm from "../components/Translation/TranslationForm";
import withAuth from "../hoc/withAuth";

const Translation = () => {
  const handleTranslateClicked = (input) => {
    console.log(input);
  };

  return (
    <>
      <Navbar page={"Translation"} />
      <section id="translateWord">
        <TranslationForm onTranslate={handleTranslateClicked}></TranslationForm>
      </section>
    </>
  );
};
export default withAuth(Translation);
