import React from "react";
import DefaultLayout from "../widget/layout/DefaultLayout";
import ComplexButton from "../widget/ComplexButton";

export default function PageHome() {
  return (
    <DefaultLayout>
      <div className='flex flex-col gap-2 border-4 border-red-800 p-2'>
        <h1 className='text-2xl font-bold'>PageHome</h1>
        <ComplexButton />
      </div>
    </DefaultLayout>
  );
}
