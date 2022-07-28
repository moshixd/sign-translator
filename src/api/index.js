const apiKey = process.env.REACT_APP_API_KEY;

// Headers for posting and patching API
export const createHeaders = () => {
  return {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  };
};
