import { createHeaders } from ".";

const apiUrl = process.env.REACT_APP_API_URL;

// Delete translations from API of user
export const translationClearHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not clear translations");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};
