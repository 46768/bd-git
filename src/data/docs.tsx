import { compileData, Data, DataConstructor } from "@/lib/dataUtils";
import Link from "next/link";

const docsDataRaw: DataConstructor = {
    name: "Documentations",
    description: (
        <div>
            This section serves as documentations for the lessons without the
            IDE. This will be more extensive than the lessons, and provides more
            examples
        </div>
    ),
    sections: {
        "Git Basics": {
            shortDescription: (
                <div>
                    <p>
                        The basics of using Git. Covering how to use Git to
                        version control your project
                    </p>
                </div>
            ),
            description: (
                <div>
                    <p>
                        This section focuses on how to use Git to version
                        control your project, as well as to get familar with Git
                        terminologies
                    </p>
                </div>
            ),
            topics: {
                "Introduction to Git": {
                    description: (
                        <div>
                            <p>What is Git and why is Git useful</p>
                        </div>
                    ),
                    content: (
                        <div>
                            <p>
                                Git is a distributed version control system. It
                                allows multiple developers to work on a project
                                simultaneously
                            </p>
                        </div>
                    ),
                    subtopics: {
                        "What is Version Control?": {
                            content: (
                                <div>
                                    <p>
                                        Version control is the management of
                                        changes to code, keeping track of every
                                        modification and allowing you to revert
                                        to previous versions
                                    </p>
                                </div>
                            ),
                        },
                        "Installing Git": {
                            content: (
                                <div>
                                    <p>
                                        To install Git, download it from the
                                        <Link href="https://git-scm.com/download">
                                            official website
                                        </Link>{" "}
                                        and follow the installation instructions
                                        for your operating system
                                    </p>
                                </div>
                            ),
                        },
                    },
                },
                "Git Terminologies": {
                    description: (
                        <div>
                            <p>
                                The terminologies that will be used across this
                                documentations
                            </p>
                        </div>
                    ),
                    content: (
                        <div>
                            <p>
                                There are many Git features with their own
                                terminologies. For this section, I've some of
                                the importants terminologies that will be used
                                in this section
                            </p>
                        </div>
                    ),
                    subtopics: {
                        Commit: {
                            content: (
                                <div>
                                    <p>
                                        Commits are a snapshots of your project.
                                        Commits are typically made when you want
                                        to save a state of your project for
                                        rolling back to a previous working
                                        state, tracking versions of your
                                        project, etc... In more advanced Git
                                        workflows, commits are used for
                                        automating tasks like deploying your
                                        code to production for example
                                    </p>
                                </div>
                            ),
                        },
                        Branch: {
                            content: (
                                <div>
                                    <p>
                                        A branch in Git is a connection of
                                        commits, representing a timeline of
                                        changes or commits. Branches can be used
                                        to separate works of different features,
                                        and eventually merge into another
                                        branch, which is usually the main branch
                                        or the parent branch
                                    </p>
                                </div>
                            ),
                        },
                        "Working Directory": {
                            content: (
                                <div>
                                    <p>
                                        The working directory is where the files
                                        you view and edit are stored in. Any
                                        files that are not tracked by Git in the
                                        repository are considered "Untracked",
                                        while files that are in the repository
                                        but modified or have their content
                                        changed are considered "Modified", the
                                        rest are "Unmodified"
                                    </p>
                                </div>
                            ),
                        },
                        "Staging Area": {
                            content: (
                                <div>
                                    <p>
                                        When you modify files or add new files
                                        to the working directory, they will be
                                        either "Untracked" or "Modified". These
                                        files need to be added to the staging
                                        area before commiting them. The staging
                                        area allows you to decide which files
                                        should be commited to the repository,
                                        rather than having every untracked and
                                        modified files in the working directory
                                        be commited
                                    </p>
                                </div>
                            ),
                        },
                        Repository: {
                            content: (
                                <div>
                                    <p>
                                        The repository is where Git stores
                                        commits, branches, and other data and
                                        configurations. Repository can be clone,
                                        which allows for multiple people to work
                                        on a project.
                                    </p>
                                </div>
                            ),
                        },
                    },
                },
                "Git Configuration": {
                    description: (
                        <div>
                            <p>
                                The basic Git configurations necessary for using
                                Git
                            </p>
                        </div>
                    ),
                    content: (
                        <div>
                            <p>
                                Git can be configured to modify its beheavior
                                like how branches are named, how files are
                                handled, which algorithms to use in more advance
                                features
                            </p>
                            <p>
                                Configuring Git can be done via the{" "}
                                <code>git config</code> command
                            </p>
                        </div>
                    ),
                    subtopics: {
                        "Setting Up Username and Email": {
                            content: (
                                <div>
                                    <p>
                                        Before using Git, Git have to know who
                                        you are. The configuration for this is{" "}
                                        <code>user.name</code> and{" "}
                                        <code>user.email</code> for the username
                                        and email respectively. They are used
                                        when you commits to the repository to
                                        show who made the commit
                                    </p>
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
                        "Configuration Levels": {
                            content: (
                                <div>
                                    <p>
                                        There are multiple types of
                                        configuration levels for Git, ranging
                                        from system-wide to repository-wide
                                        configuration
                                    </p>
                                    <p>The levels are:</p>
                                    <ul>
                                        <li>
                                            System (<code>--system</code>) -
                                            System-wide Git configurations.
                                            Applied to every user in the
                                            computer
                                        </li>
                                        <li>
                                            Global (<code>--global</code>) -
                                            User-wide configurations. Only
                                            applied to the user that configured
                                            Git
                                        </li>
                                        <li>
                                            Local (<code>--local</code> default)
                                            - Repository-wide configuration.
                                            Only applied to the repository that
                                            is configured
                                        </li>
                                    </ul>
                                </div>
                            ),
                        },
                        "Other Configurations": {
                            content: <div></div>,
                        },
                    },
                },
                "Basic Git Commands": {
                    description: (
                        <div>
                            <p>
                                Basic Git commands used in version controlling
                            </p>
                        </div>
                    ),
                    content: (
                        <div>
                            <p>
                                Git commands are the main way to interact with
                                Git. Git have many commands for specific
                                purposes, many of which is out of the scope for
                                this section, so I picked the one you might
                                wanted to know to start using Git to version
                                control
                            </p>
                            <p>
                                These are the basic commands you'll need to get
                                started with Git
                            </p>
                        </div>
                    ),
                    subtopics: {
                        "git init": {
                            content: (
                                <div>
                                    <p>
                                        Initializes a new empty Git repository
                                        in the current folder
                                    </p>
                                    <p>
                                        Usage: <code>git init</code>
                                    </p>
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>git init</code>
                                        </pre>
                                        <pre data-prefix=">">
                                            <code>
                                                Initialized empty Git repository
                                                in /path/to/repo/.git
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            ),
                        },
                        "git add": {
                            content: (
                                <div>
                                    <p>
                                        Adds changes to the staging area to be
                                        committed.
                                    </p>
                                    <p>
                                        Usage: <code>git add {"<file>"}</code>
                                    </p>
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>git add .</code>
                                        </pre>
                                    </div>
                                </div>
                            ),
                        },
                        "git commit": {
                            content: (
                                <div>
                                    <p>
                                        Commit changes to the repository. If no
                                        commit message are specified by{" "}
                                        <code>-m</code> flag, Git will opens an
                                        editor for you to put a commit message
                                    </p>
                                    <p>
                                        Usage:{" "}
                                        <code>git commit [-m {"<msg>"}]</code>
                                    </p>
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>
                                                git commit -m "commit message"
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            ),
                        },
                        "git status": {
                            content: (
                                <div>
                                    <p>
                                        Shows the status of changes in the
                                        working directory.{" "}
                                    </p>
                                    <p>
                                        Usage: <code>git status</code>
                                    </p>

                                    <p>
                                        Example: File modified/added without{" "}
                                        <code>git add</code>
                                    </p>
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>git status</code>
                                        </pre>
                                        <pre data-prefix=">">
                                            {`On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   file1.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        file3.txt

no changes added to commit (use "git add" and/or "git commit -a")`}
                                        </pre>
                                    </div>

                                    <p>
                                        Example: File modified/added with{" "}
                                        <code>git add</code>
                                    </p>
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>git status</code>
                                        </pre>
                                        <pre data-prefix=">">
                                            {`On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   file1.txt
        new file:   file3.txt`}
                                        </pre>
                                    </div>
                                </div>
                            ),
                        },
                    },
                },
                "Checking Commit History": {
                    description: (
                        <div>
                            <p>
                                How to view and restore previous versions of
                                your project
                            </p>
                        </div>
                    ),
                    content: (
                        <div>
                            <p>
                                When you make commits or branches, Git tracks
                                them in the repoitory. These commits can be
                                viewed and restored
                            </p>
                        </div>
                    ),
                    subtopics: {
                        "git log": {
                            content: (
                                <div>
                                    <p>
                                        Displays the commit history in the
                                        current branch. By default Git will use
                                        an external program called a pager to
                                        allows you to scroll the commit within
                                        your terminals (indicated by the{" "}
                                        <code>:</code> at the bottom)
                                    </p>

                                    <p>
                                        Usage: <code>git log</code>
                                    </p>
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>git log</code>
                                        </pre>

                                        <pre data-prefix=">">
                                            <code>{`commit 445d5c82dc68b82a1f96a612954d2a57de205ed5 (HEAD -> main, upstream/main)
Author: 46768 <rothcu621@protonmail.com>
Date:   Sun Aug 31 11:33:57 2025 +0700

    feat: add disk partitioning to installer

commit 7900dba19ddda120f4e16982a24ef817db777184
Author: 46768 <rothcu621@protonmail.com>
Date:   Sun Aug 31 11:20:50 2025 +0700

    fix: hardcode system type into installer

commit b7e227429648864c7e2f79a915aedebafe213231
Author: 46768 <rothcu621@protonmail.com>
Date:   Sun Aug 31 11:17:35 2025 +0700

    feat: add listing target system configs

commit e7b41de21d673a6a5343c36786dd628ad6fc9aba
Author: 46768 <rothcu621@protonmail.com>
Date:   Sun Aug 31 11:14:03 2025 +0700

    feat: add git cloning server configurations

commit b860c0bcbefbcfbf065d4e30862a8413df1cada5
Author: 46768 <rothcu621@protonmail.com>
Date:   Sun Aug 31 10:30:46 2025 +0700
:`}</code>
                                        </pre>
                                    </div>
                                </div>
                            ),
                        },
                        "git checkout": {
                            content: (
                                <div>
                                    <p>
                                        The checkout command lets you check out
                                        commits or branches. Most of the time we
                                        use checkout on branches, but you can
                                        also checkout specific commits. This is
                                        useful if you wanted to check out a
                                        previous version of your project
                                    </p>

                                    <p>
                                        Usage:{" "}
                                        <code>
                                            git checkout{" "}
                                            {"<commit_hash|branch_name>"}
                                        </code>{" "}
                                        (Note: commit_hash can be the first 5 or
                                        more letters of the full hash. ex
                                        "445d5c82dc68b82a1f96a612954d2a57de205ed5"{" "}
                                        {"->"} "445d5")
                                    </p>

                                    <p>Example: Checking out a branch</p>
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>
                                                git checkout refactor-cpp
                                            </code>
                                        </pre>

                                        <pre data-prefix=">">
                                            <code>
                                                Switched to branch
                                                'refactor-cpp'
                                            </code>
                                        </pre>
                                    </div>

                                    <p>Example: Checking out a commit</p>
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>git checkout b860c0</code>
                                        </pre>

                                        <pre data-prefix=">">
                                            <code>
                                                {`Note: switching to 'b860c0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at b860c0b feat: add 3 sec sleep before rebooting`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            ),
                        },
                    },
                },
                "Git Specific Files": {
                    description: (
                        <div>
                            <p>
                                Files used by Git for per-project configuration
                            </p>
                        </div>
                    ),
                    content: (
                        <div>
                            <p>
                                Certains files are used by Git to modify how Git
                                works within each project
                            </p>
                            <p>
                                These files can be used to ignore files (like
                                secrets that you don't want to be put into the
                                repository) and tells git how to work with files
                                (This is on a lower level on how files are
                                written, so you don't have to worry much about
                                it)
                            </p>
                        </div>
                    ),
                    subtopics: {
                        ".gitignore File": {
                            content: (
                                <div>
                                    <p>
                                        <code>.gitignore</code> Files are used
                                        to ignore specific files or folders from
                                        a project
                                    </p>
                                    <p>
                                        The files you usually wants to ignore
                                        are
                                    </p>
                                    <ul>
                                        <li>Log files</li>
                                        <li>Environment secrets</li>
                                        <li>Temporary files</li>
                                        <li>
                                            Project builds (for compiled
                                            language projects like C/C++)
                                        </li>
                                    </ul>

                                    <p>
                                        An example of how a .gitignore file
                                        might look like is:
                                    </p>
                                    <div className="mockup-code">
                                        <pre>
                                            {`# CMake target
build/

# Clang cache
.cache/

# Data files
data/

# Doxygen documentation
html/
latex/`}
                                        </pre>
                                    </div>

                                    <p>
                                        There are rules when writing a
                                        .gitignore file. Those being:
                                    </p>
                                    <ul>
                                        <li>
                                            Each line not starting with{" "}
                                            <code>#</code> are patterns for
                                            .gitignore
                                        </li>
                                        <li>
                                            An empty line does not match with
                                            anything. Can be used as a separator
                                            for readability
                                        </li>
                                        <li>
                                            A pattern can match both files and
                                            folders. Use <code>/</code> at the
                                            end to only match folders
                                        </li>
                                        <li>
                                            An asterisk <code>*</code> can be
                                            used as a wildcard
                                        </li>
                                        <li>
                                            A <code>!</code> prefix can be used
                                            as negation
                                        </li>
                                    </ul>
                                </div>
                            ),
                        },
                        ".gitattributes": {
                            content: (
                                <div>
                                    <p>
                                        .gitattributes is a file that tells Git
                                        what to do with specific files or
                                        folders. In the file, each line are in
                                        the form of
                                    </p>
                                    <code>
                                        pattern attr1 [attr2] [attr3] ...
                                    </code>

                                    <p>
                                        The <code>pattern</code> follows the
                                        same rules at <code>.gitignore</code>{" "}
                                        patterns but with a few exceptions:
                                    </p>
                                    <ul>
                                        <li>
                                            No <code>!</code> prefix
                                        </li>
                                        <li>
                                            folder patterns like{" "}
                                            <code>bar/</code> will not match
                                            against the files in them, use{" "}
                                            <code>bar/**</code> instead
                                        </li>
                                    </ul>

                                    <p>
                                        Attributes are listed{" "}
                                        <Link href="https://git-scm.com/docs/gitattributes#_effects">
                                            here
                                        </Link>
                                    </p>
                                </div>
                            ),
                        },
                    },
                },
            },
        },
        "Git Intermediates": {
            shortDescription: <div></div>,
            description: <div></div>,
            topics: {
                "Branching in Git": {
                    description: <div></div>,
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
                    description: <div></div>,
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
            shortDescription: <div></div>,
            description: <div></div>,
            topics: {
                Rebasing: {
                    description: <div></div>,
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
                    description: <div></div>,
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
            shortDescription: <div></div>,
            description: <div></div>,
            topics: {
                "Pull Requests": {
                    description: <div></div>,
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
                    description: <div></div>,
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

const docsData: Data = compileData(docsDataRaw);
export default docsData;
