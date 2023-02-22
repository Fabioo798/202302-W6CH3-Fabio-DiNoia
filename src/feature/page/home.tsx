import { useState } from "react";
import { Display } from "../component/display/display";
import { Keyboard } from "../component/keyboard/keyboard";
import { Actions } from "../component/actions/actions";
import { Info } from "../component/info/info";

export function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleKeyClick(key: any) {
    if (key === "delete") {
      setPhoneNumber((prevPhoneNumber) => prevPhoneNumber.slice(0, -1));
    } else {
      setPhoneNumber((prevPhoneNumber) => prevPhoneNumber + key);
    }
  }

  function handleCallClick() {
    console.log(`Calling ${phoneNumber}`);
  }

  function handleSaveClick() {
    console.log(`Saving ${phoneNumber}`);
  }

  return (
    <section>
      <Info />
      <div className="phone">
        <Display phoneNumber={phoneNumber} />
        <Keyboard onKeyClick={handleKeyClick} />
        <Actions onCallClick={handleCallClick} onSaveClick={handleSaveClick} />
      </div>
    </section>
  );
}
