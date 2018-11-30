const mongoose = require('mongoose');
const { MONGO_URL } = require('../config/keys');
const Instructions = require('../models/Instructions');

// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true });
var instructions = [
    {
        "tag": "installation",
        "label": "install git",
        "nuggets":
            [
                { "text": "Install git on macOS with Homebrew", "code": "brew install git" },
                { "text": "Install git on Debian-based linux", "code": "sudo apt-get install git" },
                { "text": "Install git on Windows with Chocolatey", "code": "choco install git" }
            ]
    },
    {
        "tag": "configuration",
        "label": "configuration",
        "nuggets":
            [
                { "text": "Sets the name you want attached to your commit transaction", "code": "git config --global user.name [name]" },
                { "text": "Sets the email you want atached to your commit transactions", "code": "git config --global user.email [email address]" },
                { "text": "Enables helpful colorization of command line output", "code": "git config --global color.ui auto" }
            ]
    },
    {
        "tag": "repos",
        "label": "Create Repositories",
        "nuggets":
            [
                { "text": "Creates a new local repository with the specified name", "code": "git init [project-name]" },
                { "text": "Downloads a project and its entire version history", "code": "git clone [url]" }
            ]
    },
    {
        "tag": "changes",
        "label": "Common git workflow",
        "nuggets":
            [
                { "text": "Lists all new or modified files to be commited", "code": "git status" },
                { "text": "Shows file differences not yet staged", "code": "git diff" },
                { "text": "Add the specified file to the staging area", "code": "git add [file]" },
                { "text": "Show file differences between staging and the last file version", "code": "git diff --staged" },
                { "text": "Unstage the file, but preserve its conents", "code": "git reset [file]" },
                { "text": "Records staged snapshots in version history", "code": "git commit -m [descriptive message]" }
            ]
    },
    {
        "tag": "branches",
        "label": "Dealing with branches",
        "nuggets":
            [
                { "text": "List all local branches in the current repository", "code": "git branch" },
                { "text": "Creates a branch", "code": "git branch [branch-name]" },
                { "text": "Merge the specified branch's history into the current branch", "code": "git merge [branch-name]" },
                { "text": "Switches to the specified branch", "code": "git checkout [branch-name]" },
                { "text": "Creates a branch and switches to it", "code": "git checkout -b [branch-name]" },
                { "text": "Renames a branch", "code": "git checkout -m [new-branch-name]" },
                { "text": "Deletes the specified branch locally", "code": "git branch -d [branch-name]" }
            ]
    },
    {
        "tag": "files",
        "label": "Moving and removing files",
        "nuggets":
            [
                { "text": "Deletes the file from the working directory and stages the deletion", "code": "git rm [file]" },
                { "text": "Removes the file from version control but preserves the file locally", "code": "git rm --cached [file]" },
                { "text": "Renames the file", "code": "git mv [from] [to]" }
            ]
    },
    {
        "tag": "stashing",
        "label": "Stashing",
        "nuggets":
            [
                { "text": "Temporarily stores all modified tracked files", "code": "git stash" },
                { "text": "Restores the most last stashed files and deletes the shashed change set", "code": "git stash pop" },
                { "text": "List all stashed change sets", "code": "git stash list" },
                { "text": "Deletes the last stashed change sets", "code": "git stash drop" }
            ]
    },
    {
        "tag": "history",
        "label": "History and Diff",
        "nuggets":
            [
                { "text": "Lists version history for the current branch", "code": "git log" },
                { "text": "Lists version history for a file, including renames", "code": "git log --follow [file]" },
                { "text": "Shows content differences between two branches", "code": "git diff [first-name]...[second-branch]" },
                { "text": "Shows changes of the specified commit", "code": "git show [commit]" }
            ]
    },
    {
        "tag": "reset",
        "label": "Cancel and redo stuff",
        "nuggets":
            [
                { "text": "Undoes all commits after [commit], preserving changes locally", "code": "git reset [commit]" },
                { "text": "Discards all history and changes back to the specified commit", "code": "git reset --hard [commit]" },
                { "text": "Discards all local changes in the working directory", "code": "git reset --hard HEAD" },
                { "text": "Shows changes of the specified commit", "code": "git show [commit]" },
                { "text": "Change the commit message", "code": "git commit --amend" }
            ]
    },
    {
        "tag": "remotes",
        "label": "Synchronization and remote repositories",
        "nuggets":
            [
                { "text": "Pushes all local change sets to the remote repository", "code": "git push [alias] [branch]" },
                { "text": "Downloads new remote history and incorporates changes", "code": "git reset pull" },
                { "text": "Shows the name of remote repositories", "code": "git remote -v" },
                { "text": "Get the latest changes from the origin but not merge", "code": "git fetch" },
                { "text": "Removes the remote repository", "code": "git remote rm [remote repo name]" }
            ]
    },
    {
        "tag": "tagging",
        "label": "All about tagging",
        "nuggets":
            [
                { "text": "Lists tags", "code": "git tag" },
                { "text": "Lists tags with specified pattern", "code": "git tag -l [pattern]" },
                { "text": "Create annotated tag", "code": "git tag -a [version] -m [message]" },
                { "text": "Create a lightweight tag", "code": "git tag [version]" },
                { "text": "Tagging a commit", "code": "git tag -a [version] [commit]" },
                { "text": "Sharing a tag", "code": "git push [alias] [version]" },
                { "text": "Checkout tags", "code": "git checkout [version]" }


            ]
    }

]
function onInsert(err, docs) {
    if (err) {
        console.error(err);
    } else {
        console.info('%d instructions were successfully stored.', docs.length);
    }
}



mongoose.connection
    .on('open', () => {
        console.info('Database connected!');
        Instructions.collection.deleteMany({});
        Instructions.collection.insertMany(instructions, onInsert);
    })
    .on('error', err => console.info('Create a database and put the link into config/index.js/MONGO_URL'));