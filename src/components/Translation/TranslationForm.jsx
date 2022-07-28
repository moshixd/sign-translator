import { useForm } from "react-hook-form";
import signs from "../signs/signs";
import { useState } from "react";
import translationAPI from "../../api/translation";
import { useUser } from "../../context/UserContext";

const TranslationForm = () => {
  const { register, handleSubmit } = useForm();
  const { setUser } = useUser();

  // local state
  const [translation, setTranslation] = useState();

  // The translating function, takes in an input from user and translates into hand signs
  // Checks if user input is letters and space, if not pops a windows prompting letters, Only lower case is accepted
  // Updates user translations on API if translation goes through
  const onTranslation = async (input) => {
    let word = input.translation;
    word = word.toString().toLowerCase();
    let regEx = /^[a-z][a-z\s]*$/;
    if (word.match(regEx)) {
      let signArr = [];

      const wordArr = word.split("");

      for (let index = 0; index < wordArr.length; index++) {
        const char = wordArr[index];

        let currentSignObject = signs.filter((img) => img.sign === char);
        signArr.push(...currentSignObject);
      }
      const updatedUser = await translationAPI(word);
      setUser(updatedUser[1]);
      setTranslation([...signArr]);
    } else {
      alert("Only letters and space");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onTranslation)}>
        <fieldset>
          <label htmlFor="translation">Text to translate: </label>
          <input
            type="text"
            placeholder="What is popping?"
            {...register("translation", translation)}
          />
        </fieldset>
        <button type="submit">Translate</button>
      </form>
      {translation
        ? translation.map(({ src }, index) => (
            <img key={index} src={src} alt="" />
          ))
        : ""}
    </>
  );
};

export default TranslationForm;
