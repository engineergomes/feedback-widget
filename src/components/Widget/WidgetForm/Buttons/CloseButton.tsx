import { X } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function CloseButton() {
    return (
        // popover button works like a toggle, so if you click it again you'll close the popover
        <Popover.Button className="absolute right-4 top-5">
            <X className="w-4 h-4" weight="bold" />
        </Popover.Button>
    );
}
