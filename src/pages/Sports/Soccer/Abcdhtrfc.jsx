import { useState } from "react";

const Abcdhtrfc = () => {
  const [active, setActive] = useState("");

  // Example of conditional rendering
  if (!active) {
    return <h1 className="text-red">Hello World</h1>;
  }

  return null; // or other content based on the state
}

export default Abcdhtrfc;
