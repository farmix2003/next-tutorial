import Link from "next/link";
import React from "react";

const F4 = () => {
  return (
    <>
      <h1>F4</h1>
      <Link href={"/f1/f3"}>F3</Link>
      <Link href="/about">F3</Link>
    </>
  );
};

export default F4;
