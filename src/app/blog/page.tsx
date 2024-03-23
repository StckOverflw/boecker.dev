import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BlogPage() {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="container mt-28 z-20 px-5">
        <Link
          href={"/"}
          className="flex flex-row font-extralight align-middle items-center"
        >
          <IoIosArrowRoundBack size={28} className="my-auto" />
          <span className="my-auto">Home</span>
        </Link>
        <h1 className="text-5xl font-semibold">Blog</h1>
        <div className="mt-10"></div>
      </div>
    </div>
  );
}
