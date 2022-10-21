import { ChildComponent } from "./ChildComponent";
export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert("parent" + childName);
    console.log(childName);
  };
  return <ChildComponent greetHandler={greetParent} />;
};
