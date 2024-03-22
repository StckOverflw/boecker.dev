export default function AboutSection() {
  return (
    <div id="work" className="relative flex w-full">
      <div className="container mx-auto flex flex-col gap-3">
        <h2 className="text-5xl font-semibold">About me</h2>
        <p>
          My name is Emma, I&apos;m a full-stack developer, political activist
          and student from germany.
        </p>
        <p>
          I&apos;ve been interested in technology since a very young age and I
          started programming when I was about 11 years old. Since then
          I&apos;ve been learning and working with different technologies and
          languages. Starting with making Minecraft Plugins in Java and later
          switching to Kotlin for that. I focus on building things on the web
          now. <br /> My favorite programming languages include{" "}
          <TextLink link="https://rustlang.org">Rust</TextLink>,{" "}
          <TextLink link="https://typescriptlang.org">Typescript</TextLink> and{" "}
          <TextLink link="https://kotlinlang.org/">Kotlin</TextLink>. I&apos;ve
          also started adopting{" "}
          <TextLink link="https://nixos.org">Nix(-OS)</TextLink> for system
          administration and DevOps.
        </p>
        <p>
          Besides development, I do a lot of political activism in my position
          on the federal board of{" "}
          <TextLink link="https://linksjugend-solid.de">
            Linksjugend [&apos;solid]
          </TextLink>
          , the youth organization of the german left party.
        </p>
      </div>
    </div>
  );
}

function TextLink(props: { link: string; children: React.ReactNode }) {
  return (
    <a href={props.link} target="_blank" className="font-medium">
      {props.children}
    </a>
  );
}
