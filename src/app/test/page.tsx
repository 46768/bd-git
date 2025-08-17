"use client";

import Card from "@/components/ui/Card";
import InputField from "@/components/ui/input/InputField";
import NavBar from "@/components/ui/nav/NavBar";
import NavLink from "@/components/ui/nav/NavLink";

export default function Test() {
    return (
        <main>
            <div className="flex flex-col gap-4">
                <InputField onClick={() => {}} legend="Test" buttonText="OK" />

                <NavLink href="/test">Test</NavLink>
                <NavLink href="/test/non">Test Non</NavLink>

                <NavBar />

                <Card title="normal" body="normal" />
                <Card title="link" body="link" href="/" />

                <Card
                    title="normal"
                    body="normallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"
                />
                <Card title="link" body="link" href="/" />
            </div>
        </main>
    );
}
