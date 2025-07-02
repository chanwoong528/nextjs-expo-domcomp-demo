import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col items-center justify-center h-screen border-8 border-amber-700'>
      <div>DefaultLayout</div>
      <div>{children}</div>
    </main>
  );
}
