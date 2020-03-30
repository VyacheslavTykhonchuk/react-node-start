import React from "react";
const test = async () => {
  const req = await fetch();
  const res = await req.json();
};
const Test = () => {
  useEffect(() => {
    test();
  }, []);

  return <div>TestTest</div>;
};

export default Test;
