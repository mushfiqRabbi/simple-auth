import React from "react";

export default function Header({ header }) {
  return (
    <header>
      <h1 className="text-white font-semibold uppercase inline-block text-2xl text-center w-full p-3">
        {header}
      </h1>
    </header>
  );
}
