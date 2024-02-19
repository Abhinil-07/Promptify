import Image from "next/image";
import Feed from "@components/Feed";

export default function Home() {
  return (
    <div className="flex flex-col flex-center">
      <h1 className="head_text text-center">
        {" "}
        Discover and Share
        <br className="max md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptify is a AI-prompting tool for modern world to discover,create and
        share creative prompts
      </p>
      <Feed />
    </div>
  );
}
