import React from "react";
import { notFound } from "next/navigation";

const getData = (pedals) => {
  const data = items[pedals];

  if (data) {
    return data;
  }
  return notFound();
};

const category = ({ params }) => {
  return <div>category</div>;
};

export default category;
