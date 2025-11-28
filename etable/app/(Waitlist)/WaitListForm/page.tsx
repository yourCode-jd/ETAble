// app/waitlist/page.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";

const roleOptions = [
    "Restaurant Owner / CEO",
    "Customer / Manager",
    "Chef / Culinary Professional",
    "Partner / Collaborator",
    "Media / Content Creator",
    "Other (Please specify)",
];

export default function WaitlistIndex() {
    return (
        <main className="min-h-screen bg-black text-[#d4af37] py-16 px-6">
            <div className="max-w-xl mx-auto text-center">
                <p className="text-sm tracking-wider text-[#d4af37]/90 md:mb-6 mb-4">WELCOME TO</p>
                <Link href="/">  <Image
                    src="/images/logo.svg" // replace with your logo path
                    alt="ETableAI Logo"
                    width={240}
                    height={70}
                    className="md:w-72 w-42 mx-auto max-w-full h-auto mb-4"
                />
                </Link>
                <h1 className="text-lg! sm:text-4xl! md:text-5xl! leading-tight text-[#d4af37] ">
                    How are you joining?
                </h1>
                <p className="mt-3 text-[#d4af37]/80">
                    Reinventing dining with AI for a smarter, faster experience.
                </p>

                <div className="mt-8 space-y-3">
                    {roleOptions.map((role) => {
                        const encoded = encodeURIComponent(role);
                        return (
                            <Link
                                key={role}
                                href={`/WaitListForm/form?role=${encoded}`}
                                className="block w-full px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/5 transition-all text-left font-sans text-sm sm:text-base"
                            >
                                {role}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main >
    );
}
