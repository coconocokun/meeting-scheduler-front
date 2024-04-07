"use client";

import Image from "next/image";
import Screenshot1 from "./../../public/images/create-a-meeting-schedule.png";
import Screenshot2 from "./../../public/images/screenshot2.png";
import Screenshot3 from "./../../public/images/screenshot3.png";

export default function FloatingImageSection() {


  return (
    <section id="learnMore" className="grid grid-cols-[2fr_3fr]">
      <div>
        <article className="flex flex-col justify-center">
          <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Create a meeting schedule</h2>
          <p className="md:text-lg lg:text-xl !leading-loose">Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.</p>
        </article>
        <article className="flex flex-col justify-center">
          <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Create a meeting schedule</h2>
          <p className="md:text-lg lg:text-xl !leading-loose">Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.</p>
        </article>
        <article className="flex flex-col justify-center">
          <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Invite guests</h2>
          <p className="md:text-lg lg:text-xl !leading-loose">See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.</p>
        </article>
      </div>
      <div>
        <Image
          src={Screenshot1}
          width={800}
          height={800}
          className="w-full object-cover aspect-1 rounded"
          alt="linear board demo"
        />
        <Image
          src={Screenshot2}
          width={800}
          height={800}
          className="w-full object-cover aspect-1"
          alt="linear board demo"
        />
        <Image
          src={Screenshot3}
          width={800}
          height={800}
          className="w-full object-cover aspect-1"
          alt="linear board demo"
        />
      </div>
    </section>
  )
}