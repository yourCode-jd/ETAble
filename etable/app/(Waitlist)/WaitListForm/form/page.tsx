// app/waitlist/form/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

type FormState = {
    name: string;
    email: string;
    phone: string;
    role: string;
    country: string;
    state: string;
    city: string;
    notes: string;
};

export default function WaitListFormPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const roleFromQuery = searchParams?.get("role") ?? "";

    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        role: roleFromQuery,
        country: "",
        state: "",
        city: "",
        notes: "",
    });

    useEffect(() => {
        // Keep role in sync if user lands directly with ?role=...
        setForm((prev) => ({ ...prev, role: roleFromQuery }));
    }, [roleFromQuery]);

    const roleOptions = [
        "Restaurant Owner / CEO",
        "Customer / Manager",
        "Chef / Culinary Professional",
        "Partner / Collaborator",
        "Media / Content Creator",
        "Other (Please specify)",
    ];

    const countryOptions = [
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Other",
    ];

    // Typed change handler for input/select/textarea
    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Basic validation
        if (!form.name.trim() || !form.email.trim()) {
            alert("Please provide at least your name and email.");
            return;
        }

        // TODO: replace with real API call
        console.log("Waitlist form submitted:", form);

        // Provide user feedback
        alert("Thanks — your request has been received!");

        // Optionally redirect to a thank-you page (create it if needed)
        // router.push("/waitlist/thank-you");

        // Reset form but keep role (if you prefer)
        setForm({
            name: "",
            email: "",
            phone: "",
            role: form.role, // keep the selected role
            country: "",
            state: "",
            city: "",
            notes: "",
        });
    }

    return (
        <main className="min-h-screen bg-black text-[#d4af37] py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <header className="mb-8 text-center">
                    <Image
                        src="/images/logo.svg" // replace with your logo path
                        alt="ETableAI Logo"
                        width={240}
                        height={70}
                        className="md:w-72 w-42 mx-auto max-w-full h-auto md:mb-10 mb-4"
                    />
                    <p className="text-sm tracking-wider text-[#d4af37]/90">WELCOME TO</p>
                    <h1 className="mt-4 text-lg! md:text-4xl! font-bold tracking-tight text-[#d4af37] font-sans">
                        Early Access Waitlist
                    </h1>
                    <p className="mt-4 text-base text-[#d4af37]/80">
                        Reinventing dining with AI.
                        No wait times. Smarter service. A
                        premium restaurant experience is coming.

                        Join early to be first in line for updates,
                        access, and launch announcements.
                    </p>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="bg-black/60 border border-[#d4af37]/20 rounded-xl p-6 sm:p-8 shadow-lg"
                >
                    {/* Row 1: Name / Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className="w-full bg-transparent border border-[#d4af37]/30 rounded-md px-3 py-2 placeholder-[#d4af37]/60 text-[#d4af37] outline-none focus:ring-1 focus:ring-[#d4af37]"
                        />

                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="w-full bg-transparent border border-[#d4af37]/30 rounded-md px-3 py-2 placeholder-[#d4af37]/60 text-[#d4af37] outline-none focus:ring-1 focus:ring-[#d4af37]"
                        />
                    </div>

                    {/* Row 2: Phone / Role */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            className="w-full bg-transparent border border-[#d4af37]/30 rounded-md px-3 py-2 placeholder-[#d4af37]/60 text-[#d4af37] outline-none focus:ring-1 focus:ring-[#d4af37]"
                        />

                        <select
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="w-full bg-transparent border border-[#d4af37]/30 rounded-md px-3 py-2 text-[#d4af37] outline-none focus:ring-1 focus:ring-[#d4af37] appearance-none"
                        >
                            <option value="">{form.role ? form.role : "Select role"}</option>
                            {roleOptions.map((r) => (
                                <option key={r} value={r}>
                                    {r}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Row 3: Country / State */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                        <select
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            className="w-full bg-transparent border border-[#d4af37]/30 rounded-md px-3 py-2 text-[#d4af37] outline-none focus:ring-1 focus:ring-[#d4af37] appearance-none"
                        >
                            <option value="">Select Country</option>
                            {countryOptions.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>

                        <input
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            placeholder="State / Province"
                            className="w-full bg-transparent border border-[#d4af37]/30 rounded-md px-3 py-2 placeholder-[#d4af37]/60 text-[#d4af37] outline-none focus:ring-1 focus:ring-[#d4af37]"
                        />
                    </div>

                    {/* Row 4: City */}
                    <div className="mt-3">
                        <input
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="w-full bg-transparent border border-[#d4af37]/30 rounded-md px-3 py-2 placeholder-[#d4af37]/60 text-[#d4af37] outline-none focus:ring-1 focus:ring-[#d4af37]"
                        />
                    </div>

                    {/* Notes */}
                    <div className="mt-3">
                        <label className="sr-only" htmlFor="notes">
                            Message / Note
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={form.notes}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Message / Note (optional)"
                            className="w-full bg-transparent border border-[#d4af37]/30 rounded-md px-3 py-2 placeholder-[#d4af37]/60 text-[#d4af37] outline-none focus:ring-1 focus:ring-[#d4af37]"
                        />
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex items-center gap-3">
                        <button
                            type="submit"
                            className="cursor-pointer flex-1 rounded-md px-4 py-2 font-medium text-black bg-linear-to-r from-[#d4af37] to-[#D4AF37] hover:opacity-95 transition"
                        >
                            Join Waitlist
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setForm({
                                    name: "",
                                    email: "",
                                    phone: "",
                                    role: form.role,
                                    country: "",
                                    state: "",
                                    city: "",
                                    notes: "",
                                })
                            }
                            className=" rounded-md px-4 py-2 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/5 transition"
                        >
                            Reset
                        </button>
                    </div>

                    <p className="mt-3 text-xs text-[#d4af37]/60">
                        We respect your privacy. We’ll only use your details to contact you
                        about ETAbleAI updates.
                    </p>
                </form>
            </div>
        </main>
    );
}
