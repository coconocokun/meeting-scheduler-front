import { ReactNode } from "react";
import AnimatedParticipantsView from "./animated-participants-view";

type ParticipantsProps = {
  participants: {
    name: string;
    index: number;
  }[];
}

export type ParticipantsViewProps = ParticipantsProps & { children?: ReactNode };

const StaticParticipantsView = ({
  participants,
  children
}: ParticipantsViewProps) => (
  <div className="w-full h-full flex flex-wrap items-center justify-end p-1 pointer-events-none relative"
  >
    {children}
    <div className="transition-opacity opacity-0 group-hover:opacity-100 absolute left-1/2 -top-10 pointer-events-none bg-neutral-700/90 rounded-full px-3 py-2 shadow-lg border-neutral-600 text-white font-bold text-xs w-fit block whitespace-nowrap break-keep">{participants[0].name}{participants.length > 1 ? ` + ${participants.length - 1} more` : ""}</div>
  </div>
);

const ParticipantsChip = ({
  participants
}: ParticipantsProps) => participants.map(
  (participant, i) =>
    <span key={i} className="inline-block w-2 h-2 ring-white ring-2 bg-rose-500 rounded-full hue-rotate-[0deg]"
      style={{
        "--tw-hue-rotate":
          `hue-rotate(${participant.index * 107}deg)`
      } as any}></span>
);

export default function ParticipantsView({
  participants, animated
}: ParticipantsProps & { animated: boolean }) {
  if (animated) {
    return (
      <AnimatedParticipantsView participants={participants}>
        <ParticipantsChip participants={participants} />
      </AnimatedParticipantsView>
    )
  } else {
    return (
      <StaticParticipantsView participants={participants}>
        <ParticipantsChip participants={participants} />
      </StaticParticipantsView>
    );
  }
}