// components/ui/GradientButton.tsx
import React from "react";

type GradientButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function GradientButton({
    children,
    className,
    onClick,
}: GradientButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`relative inline-flex items-center justify-center
        rounded-md md:px-6 px-3 md:py-2.75 py-2
        font-futura text-sm font-medium text-black
        border border-[#FDC034] font-style-normal
        bg-[linear-gradient(90deg,#A86307_0%,#EDB838_50%,#A86307_100%)]
        transition-all duration-200 hover:brightness-110 active:scale-[0.98] cursor-pointer
        ${className ?? ""}`}
        >
            {children}
        </button>
    );
}
