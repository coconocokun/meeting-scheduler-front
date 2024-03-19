import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { SparklesCore } from "@/components/ui/sparkles";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import Screenshot1 from "./../../public/images/screenshot1.png";


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
        <CardContainer className="container mx-auto lg:max-w-screen-lg md:min-h-72 lg:min-h-96 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 lg:gap-32 py-5 md:py-8 lg:py-10 items-stretch">
          <CardBody className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
            <CardItem as="h3" translateZ="50">Collaborative Editing</CardItem>
          </CardBody>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl lg:text-3xl mb-3 md:mb-5 lg:mb-8 font-bold">Create a meeting schedule</h2>
            <p>Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.</p>
          </div>
        </CardContainer>
        <CardContainer className="container mx-auto lg:max-w-screen-lg md:min-h-72 lg:min-h-96 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 lg:gap-32 py-5 md:py-8 lg:py-10 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl lg:text-3xl mb-3 md:mb-5 lg:mb-8 font-bold">Invite guests</h2>
            <p>See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.</p>
          </div>
          <CardBody>
            <CardItem translateZ="50">
              <Image
                src={Screenshot1}
                width={300}
                height={300}
                className="w-full object-cover aspect-[4/3]"
                alt="linear board demo"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="container mx-auto lg:max-w-screen-lg md:min-h-72 lg:min-h-96 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 lg:gap-32 py-5 md:py-8 lg:py-10 items-stretch">
          <CardBody className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128.5 128.5">
              <g id="_x31_4">
                <g>
                  <circle className="fill-[#EF8D6F]" cx="64.25" cy="64.25" r="64.25" />
                </g>
                <g>
                  <path className="fill-neutral-100" d="M87.805,28.975h0.618c7.083,0,12.878,5.795,12.878,12.879v48.345
			c0,7.083-5.796,12.879-12.878,12.879h-0.618V47.287c2.704,0,4.896-2.192,4.896-4.896c0-2.703-2.191-4.895-4.896-4.895
			C87.805,37.496,87.805,28.975,87.805,28.975z M40.696,28.975h47.109v8.521h-0.001c-2.703,0-4.896,2.192-4.896,4.895
			c0,2.704,2.193,4.896,4.896,4.896h0.001v55.791H40.696V47.287c2.703,0,4.896-2.192,4.896-4.896c0-2.703-2.192-4.895-4.896-4.895
			V28.975z M40.079,28.975h0.617v8.521c-2.704,0-4.896,2.192-4.896,4.895c0,2.704,2.192,4.896,4.896,4.896v55.791h-0.617
			c-7.084,0-12.88-5.797-12.88-12.879V41.854C27.199,34.77,32.995,28.975,40.079,28.975z"/>
                  <CardItem as="g" translateZ="50">
                    <path className="fill-neutral-300" d="M40.696,25.422L40.696,25.422c1.046,0,1.902,0.856,1.902,1.902v13.165
			c0,1.046-0.856,1.902-1.902,1.902h-0.001c-1.047,0-1.902-0.856-1.902-1.902V27.324C38.794,26.278,39.65,25.422,40.696,25.422z"/>
                  </CardItem>
                  <CardItem as="g" translateZ="50">
                    <path className="fill-neutral-300" d="M87.805,25.422L87.805,25.422c1.047,0,1.902,0.856,1.902,1.902v13.165
			c0,1.046-0.855,1.902-1.902,1.902h-0.001c-1.047,0-1.903-0.856-1.903-1.902V27.324C85.902,26.278,86.758,25.422,87.805,25.422z"/>
                  </CardItem>
                  <rect x="27.199" y="50.675" className="fill-yellow-400" width="74.102" height="3.107" />
                  <rect x="53.236" y="59.304" className="fill-yellow-300" width="9.584" height="8.453" />
                  <rect x="38.199" y="58.954" className="fill-red-400" width="9.584" height="8.453" />
                  <rect x="68.727" y="59.304" className="fill-yellow-300" width="9.584" height="8.453" />
                  <rect x="83.088" y="59.304" className="fill-yellow-300" width="9.584" height="8.453" />
                  <rect x="53.586" y="72.996" className="fill-yellow-300" width="9.584" height="8.453" />
                  <rect x="69.077" y="72.996" className="fill-yellow-300" width="9.584" height="8.453" />
                  <rect x="83.088" y="73.346" className="fill-yellow-300" width="9.584" height="8.453" />
                  <rect x="53.586" y="87.327" className="fill-yellow-300" width="9.584" height="8.439" />
                  <rect x="38.373" y="72.996" className="fill-yellow-300" width="9.584" height="8.453" />
                  <rect x="38.373" y="87.327" className="fill-yellow-300" width="9.584" height="8.439" />
                  <rect x="68.727" y="87.677" className="fill-yellow-300" width="9.584" height="8.439" />
                  <rect x="83.088" y="87.677" className="fill-yellow-300" width="9.584" height="8.439" />
                </g>
              </g>
            </svg>
          </CardBody>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl lg:text-3xl mb-3 md:mb-5 lg:mb-8 font-bold">Set the final meeting time</h2>
            <p>Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.</p>
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
            <a className="block bg-indigo-600 text-white hover:bg-indigo-500 px-3 py-2 rounded mt-16">Create a new meeting schedule</a>
          </div>
        </WavyBackground>
      </section>

    </>
  );
}
