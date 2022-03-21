import React from "react";
import HeadBar from "./HeadBar";
import Content from "./Content";
import FootBar from "./FootBar";

export default function HomeScreen() {
  return (
    <div className="grid grid-row-4">
      <HeadBar />
      <Content />
      <FootBar />
    </div>
  );
}