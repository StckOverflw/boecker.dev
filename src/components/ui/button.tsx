import { cn } from "@/utils/cn";
import Link from "next/link";
import { MouseEvent } from "react";

export default function Button(props: {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  style: "filled" | "outline";
  className?: string;
}) {
  const {
    children,
    href,
    style = "filled",
    className,
    onClick = (e: MouseEvent) => {},
  } = props;

  const styling = cn(
    "flex flex-row gap-2 align-middle px-6 py-2 font-medium rounded-md border-2",
    style === "filled"
      ? "border-text bg-text text-background hover:text-text transition-all duration-200 hover:bg-background hover:shadow-text"
      : "border-text text-text transition-all duration-200 hover:bg-text hover:text-background",
    className
  );

  return (
    <>
      {href != null ? (
        <>
          {!(href as string).startsWith("/") ? (
            <a href={href} className={styling} target="_blank">
            {children}
            </a>
          ) : (
            <Link href={href} className={styling} prefetch>
              {children}
            </Link>
          )}
        </>
      ) : (
        <button
          onClick={onClick}
          className={styling}
        >
          {children}
        </button>
      )}
    </>
  );
}
