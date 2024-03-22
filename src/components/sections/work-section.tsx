import { HoverEffect } from "../animations/card-hover-effect";

export default function WorkSection() {
  return (
    <div id="work" className="relative flex w-full">
      <div className="container mx-auto px-5 sm:px-0">
        <h3 className="text-5xl font-semibold">Work</h3>
        <p className="font-light">
          Some projects I&apos;ve worked on in the past.
        </p>
        <p>
          I&apos;m big fan of open source, so you will find the source code of
          most of my projects on my GitHub.
        </p>
        <HoverEffect items={projects} />
        <a
          href="https://github.com/emmaboecker"
          target="_blank"
          className="hover:text-primary transition duration-150 pb-10 pl-2"
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

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-primary flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-primary flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-primary flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
