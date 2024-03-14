import { SparklesCore } from "@/components/ui/sparkles";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import Screenshot1 from "./../../public/images/screenshot1.png";





const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Screenshot1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];































export default function Home() {
  return (
    <>
      <header className="relative w-full from-black to-indigo-950 bg-gradient-to-b flex flex-col items-center justify-center overflow-hidden h-screen">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="flex flex-col h-full py-24 items-center justify-between">
          <div></div>
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            Make awesome schedule
          </h1>
          <div className="grid grid-cols-2 gap-16 text-center max-w-xl mx-auto relative z-20">
            <a className="p-2 block bg-white border-indigo-600 border rounded font-bold" href="#learnMore">Learn more</a>
            <a className="p-2 block text-white border-indigo-600 border bg-indigo-600 rounded font-bold"
              href="/create">New meeting</a>
          </div>
        </div>
      </header>
      <div id="learnMore">
        <section className="container mx-auto lg:max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 py-5 md:py-8 lg:py-10 items-stretch">
          <div className="flex flex-col justify-center">
            <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
              Collaborative Editing
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-xl lg:text-3xl mb-3 md:mb-5 lg:mb-8 font-bold">Create a meeting schedule</h2>
            <p>Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.</p>
          </div>
        </section>
        <section className="container mx-auto lg:max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 py-5 md:py-8 lg:py-10 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl lg:text-3xl mb-3 md:mb-5 lg:mb-8 font-bold">Invite guests</h2>
            <p>See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.</p>
          </div>
          <Image
            src={Screenshot1}
            width={300}
            height={300}
            className="w-full object-cover aspect-[4/3]"
            alt="linear board demo"
          />
        </section>
        <section className="container mx-auto lg:max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 py-5 md:py-8 lg:py-10 items-stretch">
          <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
            Version control
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl lg:text-3xl mb-3 md:mb-5 lg:mb-8 font-bold">Set the final meeting time</h2>
            <p>Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.</p>
          </div>
        </section>
      </div>
      <StickyScroll content={content} />
      <MaskContainer
        revealText={
          <div>
            <h2 className="text-5xl md:text-7xl xl:text-7xl mb-7 font-bold">Find out who made this</h2>
            <p className="max-w-4xl mx-auto text-slate-800 text-center text-4xl font-bold">
              The first rule of MRR Club is you do not talk about MRR Club. The
              second rule of MRR Club is you DO NOT talk about MRR Club.
            </p>
          </div>
        }
        className="h-[40rem]"
      >
        <h2 className="text-5xl md:text-7xl xl:text-7xl mb-7 font-bold">Find out who made this</h2>
        <p>
          The first rule of <span className="text-red-500">MRR Club</span> is you
          do not talk about MRR Club. The second rule of MRR Club is you DO NOT
          talk about <span className="text-red-500">MRR Club</span>.
        </p>
      </MaskContainer>
      <section className="relative">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mt-32">
              Hero waves are cool
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Leverage the power of canvas to create a beautiful hero section
            </p>
            <a className="block bg-indigo-600 text-white hover:bg-indigo-500 px-3 py-2 rounded mt-16">Create a new meeting schedule</a>
          </div>
        </WavyBackground>
      </section>

    </>
  );
}
