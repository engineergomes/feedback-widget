import { CloseButton } from "../Buttons/CloseButton";

interface FormStartProps {
    formOptions: Array<{ name: string; imgSrc: string; imgAlt: string }>;
    choosenOption: (type: {
        name: string;
        imgSrc: string;
        imgAlt: string;
    }) => void;
}

export function FormStart({ formOptions, choosenOption }: FormStartProps) {
    return (
        <>
            <header className="flex text-xl leading-6 items-center">
                <p>How can we help?</p>
                <CloseButton />
            </header>

            <main className="grid grid-cols-3 gap-x-2 items-center mt-10 mb-10">
                {formOptions.map((option) => (
                    <button
                        key={option.name}
                        className="flex flex-col items-center bg-[#27272A] p-4 rounded-2xl gap-3 border-2 border-[#27272A] hover:border-violet-700"
                        onClick={(e) => {
                            e.preventDefault();
                            choosenOption(option);
                        }}
                    >
                        <img src={option.imgSrc} alt={option.imgAlt} />{" "}
                        {option.name}
                    </button>
                ))}
            </main>
        </>
    );
}
