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
                                simultaneously, you to work efficiently with your projects, helps you track changes and separating feature developments
                            </p>
                        </div>
                    ),
                    subtopics: {
                        "What is Version Control": {
                            content: (
                                <div>
                                    <p>
Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. For the examples in this documents, you will use software source code as the files being version controlled, though in reality you can do this with nearly any type of file on a computer.
                                    </p>
                                </div>
                            ),
                        },
                        "Installing Git": {
                            content: (
                                <div>
                                    <p>
                                        To install Git, download it from the{" "}
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
            shortDescription: (
                <div>
                    <p>
                        Using more intermediate Git features for better project
                        development workflows
                    </p>
                </div>
            ),
            description: (
                <div>
                    <p>
                        This section will introduces more intermediate features
                        such as diffs, branching, and merging branches
                    </p>
                    <p>
                        These features will be useful when you want to develop
                        more features in your projcet, which may requires a lot
                        of tracking which files are for which features.
                    </p>
                </div>
            ),
            topics: {
                "Git Branches": {
                    description: (
                        <div>
                            <p>How to view, make, and use branches in Git</p>
                        </div>
                    ),
                    content: (
                        <div>
                            <p>
                                Git have a feature called branches. A branch are
                                simply chains of commits. You should already
                                have a branch called 'main' or 'master'
                                depending on your Git configuration
                            </p>
                        </div>
                    ),
                    subtopics: {
                        "git branch": {
                            content: (
                                <div>
                                    <p>
                                        The <code>git branch</code> command is
                                        the main method of interacting with git
                                        branches. By default, using{" "}
                                        <code>git branch</code> will list out
                                        the branch that is in your repository.
                                        Flags can be passed into the command to
                                        actions like creating/deleting branches,
                                        more will be discussed below
                                    </p>
                                </div>
                            ),
                        },
                        "Listing Branches": {
                            content: (
                                <div>
                                    <p>
                                        Running <code>git branch</code> without
                                        any flags will list out the branches on
                                        your repository
                                    </p>
                                    <p>For example</p>
                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>git branch</code>
                                        </pre>

                                        <pre>
                                            <code>{`main
* refactor-cpp
  refactor_1`}</code>
                                        </pre>
                                    </div>

                                    <p>
                                        The asterisk indicates what branch you
                                        are currently on, in this example it's
                                        the refactor-cpp branch
                                    </p>
                                </div>
                            ),
                        },
                        "Creating a Branch": {
                            content: (
                                <div>
                                    <p>
                                        Creating a new branch can be done by
                                        doing{" "}
                                        <code>
                                            git branch {"<new_branch_name>"}
                                        </code>
                                    </p>
                                    <p>
                                        This will create a new branch with the
                                        given name, branching out from the
                                        branch you're currently on
                                    </p>
                                    <p>
                                        Note: When creating a branch, you will
                                        not switch to the new branch
                                        automatically
                                    </p>
                                </div>
                            ),
                        },
                        "Switching Branches": {
                            content: (
                                <div>
                                    <p>
                                        Switching to a branch can be done using
                                        the{" "}
                                        <code>
                                            git checkout {"<branch_name>"}
                                        </code>{" "}
                                        command
                                    </p>
                                    <p>
                                        Another way you can switch is the{" "}
                                        <code>git switch {"<branch_name"}</code>{" "}
                                        command
                                    </p>
                                </div>
                            ),
                        },
                        "Merging Branches": {
                            content: (
                                <div>
                                    <p>
                                        When you finish working on a feature in
                                        a branch, you can merge it into another
                                        branch. Typically it's the main or
                                        master branch, but you can merge into
                                        any branch, even from main to other
                                        branches
                                    </p>
                                    <p>
                                        To do so, switch to the branch you want
                                        to merge into, then use the{" "}
                                        <code>git merge {"<branch>"}</code> to
                                        merge
                                    </p>
                                    <p>
                                        For example, if you have 2 branches,
                                        'main' and 'dev', and you want to merge
                                        'dev' into 'main'. You first switch to
                                        'main' branch
                                    </p>

                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>git checkout main</code>
                                        </pre>
                                        <pre>
                                            <code>
                                                Switched to branch 'main'
                                            </code>
                                        </pre>
                                    </div>

                                    <p>
                                        Then you run <code>git merge dev</code>
                                    </p>

                                    <div className="mockup-code">
                                        <pre data-prefix="$">
                                            <code>git merge dev</code>
                                        </pre>
                                        <pre>
                                            <code>{`
Updating dd5a9e9..9face4a
Fast-forward
 file2.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
												`}</code>
                                        </pre>
                                    </div>
                                    <p>
                                        Typically Git will do a fast forward
                                        merge if the branches are simple
                                    </p>
                                </div>
                            ),
                        },
                    },
                },
                "Merging Strategies": {
                    description: (
                        <div>
                            <p>Merging strategies Git uses to merge branches</p>
                        </div>
                    ),
                    content: (
                        <div>
                            <p>
                                When merging branches, Git can employ 2 merging
                                strategies, those are:
                            </p>
                            <ul>
                                <li>Fast forwarding</li>
                                <li>Three-way merge</li>
                            </ul>
                        </div>
                    ),
                    subtopics: {
                        "Fast Forwarding": {
                            content: (
                                <div>
                                    <p>
                                        If the branches being merge are simple,
                                        for example of merging dev into main
                                    </p>
                                    <ul>
                                        <li>{`main: a -> b -> c`}</li>
                                        <li>{`dev: a -> b -> c -> d`}</li>
                                    </ul>
                                    <p>
                                        Git can simply merge 'd' directly into
                                        branch 'main'. This kind of merge will
                                        not cause merge conflits
                                    </p>
                                    <ul>
                                        <li>{`main: a -> b -> c -> d`}</li>
                                        <li>{`dev: a -> b -> c -> d`}</li>
                                    </ul>
                                </div>
                            ),
                        },
                        "Three-way Merge": {
                            content: (
                                <div>
                                    <p>
                                        If the branches diverges from each
                                        other, like for example
                                    </p>
                                    <ul>
                                        <li>{`main: a -> b -> c -> e`}</li>
                                        <li>{`dev: a -> b -> c -> d`}</li>
                                    </ul>
                                    <p>
                                        Git will try it best to merge commit 'd'
                                        with 'e', if Git can merge then no merge
                                        conflicts arise, otherwise Git will
                                        throw a merge conflit and ask you to
                                        decide how to merge the files. After a
                                        three-way merge, a new commit will be
                                        made like so
                                    </p>
                                    <ul>
                                        <li>{`main: a -> b -> c -> e -> f`}</li>
                                        <li>{`dev: a -> b -> c -> d`}</li>
                                    </ul>
                                    <p>
                                        in this example, commit 'f' is the merge
                                        commit of commit 'e' and 'd'
                                    </p>
                                </div>
                            ),
                        },
                    },
                },
                "Git Diff": {
                    description: (
                        <div>
                            <p>
                                How to use git diff to view the changes between
                                2 commits
                            </p>
                        </div>
                    ),
                    content: (
                        <div>
                            <p>
                                Git diff is a tool that you can use to find out
                                changes between 2 commits. This is useful for
                                seeing what file changed, and what lines are
                                changed
                            </p>
                        </div>
                    ),
                    subtopics: {
                        "git diff": {
                            content: (
                                <div>
                                    <p>
                                        To view a diff, use the{" "}
                                        <code>git diff {"<commit>"}</code> to
                                        see changes between the given commit and
                                        the current commit
                                    </p>
                                    <p>
                                        You can also use{" "}
                                        <code>
                                            git diff {"<commit>...<commit>"}
                                        </code>{" "}
                                        to see the diff between 2 arbitary
                                        commits
                                    </p>
                                </div>
                            ),
                        },
                        "What is a diff": {
                            content: (
                                <div>
                                    <p>
                                        A diff typically contains which files
                                        are modified/added, and line
                                        insertions/deletions (a change in an
                                        existing line is 1 insertion and 1
                                        deletion) of each files. A diff may
                                        looks like this for example
                                    </p>
                                    <div className="mockup-code">
                                        <pre>
                                            <code>{`
diff --git a/file1.txt b/file1.txt
index e212970..bddd9e2 100644
--- a/file1.txt
+++ b/file1.txt
@@ -1 +1 @@
-file1
+file1modified
diff --git a/file2.txt b/file2.txt
index 6c493ff..414b334 100644
--- a/file2.txt
+++ b/file2.txt
@@ -1 +1 @@
-file2
+file2modified
diff --git a/file3.txt b/file3.txt
new file mode 100644
index 0000000..7c8ac2f
--- /dev/null
+++ b/file3.txt
@@ -0,0 +1 @@
+file3`}</code>
                                        </pre>
                                    </div>
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
