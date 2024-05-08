import { HoverEffect } from "../animations/card-hover-effect";

export default function WorkSection() {
  return (
    <div
      id="work"
      className="flex w-[90%] mx-auto snap-start min-h-screen pt-20"
    >
      <div className="flex flex-col gap-5 container mx-auto ">
        <h2 className="md:text-6xl text-5xl font-semibold">Work</h2>
        <p className="text-text/80">
          Some projects I&apos;ve worked on in the past. <br /> I&apos;m big fan
          of open source, so you will find the source code of most of my
          projects on my GitHub.
        </p>
        <div className="flex flex-col gap-0">
          <HoverEffect items={projects} />
          <a
            href="https://github.com/emmaboecker"
            target="_blank"
            className="hover:text-secondary transition duration-150 pl-2 w-max text-md font-extralight -mt-2 scale-90"
          >
            More...
          </a>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Railboard",
    description: "A web-app to view information about Trains in Germany",
    link: "https://rail.boecker.dev",
  },
  {
    title: "Railboard API",
    description:
      "Backend for Railboard and soon-to-be stable public api to get high quality german train data",
    link: "https://api.rail.boecker.dev/docs",
  },
  {
    title: "This website",
    description: "this website made with next.js and tailwindcss",
    link: "/",
  },
  {
    title: "Emmalink",
    description: "A simple URL shortener with oauth support",
    link: "https://github.com/emmaboecker/emmalink",
  },
  {
    title: "Minecraft Hunger Games",
    description: "A Hunger Games event for a YouTube Video by JacobStreams.",
    link: "https://www.youtube.com/watch?v=9MaMhAUm1as",
  },
  {
    title: "Minecraft Challenge Plugin",
    description:
      "A Minecraft Challenge Plugin inspired by german YouTuber BastiGHG",
    link: "https://github.com/StckOverflwNet/StckUtils",
  },
  {
    title: "Damage = Random",
    description:
      "A Minecraft Plugin for a Video by HighBeanie where if you take damage, random things happen",
    link: "https://www.youtube.com/watch?v=15uUMJGuQFw",
  },
  {
    title: "Minecraft Challenge Plugin",
    description:
      "A Minecraft Challenge Plugin inspired by german YouTuber BastiGHG",
    link: "https://github.com/StckOverflwNet/StckUtils",
  },
];
