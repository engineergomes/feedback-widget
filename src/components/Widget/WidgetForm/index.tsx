import { useState } from "react";
import { FormStart } from "./Steps/FormStart";
import { FormEnd } from "./Steps/FormEnd";
import { Form } from "./Steps/Form";

export type onProblemChangedType = boolean;
export type onIdeaChangedType = boolean;
export type onThoughtChangedType = boolean;
export type onFormEndRequestedType = boolean;
export type onScreenshotTookType = string;
export type screenshotType = string | null;

export function WidgetForm() {
    const [isFormEnd, setIsFormEnd] = useState(false);
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [option, setOption] = useState<{
        name: string;
        imgSrc: string;
        imgAlt: string;
    } | null>(null);

    const formOptions = [
        {
            name: "Problem",
            imgSrc: "/bug.svg",
            imgAlt: "Insect",
        },

        {
            name: "Idea",
            imgSrc: "/idea.svg",
            imgAlt: "Light bulb",
        },
        {
            name: "Other",
            imgSrc: "/thought.svg",
            imgAlt: "Thinking balloon",
        },
    ];

    function handleRestartForm() {
        setIsFormEnd(false);
        setOption(null);
    }

    return (
        <>
            <div className="bg-zinc-900 p-4 rounded-2xl mb-20 flex flex-col items-center gap-y-1 relative min-w-[336px] min-h-[264px]">
                {isFormEnd ? (
                    <FormEnd onFormRestartRequested={handleRestartForm} />
                ) : !option ? (
                    <FormStart
                        formOptions={formOptions}
                        choosenOption={setOption}
                    />
                ) : (
                    <Form
                        onFormRestartRequested={handleRestartForm}
                        onFormEndRequested={setIsFormEnd}
                        onScreenshotTook={setScreenshot}
                        screenshot={screenshot}
                        formOption={option}
                    />
                )}

                <footer className="text-xs">Made by @engineergomes </footer>
            </div>
        </>
    );
}
