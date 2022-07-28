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

  const onTranslation = async (input) => {
    const word = input.translation;
    let regEx = /^[a-z][a-z\s]*$/;
    if (word.match(regEx)) {
      console.log("translation", input);

      let signArr = [];

      const wordArr = word.split("");

      for (let index = 0; index < wordArr.length; index++) {
        const char = wordArr[index];

        let currentSignObject = signs.filter((img) => img.sign === char);
        signArr.push(...currentSignObject);
      }
      const updatedUser = await translationAPI(word);
      // console.log("updatedUser", updatedUser[1]);
      setUser(updatedUser[1]);
      setTranslation([...signArr]);
    } else {
      alert("Only letters and space");
    }
  };

  return (
    <>
      <h2>What's your name?</h2>
      <form onSubmit={handleSubmit(onTranslation)}>
        <fieldset>
          <label htmlFor='translation'>Text to translate: </label>
          <input
            type='text'
            placeholder='What is popping?'
            {...register("translation", translation)}
          />
        </fieldset>
        <button type='submit'>Translate</button>
      </form>
      {translation
        ? translation.map(({ src }, index) => (
            <img key={index} src={src} alt='' />
          ))
        : ""}
    </>
  );
};

export default TranslationForm;
