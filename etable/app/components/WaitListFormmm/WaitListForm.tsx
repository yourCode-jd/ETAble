import React from 'react'

export default function WaitListForm() {
    return (
        <div className="min-h-screen bg-black text-[#d4af37] flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
            <div className="max-w-lg w-full flex flex-col items-center text-center space-y-6 sm:space-y-8"><div className="relative">
            </div>
                <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm font-serif tracking-wider text-[#d4af37]">WELCOME TO</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#d4af37] font-sans">ETAbleAI</h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-[#d4af37] font-sans">COMING SOON</p>
                <p className="text-sm sm:text-base text-[#d4af37]/90 max-w-md font-sans px-4">Reinventing dining with AI for a smarter, faster experience.</p>
                <div className="w-full space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#d4af37] font-sans">HOW ARE YOU JOINING?</h2>
                    <div className="space-y-2 sm:space-y-2.5">
                        <button className="w-full px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/5 transition-all text-left font-sans text-sm sm:text-base">Restaurant Owner / CEO</button>
                        <button className="w-full px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/5 transition-all text-left font-sans text-sm sm:text-base">Customer / Manager</button>
                        <button className="w-full px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/5 transition-all text-left font-sans text-sm sm:text-base">Chef / Culinary Professional</button>
                        <button className="w-full px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/5 transition-all text-left font-sans text-sm sm:text-base">Partner / Collaborator</button>
                        <button className="w-full px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/5 transition-all text-left font-sans text-sm sm:text-base">Media / Content Creator</button>
                        <button className="w-full px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/5 transition-all text-left font-sans text-sm sm:text-base">Other (Please specify)</button></div>
                </div>
            </div>
            <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37]/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37]" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
