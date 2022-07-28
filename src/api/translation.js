import { STORAGE_KEY_USER } from "../const/StorageKeys";
import { storageDelete, storageRead, storageSave } from "../utils/storage";
import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL;

// Add translation to API of user
const translationAPI = async (input) => {
  const user = storageRead(STORAGE_KEY_USER);
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH", // NB: Set method to PATCH
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, input],
      }),
    });
    if (!response.ok) {
      throw new Error("Could patch translation: " + input);
    }
    const data = await response.json();
    storageDelete(STORAGE_KEY_USER);
    storageSave(STORAGE_KEY_USER, data);
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};
export default translationAPI;
