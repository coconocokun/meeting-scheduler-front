"use client";
import { ChangeEvent, FormEvent } from "react";

export default function Page() {
  let text1 = "5555";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Button clicked");
    console.log(text1);
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    text1 = e.target.value;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Host name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="ex) gavin"
            value={text1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Host password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="title">Meeting title</label>
          <input type="text" name="title" id="title" placeholder="ex) My meeting1" />
        </div>
        <div>
          <label htmlFor="description">Meeting description</label>
          {/* <input type="text" name="description" id="description" placeholder="ex) This meeting is for only private" /> */}
          <textarea id="description" name="description" />
        </div>
        <div>
          <label htmlFor="timezone">Timezone</label>
          <input type="text" name="timezone" id="timezone" placeholder="ex) UTS" />
        </div>
        <div>
          <label htmlFor="duration">Meeting duration</label>
          <input type="text" name="duration" id="duration" placeholder="ex) 30" />
        </div>
        <div>
          <label htmlFor="preferredtime">Preferred time</label>
          <input type="text" name="preferredtime" id="preferredtime" placeholder="ex) 1,2,3,4,5" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
