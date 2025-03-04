# Get Going with Git!

This is a quick course to start using version control with git. 

### _What is version control?_

Version control, also known as revision control, is a software program that allows us to track distributed changes to data, or code, over time. Git is one example of a version control implementation. Changes are "distributed" when they come from many different sources. For instance, if a team of developers is all making changes to the same code base. Or, if you have several editors making changes to a blog post before it's published. Or, many branches of evolution that represent changes to a single original genome. Version control doesn't need to be used for code, but that's probably why you're here! 

We will use version control to save snapshots of our code as we make changes over time, then "revert" or rewind back to an older version of the code, "merge" an updated version into our copy, "push" our changes to a "master" copy and do much more. 

Let's get set up to travel through time and alternative versions of reality via version control! 🚀

### 1. Getting Started

First, create an account on github! This site! ^ :octocat:

_PSA: You don't need to use your school username_

_**Now open up your terminal! - Any commands that follow will be run in Terminal unless otherwise specified 🤠**_

#### Install Git
1. Check if you have `git` installed on your machine by typing `git help` in your Terminal. If you get a `"Command not found"` error, complete steps (2) and (3) below:
2. Install homebrew, a package manager for Mac OS [brew.sh](brew.sh)
3. Install git: `brew install git` in Terminal
#### Set up SSH Keys
1. Move into default SSH directory: `cd ~/.ssh`
2. Generate a public/private key pair: `ssh-keygen`
3. Hit "enter" to save the key in the default file
4. Hit "enter" again to skip using a passphrase
5. Copy the public key to your clipboard: `pbcopy < id_rsa.pub`
6. Go to your Github profile in the browser (avatar in top right) > Settings, then SSH and GPG Keys on the left
7. Click the green button "New SSH Key" and paste your key. Name it anything!
#### Connect local code to a remote repository
1. Use `cd` to navigate to the directory that you want to store your code in. (I like to have a `~/Development` folder, for example)
2. Download this code repository using `git clone git@github.com:morgansierrasnyder/git-going.git` or `git clone [repository address]` if you want to clone a different repo
3. Use `cd git-going` to navigate into the directory that now contains the repository
4. The code is now on your computer (local!) - open the project in your [code editor](https://code.visualstudio.com/download)
#### Publish your local code changes
1. Make changes to the code (in your code editor). Don't forget to Save! Now in Terminal...
2. Stage your changes to be published: `git add .`
3. Commit your changes locally: `git commit -m "this is a description of my changes"`
4. Publish your changes remotely (to the internet): `git push`

You're now ready to make new versions of this code!

(_Or lack there of... It's so empty in here that I think I saw a tumbleweed blow by 🌪️🌵_)

_**Hold up 🛑: Group demo: Basic git commands**_

### 2. Contributing

Review the basic git commands on the cheatsheet.
There are many more resources on the internet that go into deeper explanations of each command, but here are a few solid ones:
- [Bitbucket: basic git commands](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)
- [10 git commands every developer should know](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/)

1. Create a new markdown file (file extension `.md`). You can make a copy of this one.
2. Commit your file: `git add <your-file>` and `git commit -m "replace this with a message that describes your file!"`
3. Push your changes to the remote repository (this one here, on the internet!): `git push`

### 3. Collaborating

_**Get into a group of four! 🔢**_

1. Decide in your group on one file from this repository to edit
2. Each person should edit the file locally
3. Each person should push their changes to the remote repository

_What happened?_
#### Conflicts! ⚔️

Learn about different strategies for resolving conflicts here: [Resolving a merge conflict using the command line](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)

We'll talk about the difference between `git merge` and `git rebase`, which will help us avoid messy conflicts in the future!

## Now git going!

Pick a directory that's already on your computer, and version control it!

I like using the [Github desktop app](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop) for this, but you can also use `git init` in the command line.
