"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../../utils/cn";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <>
            <div className=" w-full flex mx-auto rounded-none md:rounded-2xl p-4 shadow-input bg-white dark:bg-black">
                <div className="w-3/5">
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                        Have a question , or just want a Appointment, say hi!
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        We'd love to hear from you! Drop us a line using the form below, and our dedicated team will get back to you as soon as possible.
                    </p>
                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="Tyler" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Durden" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="password">Message</Label>
                            <Input id="password" className="h-40" type="text" />
                        </LabelInputContainer >
                        <div className="flex flex-row justify-end">

                            <button
                                className="bg-gradient-to-br w-28  relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            >
                                Connect <BottomGradient />

                            </button>
                        </div>

                    </form>
                </div>
                <div className="w-2/5 pl-20 flex gap-2 flex-col">
                    <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
                        Contact Informations
                    </h2>
                    <p className="text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-400">
                        <span className="font-bold text-lg">Head office U.A.E</span> <br />Office No. 3109 Aspin Commercial Tower Sheikh
                        Zayed Road Dubai, U.A.E <br /> <br />
                        Ph : +971 50 339 7437<br /> Mail : info@guidelineedu.com
                    </p>
                    <p className="text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-400">
                        <span className="font-bold text-lg">Head office U.A.E</span> <br />Office No. 3109 Aspin Commercial Tower Sheikh
                        Zayed Road Dubai, U.A.E <br /> <br />
                        Ph : +971 50 339 7437<br /> Mail : info@guidelineedu.com
                    </p>
                    <p className="text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-400">
                        <span className="font-bold text-lg">Appointment</span> <br />
                        Mon to Thursday : 9am to 6pm (1pm to 2pm lunch break)<br />Friday :  2 pm to 6pm Public Holidays Off
                    </p>
                </div>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" ><BottomGradient /></div>
        </>
    );
}



const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};