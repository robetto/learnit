import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <p className="text-3xl text-slate-500">Test</p>
            <p>
                <UserButton afterSignOutUrl="/" />
            </p>
        </div>
    );
}
