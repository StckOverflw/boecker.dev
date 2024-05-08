import { HoverEffect } from "../animations/card-hover-effect";

export default function WorkSection() {
  return (
    <div id="work" className="flex w-full snap-start h-screen pt-20">
      <div className="flex flex-col gap-4 container mx-auto ">
        <h2 className="md:text-6xl text-5xl font-semibold">Work</h2>
        <p className="">
          Some projects I&apos;ve worked on in the past. <br /> I&apos;m big fan
          of open source, so you will find the source code of most of my
          projects on my GitHub.
        </p>
        <HoverEffect items={projects} />
        <a
          href="https://github.com/emmaboecker"
          target="_blank"
          className="hover:text-secondary transition duration-150 pb-10 pl-2 w-max"
        >
          More...
        </a>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Railboard",
    description: "A web-app to view information about Trains in Germany",
    link: "https://rail.boecker.dev",
    image: "/images/work/railboard.png",
  },
  {
    title: "Railboard API",
    description:
      "Backend for Railboard and soon-to-be stable public api to get high quality german train data",
    link: "https://api.rail.boecker.dev/docs",
    image: "/images/work/railboard-api.png",
  },
  {
    title: "This website",
    description: "this website made with next.js and tailwindcss",
    link: "/",
    image: "/images/work/boecker-dev.png",
  },
  {
    title: "Emmalink",
    description: "A simple URL shortener with oauth support",
    link: "https://github.com/emmaboecker/emmalink",
    image: "/images/work/emmalink.png",
  },
  {
    title: "Minecraft Hunger Games",
    description: "A Hunger Games event for a YouTube Video by JacobStreams.",
    link: "https://www.youtube.com/watch?v=9MaMhAUm1as",
    image: "/images/work/hunger-games.jpg",
  },
  {
    title: "Minecraft Challenge Plugin",
    description:
      "A Minecraft Challenge Plugin inspired by german YouTuber BastiGHG",
    link: "https://github.com/StckOverflwNet/StckUtils",
    image: "/images/work/stckutils.png",
  },
  {
    title: "Damage = Random",
    description:
      "A Minecraft Plugin for a Video by HighBeanie where if you take damage, random things happen",
    link: "https://www.youtube.com/watch?v=15uUMJGuQFw",
    image: "/images/work/beanie.jpg",
  },
  {
    title: "Minecraft Challenge Plugin",
    description:
      "A Minecraft Challenge Plugin inspired by german YouTuber BastiGHG",
    link: "https://github.com/StckOverflwNet/StckUtils",
    image: "/images/work/stckutils.png",
  },
];
