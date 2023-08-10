import PedalsList from "@/components/crudList/CrudList@";
import CrudListHead from "@/components/crudListHead/CrudListHead@";
import React from "react";

export default function dashboard() {
  return (
    <div>
      <CrudListHead />
      <PedalsList />
    </div>
  );
}
