import { STORAGE_KEY_USER } from "../const/StorageKeys";
import { useUser } from "../context/UserContext";
import { storageDelete, storageRead, storageSave } from "../utils/storage";
import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL;


const translationAPI = async (input) => {
    let list = []

    const user = storageRead(STORAGE_KEY_USER)


    if (input === '') {
        // translation
        list = []
    } else {
        list = [...user.translations, input]
    }
    console.log(input);
    console.log(user.translations);
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH', // NB: Set method to PATCH
            headers: createHeaders(),
            body: JSON.stringify({

                translations: list
            })
        })
        if (!response.ok) {
            throw new Error("Could patch translation: " + input);
        }
        const data = await response.json();
        storageDelete(STORAGE_KEY_USER)
        storageSave(STORAGE_KEY_USER, data)
        return [null, data];
    } catch (error) {
        return [error.message, []];
    }
}
export default translationAPI