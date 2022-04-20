import React, { FC, useEffect, useState } from "react";

const MyComp: FC = () => {
  const [state, setState] = useState<any>(() => {});
  const someFancyFunc = (
    startDate: Date,
    endDate: Date,
    callback: (json: any) => {}
  ) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => callback(json));
  };
  useEffect(() => {
    someFancyFunc(new Date(Date.now()), new Date(Date.now()), async (res) =>
      setState(res)
    );
    return () => {};
  }, []);
  return <div>{JSON.stringify(state)}</div>;
};

export default MyComp;
