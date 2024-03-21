import { HoverEffect } from "../animations/card-hover-effect";

export default function WorkSection() {
  return (
    <div
      id="work"
      className="relative flex mt-[100vh] w-full bg-black"
      style={{
        maskImage:
          "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2) 50px, rgba(0,0,0,1) 150px)",
      }}
    >
      <div className="container mx-auto mt-[200px] px-5 sm:px-0">
        <h3 className="text-5xl font-semibold">Work</h3>
        <p className="font-light">
          Some projects I&apos;ve worked on in the past.
        </p>
        <div className="">
          <HoverEffect items={projects} />
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
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
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
    description:
      "Besides web development, I am also experienced in Minecraft Development. Here I made a Hunger Games plugin for a YouTube Video by JacobStreams.",
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
];
