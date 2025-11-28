// app/waitlist/form/page.tsx
import React, { Suspense } from "react";
import WaitListFor from "@/app/components/Waitlist/WaitlistForm";

export default function WaitListFormPage() {
    return (
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-[#d4af37]">Loading form…</div>}>
            <WaitListFor />
        </Suspense>
    );
}
