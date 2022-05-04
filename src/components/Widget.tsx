import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
  }

  return (
    <div className="absolute bottom-5 right-5 ">
      <Popover className="relative">
        <Popover.Panel>TA ABERTO</Popover.Panel>

        <Popover.Button className="bg-green-400 rounded-full p-3 text-white flex items-center group">
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
