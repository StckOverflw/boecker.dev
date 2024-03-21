"use client";

import { FaChevronDown } from "react-icons/fa6";

export default function ScrollDownButton(props: { sectionId: string }) {
  return (
    <button
      onClick={() => {
        document
          .querySelector(`#${props.sectionId}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <FaChevronDown className="text-3xl fixed bottom-48 left-1/2 transform -translate-x-1/2 animate-bounce bg-transparent" />
    </button>
  );
}
