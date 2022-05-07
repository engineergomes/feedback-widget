// import { WidgetForm } from "..";
// import { useState } from "react";
import { CloseButton } from "../../CloseButton";
import {
  onProblemChangedType,
  onIdeaChangedType,
  onThoughtChangedType,
} from "..";

interface FormStartProps {
  onProblemChanged: (type: onProblemChangedType) => void;
  onIdeaChanged: (type: onIdeaChangedType) => void;
  onThoughtChanged: (type: onThoughtChangedType) => void;
}

export function FormStart({
  onProblemChanged,
  onIdeaChanged,
  onThoughtChanged,
}: FormStartProps) {
  return (
    <>
      <header className="flex text-xl leading-6 items-center">
        <p>How can we help?</p>
        <CloseButton />
      </header>

      <main className="grid grid-cols-3 gap-x-2 items-center mt-10 mb-10">
        {" "}
        <button
          className="flex flex-col items-center bg-[#27272A] p-4 rounded-2xl gap-3 border-2 border-[#27272A] hover:border-violet-700"
          onClick={() => onProblemChanged(true)}
        >
          {" "}
          <img src="/bug.svg" alt="" /> Problem
        </button>
        <button
          className="flex flex-col items-center bg-[#27272A] p-4 rounded-2xl gap-3 border-2 border-[#27272A] hover:border-violet-700"
          onClick={() => onIdeaChanged(true)}
        >
          {" "}
          <img src="/idea.svg" alt="" /> Idea
        </button>
        <button
          className="flex flex-col items-center bg-[#27272A] p-4 rounded-2xl gap-3 border-2 border-[#27272A] hover:border-violet-700"
          onClick={() => onThoughtChanged(true)}
        >
          {" "}
          <img src="/thought.svg" alt="" />
          Other
        </button>
      </main>
    </>
  );
}
