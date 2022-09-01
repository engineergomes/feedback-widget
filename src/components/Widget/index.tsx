import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
    return (
        <div className="absolute bottom-20 right-5 z-10">
            <Popover>
                <Popover.Panel>
                    <WidgetForm />
                </Popover.Panel>

                <Popover.Button className="bg-violet-700 rounded-full p-3 text-white items-center flex group absolute bottom-0 right-0">
                    <ChatTeardropDots className="w-6 h-6" />
                    <div className="hidden show sm:flex">
                        <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
                            &nbsp;Feedback
                        </span>
                    </div>
                </Popover.Button>
            </Popover>
        </div>
    );
}
