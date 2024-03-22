import { FaGithub, FaTwitter, FaMastodon, FaInstagram } from "react-icons/fa6";
import Blob from "../static/blob";
import ScrollDownButton from "./components/scroll-down-button";

export default function HomeSection() {
  return (
    <div className="fixed h-full w-full" id="home">
      <div className="flex flex-col gap-4 2xl:container w-[90%] mx-auto justify-center h-full select-none">
        <div>
          <h1 className="md:text-4xl text-3xl font-extralight">
            Hey, I&apos;m Emma
          </h1>
          <h1 className="md:text-6xl text-5xl font-semibold">
            Full-stack developer with 4+ years of experience
          </h1>
        </div>
        <div className="flex flex-row text-4xl gap-2 items-center">
          <a
            href="https://github.com/emmaboecker"
            target="_blank"
            aria-label="github page"
          >
            <FaGithub className="hover:text-primary transition-colors duration-150" />
          </a>
          <a
            href="https://twitter.com/EmmaBoecker"
            target="_blank"
            aria-label="twitter profile"
          >
            <FaTwitter className="hover:text-primary transition-colors duration-150" />
          </a>
          <a
            href="https://chaos.social/boecker"
            target="_blank"
            aria-label="mastodon profile"
          >
            <FaMastodon className="hover:text-primary transition-colors duration-150" />
          </a>
          <a
            href="https://instagram.com/emma.boecker"
            target="_blank"
            aria-label="instagram profile"
          >
            <FaInstagram className="hover:text-primary transition-colors duration-150" />
          </a>
        </div>
        <Blob />
      </div>
      <ScrollDownButton sectionId="about" />
    </div>
  );
}
