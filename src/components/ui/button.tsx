import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Button(props: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  style: "filled" | "outline";
  className?: string;
}) {
  const {
    children,
    href,
    style = "filled",
    className,
    onClick = () => {},
  } = props;

  const button = (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-row gap-2 align-middle px-6 py-2 font-medium rounded-md border-2",
        style === "filled"
          ? "border-text bg-text text-background hover:text-text transition-all duration-200 hover:bg-background hover:shadow-text"
          : "border-text text-text transition-all duration-200 hover:bg-text hover:text-background",
        className
      )}
    >
      {children}
    </button>
  );

  return (
    <>
      {href ? (
        <Link href={href} prefetch passHref>
          {button}
        </Link>
      ) : (
        button
      )}
    </>
  );
}
