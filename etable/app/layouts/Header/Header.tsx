import Image from "next/image";
import GradientButton from "../../components/ui/GradientButton";

export default function Header() {
    return (
        <header className="w-full bg-black">
            <div className="container-xl py-4.5 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/images/logo.svg" // replace with your logo path
                        alt="ETableAI Logo"
                        width={240}
                        height={70}
                        className="w-36 md:w-full h-auto"
                    />
                </div>

                {/* CTA Button */}
                <GradientButton>Join The Waitlist</GradientButton>

            </div>
        </header>
    );
}
