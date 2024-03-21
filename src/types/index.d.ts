export type integer = number;

export type Host = {
  name: string;
  preferred_time: string;
}

export type Guest = {

}

export type Meeting = {
  id: integer;
  title: string;
  description: string;
  timezone: string;
  meeting_length: integer;
  host: Host;
  guest: Guest[];
};