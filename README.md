## webpartpipeline

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO

### Bash Commands
ls - Lists all files and folders in the directory

cd (directory name) - Change Directory

mkdir (directory name) - Make New Directory

### Git Commands (run in Bash)

status - Shows you the status of what is happening in your git. Use often!

### Steps to add a new or modified file or files

stage (file name) - Prepares file(s) for commit
stage -A to stage all files
commit -m "type in a good commit message"
commit -A to stage all files
commits (saves) file(s) to your local git repository with a message of what you are comitting
Note: If you run a git status here, you should see a message stating that your branch is ahead of 'origin/master' by 1 commit. This means you have not pushed your file(s) to the remote repository on GitHub.
push - pushes your file(s) to the remote repository on GitHub
Note: If you run a git status now, you should see a message stating that your branch is up to date with 'origin/master'.log - Shows all of your commits, who committed, commit message, what directories it came from on your local git repository, and what directory it went to on your remote GitHub repository. Type q to get out of the log
