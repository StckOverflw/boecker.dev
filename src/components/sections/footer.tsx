import Link from "next/link";
import { BackgroundBeams } from "../animations/background-beams";
import { SiMatrix } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div
      id="contact"
      className="h-[40rem] w-full rounded-md relative flex flex-col  items-center justify-center antialiased"
      style={{
        maskImage:
          "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2) 50px, rgba(0,0,0,1) 150px)",
      }}
    >
      <div className="flex md:flex-row flex-col gap-10 md:gap-0 justify-between mx-auto w-full container sm:px-0 px-5 z-20">
        <div>
          <h1 className="text-4xl font-semibold">Contact Me</h1>
          <p className="text-lg font-light">
            Got an idea? Let&apos;s talk about it! Wanna ask me something? Feel
            free to reach out!
          </p>
          <div className="flex flex-col gap-2 my-3 w-max">
            <a
              href="https://matrix.thttps://matrix.to/#/@emma:boecker.devo"
              className="flex flex-row gap-2 items-center font-light hover:font-medium transition-all duration-200"
            >
              <SiMatrix />
              Invite me to chat on Matrix
            </a>
            <a
              href="https://matrix.thttps://matrix.to/#/@emma:boecker.devo"
              className="flex flex-row gap-2 items-center font-light hover:font-medium transition-all duration-200"
            >
              <FaTwitter />
              Message me on Twitter
            </a>
            <a
              href="https://matrix.thttps://matrix.to/#/@emma:boecker.devo"
              className="flex flex-row gap-2 items-center font-light hover:font-medium transition-all duration-200"
            >
              <MdAlternateEmail />
              Send me an email
            </a>
          </div>
        </div>
        <div className="w-full h-[2px] bg-zinc-900 md:hidden" />
        <div>
          <Link
            href="/imprint"
            className="font-extralight hover:font-normal transition-all duration-200"
          >
            Imprint
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
