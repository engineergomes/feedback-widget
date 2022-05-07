import { ChatTeardropDots } from "phosphor-react";
// import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  // function toggleWidgetVisibility() {
  //   setIsWidgetOpen(!isWidgetOpen);
  // }

  return (
    <div className="absolute bottom-5 right-5 ">
      <Popover>
        <Popover.Panel>
          {" "}
          <WidgetForm />{" "}
        </Popover.Panel>

        <Popover.Button className="bg-violet-700 rounded-full p-3 text-white items-center flex group absolute bottom-0 right-0">
          <ChatTeardropDots className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
            &nbsp;Feedback
          </span>
        </Popover.Button>
      </Popover>
      {/* {isWidgetOpen ? "TA ABERTO" : ""}
      <button
        onClick={toggleWidgetVisibility}
        className="bg-green-400 rounded-full p-3 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
          &nbsp;Feedback
        </span>
      </button> */}
    </div>
  );
}
