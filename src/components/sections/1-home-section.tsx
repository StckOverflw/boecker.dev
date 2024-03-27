import Link from "next/link";
import {
  FaEnvelopeOpen,
  FaGithub,
  FaInstagram,
  FaMastodon,
  FaRss,
  FaTwitter,
} from "react-icons/fa6";
import ScrollDownButton from "./components/scroll-down-button";
import Button from "../ui/button";

export default function HomeSection() {
  return (
    <div className="fixed h-full w-full" id="home">
      <div className="flex flex-col gap-4 2xl:container w-[90%] mx-auto justify-center supports-[height:100svh]:h-[100svh] h-full select-none">
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
        <div className="flex flex-row gap-4 mt-4">
          <Button
            href="#contact"
            style="filled"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <FaEnvelopeOpen className="my-auto" />
            <span className="my-auto">Contact Me</span>
          </Button>
          <Button href="/blog" style="outline">
            <FaRss className="my-auto" />
            <span className="my-auto">Blog</span>
          </Button>
        </div>
      </div>
      <ScrollDownButton sectionId="about" />
    </div>
  );
}
