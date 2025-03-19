"use client";
import React from "react";

interface button {
  label: string;
}

export const Button: React.FC<button> = ({ label }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="rounded-full absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer rounded-xl items-center justify-center  bg-slate-950 px-5 py-5 text-sm font-medium text-white backdrop-blur-3xl">
        {label}
      </span>
    </button>
  );
};
