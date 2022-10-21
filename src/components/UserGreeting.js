export const UserGreeting = () => {
  const isLoggedIn = true;
  //return <div> Welcome {isLoggedIn ? "Viswas" : "Guest"}</div>;
  return <div> Welcome {isLoggedIn && "Vishwas"}</div>;
};
