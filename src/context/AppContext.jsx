import UserProvider from "./UserContext";

// Can pass through user states to different components in the app
const AppContext = ({ children }) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default AppContext;
