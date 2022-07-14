import { NameState } from "./context";

const ComA = () => {
  const { myName, setMyName } = NameState();

  return (
    <>
      {myName}
      <button onClick={() => setMyName("bhardwaj")}>Change Name</button>
    </>
  );
};

export default ComA;
