import Card from "@/components/ui/Card";

export default function Home() {
    return (
        <main>
            <div className="hero bg-base-200">
                <div className="hero-content">
                    <div className="prose text-base-content">
                        <h1>How to Git</h1>

                        <div className="flex flex-col">
                            <p>
                                Git is a free and open source distributed
                                version control system designed to handle
                                everything from small to very large projects
                                with speed and efficiency. This website will
                                teach you how to use git as a version control
                                software for your codebase or projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col gap-4 m-4">
                    <Card
                        title="Get Started"
                        body="Text resources without an IDE"
                        href="/docs"
                    />

                    <Card
                        title="Get Git"
                        body="Download git from here"
                        href="https://git-scm.com/downloads"
                    />

                    <Card
                        title="Git Documentations"
                        body="Git documentations"
                        href="https://git-scm.com/docs"
                    />
                </div>

                <div className="flex flex-row justify-center m-4 gap-4">
                    <Card
                        title="What is Git?"
                        body="Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency"
                    />

                    <Card
                        title="Why use Git?"
                        body="Git can be incredibly useful for backing up previous versions of your code, ensuring you can always go back to previous version if something bad happened to your code, like accidentally deleting it, or a bug happened and you don't know how to fix it yet. Another thing Git is useful for is for working with other people on a project. Git allows you to collaborate with other people to effectively work together on projects"
                    />

                    <Card
                        title="What is this website for?"
                        body="This website is designed to teach you how to use Git like in the real world. This means editing/creating/deleting files, using Git to version control the files, and using Git to collaborate with other people"
                    />
                </div>
            </div>
        </main>
    );
}
