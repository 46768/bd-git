import { compileData, Data, DataConstructor } from "@/lib/dataUtils";
import Link from "next/link";

const classesDataRaw: DataConstructor = {
    name: "Documentations",
    description: <div></div>,
    sections: {
        "Git Basics": {
            description: <div></div>,
            topics: {
                "Introduction to Git": {
                    content: (
                        <div>
                            Git is a distributed version control system. It
                            allows multiple developers to work on a project
                            simultaneously.
                        </div>
                    ),
                    subtopics: {
                        "What is Version Control?": {
                            content: (
                                <div>
                                    Version control is the management of changes
                                    to code, keeping track of every modification
                                    and allowing you to revert to previous
                                    versions.
                                </div>
                            ),
                        },
                        "Installing Git": {
                            content: (
                                <div>
                                    To install Git, download it from the{" "}
                                    <Link href="https://git-scm.com/download">
                                        official website
                                    </Link>{" "}
                                    and follow the installation instructions for
                                    your operating system.
                                </div>
                            ),
                        },
                    },
                },
                "Git Configuration": {
                    content: (
                        <div>
                            Before you start using Git, you need to set up your
                            identity.
                        </div>
                    ),
                    subtopics: {
                        "Setting Up Username and Email": {
                            content: (
                                <div>
                                    Use the "git config" command to set your
                                    username and email:{" "}
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>
                                                git config --global user.name
                                                'Your Name'
                                            </code>
                                        </pre>
                                        <pre data-prefix="$">
                                            <code>
                                                git config --global user.email
                                                'your@email.com'
                                            </code>
                                        </pre>
                                    </div>
                                    .
                                </div>
                            ),
                        },
                        "Global vs Local Configuration": {
                            content: (
                                <div>
                                    Global configuration applies to all
                                    repositories, while local configuration is
                                    specific to a single repository.
                                </div>
                            ),
                        },
                    },
                },
                "Basic Git Commands": {
                    content: (
                        <div>
                            These are the basic commands you'll need to get
                            started with Git.
                        </div>
                    ),
                    subtopics: {
                        "git init": {
                            content: (
                                <div>
                                    Initializes a new Git repository in the
                                    current directory.
                                </div>
                            ),
                        },
                        "git add": {
                            content: (
                                <div>
                                    Adds changes to the staging area to be
                                    committed.
                                </div>
                            ),
                        },
                        "git commit": {
                            content: (
                                <div>
                                    Commits changes to the repository with a
                                    descriptive message.
                                </div>
                            ),
                        },
                        "git status": {
                            content: (
                                <div>
                                    Shows the status of changes in the working
                                    directory.
                                </div>
                            ),
                        },
                    },
                },
                "Understanding the Git Workflow": {
                    content: (
                        <div>
                            Learn how changes flow through Git's stages: working
                            directory, staging area, and repository.
                        </div>
                    ),
                    subtopics: {
                        "Working Directory": {
                            content: (
                                <div>
                                    This is where you make changes to files in
                                    your project.
                                </div>
                            ),
                        },
                        "Staging Area": {
                            content: (
                                <div>
                                    Before committing, changes must be added to
                                    the staging area with `git add`.
                                </div>
                            ),
                        },
                        "Local Repository": {
                            content: (
                                <div>
                                    Committed changes are stored in the local
                                    repository.
                                </div>
                            ),
                        },
                    },
                },
                "Checking Commit History": {
                    content: (
                        <div>
                            Git keeps a detailed history of changes which you
                            can inspect using commands.
                        </div>
                    ),
                    subtopics: {
                        "git log": {
                            content: (
                                <div>
                                    Displays the commit history with author,
                                    date, and commit message.
                                </div>
                            ),
                        },
                        "git log --oneline": {
                            content: (
                                <div>
                                    Shows a simplified commit history in a
                                    single line per commit.
                                </div>
                            ),
                        },
                        "Viewing Specific Commits": {
                            content: (
                                <div>
                                    Use commit hashes to view or checkout
                                    specific commits.
                                </div>
                            ),
                        },
                    },
                },
                "Undoing Changes": {
                    content: (
                        <div>
                            Git allows you to undo changes in various ways
                            depending on the state of the changes.
                        </div>
                    ),
                    subtopics: {
                        "Undo Changes in Working Directory": {
                            content: (
                                <div>
                                    Use `git checkout -- [file]` to discard
                                    changes in your working directory.
                                </div>
                            ),
                        },
                        "Unstage Changes": {
                            content: (
                                <div>
                                    Remove changes from the staging area with
                                    `git reset HEAD [file]`.
                                </div>
                            ),
                        },
                        "Amending Commits": {
                            content: (
                                <div>
                                    Use `git commit --amend` to modify the most
                                    recent commit.
                                </div>
                            ),
                        },
                    },
                },
                "Ignoring Files": {
                    content: (
                        <div>
                            Tell Git to ignore certain files or directories
                            using the `.gitignore` file.
                        </div>
                    ),
                    subtopics: {
                        "Creating a .gitignore File": {
                            content: (
                                <div>
                                    Add file patterns to `.gitignore` to prevent
                                    them from being tracked.
                                </div>
                            ),
                        },
                        "Common .gitignore Patterns": {
                            content: (
                                <div>
                                    Ignore logs, temporary files, build outputs,
                                    and IDE-specific files.
                                </div>
                            ),
                        },
                        "Global Git Ignore": {
                            content: (
                                <div>
                                    Set a global `.gitignore` to ignore files
                                    across all repositories.
                                </div>
                            ),
                        },
                    },
                },
                "Viewing Differences": {
                    content: (
                        <div>
                            See changes between files, commits, or branches.
                        </div>
                    ),
                    subtopics: {
                        "git diff": {
                            content: (
                                <div>
                                    Shows unstaged changes between working
                                    directory and staging area.
                                </div>
                            ),
                        },
                        "git diff --staged": {
                            content: (
                                <div>
                                    Shows changes staged for the next commit.
                                </div>
                            ),
                        },
                        "Comparing Commits": {
                            content: (
                                <div>
                                    Compare two commits with `git diff [commit1]
                                    [commit2]`.
                                </div>
                            ),
                        },
                    },
                },
            },
        },
        "Git Intermediates": {
            description: <div></div>,
            topics: {
                "Branching in Git": {
                    content: (
                        <div>
                            Branching is a powerful feature in Git that allows
                            you to work on different parts of a project
                            simultaneously.
                        </div>
                    ),
                    subtopics: {
                        "Creating a Branch": {
                            content: (
                                <div>
                                    Use `git branch [branch_name]` to create a
                                    new branch.
                                </div>
                            ),
                        },
                        "Switching Branches": {
                            content: (
                                <div>
                                    Use `git checkout [branch_name]` to switch
                                    to another branch.
                                </div>
                            ),
                        },
                        "Merging Branches": {
                            content: (
                                <div>
                                    Once your changes are ready, use `git merge
                                    [branch_name]` to merge the branch back into
                                    the main branch.
                                </div>
                            ),
                        },
                    },
                },
                "Git Remotes": {
                    content: (
                        <div>
                            Remotes allow you to share your local Git repository
                            with others, typically on a platform like GitHub.
                        </div>
                    ),
                    subtopics: {
                        "Cloning a Repository": {
                            content: (
                                <div>
                                    Clone a repository with `git clone
                                    [repository_url]`.
                                </div>
                            ),
                        },
                        "Adding a Remote": {
                            content: (
                                <div>
                                    Add a remote repository with `git remote add
                                    origin [repository_url]`.
                                </div>
                            ),
                        },
                        "Pushing Changes": {
                            content: (
                                <div>
                                    Push changes to a remote repository with
                                    `git push`.
                                </div>
                            ),
                        },
                        "Pulling Changes": {
                            content: (
                                <div>
                                    Pull changes from a remote repository with
                                    `git pull`.
                                </div>
                            ),
                        },
                    },
                },
            },
        },
        "Git Advanced": {
            description: <div></div>,
            topics: {
                Rebasing: {
                    content: (
                        <div>
                            Rebasing is an advanced technique for integrating
                            changes from one branch into another.
                        </div>
                    ),
                    subtopics: {
                        "Basic Rebase": {
                            content: (
                                <div>
                                    Rebase a branch with `git rebase
                                    [branch_name]`.
                                </div>
                            ),
                        },
                        "Interactive Rebase": {
                            content: (
                                <div>
                                    Use `git rebase -i` for more control over
                                    the rebase process.
                                </div>
                            ),
                        },
                    },
                },
                "Stashing Changes": {
                    content: (
                        <div>
                            Git stash allows you to temporarily save changes
                            that are not ready to commit.
                        </div>
                    ),
                    subtopics: {
                        "Saving Changes": {
                            content: (
                                <div>
                                    Save your changes to the stash with `git
                                    stash`.
                                </div>
                            ),
                        },
                        "Applying Stashed Changes": {
                            content: (
                                <div>
                                    Apply stashed changes with `git stash
                                    apply`.
                                </div>
                            ),
                        },
                    },
                },
            },
        },
        "Collaborating with Git": {
            description: <div></div>,
            topics: {
                "Pull Requests": {
                    content: (
                        <div>
                            Pull requests (PRs) are used to review and discuss
                            changes before merging them into a main branch.
                        </div>
                    ),
                    subtopics: {
                        "Creating a Pull Request": {
                            content: (
                                <div>
                                    To create a PR, push your branch to the
                                    remote and open the PR from your GitHub
                                    repository.
                                </div>
                            ),
                        },
                        "Reviewing a Pull Request": {
                            content: (
                                <div>
                                    Review changes in the PR, leave comments,
                                    and approve or request changes.
                                </div>
                            ),
                        },
                    },
                },
                "Git Flow": {
                    content: (
                        <div>
                            Git Flow is a branching model that helps manage
                            releases, hotfixes, and features.
                        </div>
                    ),
                    subtopics: {
                        "Develop Branch": {
                            content: (
                                <div>
                                    In Git Flow, the `develop` branch contains
                                    the latest development changes.
                                </div>
                            ),
                        },
                        "Feature Branches": {
                            content: (
                                <div>
                                    Feature branches are used to develop new
                                    features. Merge them back into `develop`
                                    when ready.
                                </div>
                            ),
                        },
                        Hotfixes: {
                            content: (
                                <div>
                                    Use a hotfix branch to quickly fix issues in
                                    the production environment.
                                </div>
                            ),
                        },
                    },
                },
            },
        },
    },
};

const classesData: Data = compileData(classesDataRaw);
export default classesData;
