import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { SparklesCore } from "@/components/ui/sparkles";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import Screenshot1 from "./../../public/images/create-a-meeting-schedule.png";
import Screenshot2 from "./../../public/images/screenshot2.png";
import Screenshot3 from "./../../public/images/screenshot3.png";



export default function Home() {
  return (
    <>
      <header className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center py-64">
          <div></div>
          <div className="relative">
            <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
              Make awesome schedule
            </h1>
            <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full bottom-0 absolute blur-lg" />
            <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4 mt-1 mx-auto" />
            <div className="absolute left-1/2 ml-[-12.5%] bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute left-1/2 ml-[-12.5%] bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
          <div className="relative h-64 w-full">
            <div className="from-black to-transparent bg-gradient-to-t absolute inset-0"></div>
            <div className="from-black via-transparent to-black bg-gradient-to-r absolute inset-0"></div>
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="grid grid-cols-2 gap-16 text-center max-w-xl mx-auto relative z-20">
            <a className="p-2 block bg-white border-indigo-600 border rounded font-bold" href="#learnMore">Learn more</a>
            <a className="p-2 block text-white border-indigo-600 border bg-indigo-600 rounded font-bold"
              href="/create">New meeting</a>
          </div>
        </div>
      </header>
      <div id="learnMore">
        <div className="md:relative">
          <div className="container mx-auto lg:max-w-screen-lg md:min-h-72 lg:min-h-96 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 md:gap-4 lg:gap-8 py-5 md:py-8 lg:py-10 items-stretch md:absolute md:inset-0">
            <div></div>
            <div className="flex flex-col justify-center">
              <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Create a meeting schedule</h2>
              <p className="md:text-lg lg:text-xl !leading-loose">Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.</p>
            </div>
          </div>
          <CardContainer className="container mx-auto lg:max-w-screen-lg md:min-h-72 lg:min-h-96 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 md:gap-4 lg:gap-8 py-5 md:py-8 lg:py-10 items-stretch">
            <CardBody className="h-full w-full shadow-md rounded bg-slate-50">
              <CardItem translateZ="50">
                <Image
                  src={Screenshot1}
                  width={800}
                  height={800}
                  className="w-full object-cover aspect-1 rounded"
                  alt="linear board demo"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <CardContainer className="container mx-auto lg:max-w-screen-lg md:min-h-72 lg:min-h-96 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-5 md:gap-4 lg:gap-8 py-5 md:py-8 lg:py-10 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Invite guests</h2>
            <p className="md:text-lg lg:text-xl !leading-loose">See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.</p>
          </div>
          <CardBody>
            <CardItem translateZ="50">
              <Image
                src={Screenshot2}
                width={800}
                height={800}
                className="w-full object-cover aspect-1"
                alt="linear board demo"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="container mx-auto lg:max-w-screen-lg md:min-h-72 lg:min-h-96 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 md:gap-4 lg:gap-8 py-5 md:py-8 lg:py-10 items-stretch">
          <CardBody>
            <CardItem translateZ="50">
              <Image
                src={Screenshot3}
                width={800}
                height={800}
                className="w-full object-cover aspect-1"
                alt="linear board demo"
              />
            </CardItem>
          </CardBody>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Set the final meeting time</h2>
            <p className="md:text-lg lg:text-xl !leading-loose">Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.</p>
          </div>
        </CardContainer>
      </div>
      <MaskContainer
        revealText={
          <div className="space-y-10">
            <p className="max-w-4xl mx-auto text-slate-800 text-center text-3xl font-bold leading-normal">
              This application is a collaborative creation by students from the Ziqzi Academy’s Computer Science introductory course.
              Drawing inspiration from When2meet, the students have meticulously crafted the API and database architecture.</p>
            <p className="max-w-4xl mx-auto text-slate-800 text-center text-3xl font-bold leading-normal">
              The backend is powered by a Node.js environment utilizing an Express server, while the frontend is developed with Next.js.
              Despite having only three months of web development training, the students have commendably undertaken the majority of the backend development tasks.
            </p>
          </div>
        }
        className="h-[60rem]"
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
              <dd>Json Kim</dd>
            </dl>
            <dl>
              <dt className="text-xl font-normal">Student</dt>
              <dd>Mark Makaroni</dd>
            </dl>
            <dl>
              <dt className="text-xl font-normal">Student</dt>
              <dd>Jodern Ring</dd>
            </dl>
          </div>
        </div>
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
            <a className="block bg-indigo-600 text-white hover:bg-indigo-500 px-3 py-2 rounded mt-16"
              href="/create">Create a new meeting schedule</a>
          </div>
        </WavyBackground>
      </section>

    </>
  );
}
