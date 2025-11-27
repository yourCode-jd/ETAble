// app/(waitlist)/layout.tsx
import "../globals.css";

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
