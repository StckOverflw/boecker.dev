export default function AboutSection() {
  return (
    <div id="work" className="relative flex w-full">
      <div className="container mx-auto flex flex-col gap-3">
        <h3 className="text-5xl font-semibold">About me</h3>
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
          now.
        </p>
        <p>
          Besides development, I do a lot of political activism at{" "}
          <a
            href="https://linksjugend-solid.de"
            className="font-medium"
            target="_blank"
          >
            Linksjugend [&apos;solid]
          </a>
          , the youth organization of the german left party, where I am also on
          the federal board.
        </p>
      </div>
    </div>
  );
}
