import TranslationForm from "../components/Translation/TranslationForm";
import withAuth from "../hoc/withAuth";

const Translation = () => {
  return (
    <>
      <h1>Login</h1>
      <section id="translateWord">
        <h2>sup dawg</h2>
        <TranslationForm></TranslationForm>
      </section>
    </>
  );
};
export default withAuth(Translation);
