import FloatingImageSection from "@/components/float-image-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import "@/styles/home.css";

export default function Home() {
  return (
    <>
      <AuroraBackground className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden snap-end min-h-screen">
        <div className="flex flex-col items-center justify-center py-64">
          <div></div>
          <div className="relative">
            <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
              Find best time to meet together
            </h1>
            <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full bottom-0 absolute blur-lg" />
            <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4 mt-1 mx-auto" />
            <div className="absolute left-1/2 ml-[-12.5%] bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute left-1/2 ml-[-12.5%] bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
          <div className="relative h-64 w-full mix-blend-color-dodge">
            <div className="from-black to-transparent bg-gradient-to-t absolute inset-0"></div>
            <div className="from-black via-transparent to-black bg-gradient-to-r absolute inset-0"></div>
            <SparklesCore
              background="#000000"
              minSize={0.4}
              maxSize={1.4}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#FFFFAA"
            />
          </div>
          <div className="grid grid-cols-2 gap-16 text-center max-w-xl mx-auto relative z-20">
            <a
              className="py-2 px-4 block text-xl bg-white border-indigo-600 border rounded font-bold"
              href="#learnMore"
            >
              Learn more
            </a>
            <a
              className="py-2 px-4 block text-xl text-white border-indigo-600 border bg-indigo-600 rounded font-bold"
              href="/create"
            >
              New meeting
            </a>
          </div>
        </div>
      </AuroraBackground>
      <FloatingImageSection />
      <MaskContainer
        revealText={
          <div className="space-y-10">
            <p className="max-w-4xl mx-auto text-slate-800 text-center text-3xl font-bold leading-normal">
              This application is a collaborative creation by students from the Ziqzi Academy’s Computer Science
              introductory course. Drawing inspiration from When2meet, the students have meticulously crafted the API
              and database architecture.
            </p>
            <p className="max-w-4xl mx-auto text-slate-800 text-center text-3xl font-bold leading-normal">
              The backend is powered by a Node.js environment utilizing an Express server, while the frontend is
              developed with Next.js. Despite having only three months of web development training, the students have
              commendably undertaken the majority of the backend development tasks.
            </p>
          </div>
        }
        className="min-h-screen h-[60rem] snap-always snap-center"
        revealSize={900}
      >
        <h2 className="text-5xl md:text-7xl xl:text-7xl mb-20 font-bold">Find out who made this</h2>
        <div className="flex text-start justify-center items-center">
          <div className="px-20">
            <dl>
              <dt className="text-xl font-normal">Lecturer</dt>
              <dd>Gavin Kwon</dd>
            </dl>
          </div>
          <div className="px-32 space-y-20 border-l">
            <dl>
              <dt className="text-xl font-normal">Student</dt>
              <dd>Jane Han</dd>
            </dl>
            <dl>
              <dt className="text-xl font-normal">Student</dt>
              <dd>Hyunwoo Kong</dd>
            </dl>
            <dl>
              <dt className="text-xl font-normal">Student</dt>
              <dd>Joonyoung Jeon</dd>
            </dl>
          </div>
        </div>
      </MaskContainer>
      <section className="relative min-h-screen snap-always snap-center">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mt-32">
              Start setting up a meeting
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Find the best meeting time or lecture time together
            </p>
            <a
              className="block text-xl bg-indigo-600 text-white hover:bg-indigo-500 px-4 py-2 rounded mt-16"
              href="/create"
            >
              Create a new meeting
            </a>
          </div>
        </WavyBackground>
      </section>
    </>
  );
}
