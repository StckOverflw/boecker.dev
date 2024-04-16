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
      aria-label={`scroll to ${props.sectionId} section`}
    >
      <FaChevronDown className="text-xl animate-bounce bg-transparent" />
    </button>
  );
}
