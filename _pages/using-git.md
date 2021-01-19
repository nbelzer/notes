---
layout: topic
title: "Using Git"
subtitle: My experiences with Git and some tips & tricks.
author: nbelzer
tags: []
last_modified: 2020-08-04
---

The ability to use version control properly is a skill every software developer needs. Personally I have only used [Git](https://git-scm.com). 

## Getting Started

There are some great resources available on the web to get started with Git:
- [Scott Hanselman -- Git 101 Basics](https://www.youtube.com/watch?v=WBg9mlpzEYU&list=WL&index=3&t=0s) (YouTube) -- Great introduction IMO.
- [How to write a git commit message](https://chris.beams.io/posts/git-commit/#imperative) -- How to write proper commit messages.
- [Pro Git book](https://git-scm.com/book/en/v2) -- For both beginners and advanced users.

## Interfacing with git
By default you can interface with Git through the command line, which is how I started out using Git. I learned that there are several visual interfaces available but they never allowed me to do what I wanted as quickly as I could using the cli (with some exceptions). This might have been a result of learning to use the cli first though. 

If you are interested in a visual interface for git take a look at your preferred editor as it might already have some sort of interface for Version Control. If it doesn't take a look [here](https://git-scm.com/downloads/guis/) for a list of GUI's.

![Magit open for this repository](/assets/img/magit-screenshot.png)

Since the beginning of this year (2020) I've started using [Emacs](http://www.gnu.org/software/emacs/) which allows you to install an awesome package named [Magit](https://magit.vc). This package allowed me to use git:
- faster (through keybindings), 
- without the need to remember commands or their parameters, and 
- more intuitively by visualising the changes.

If you are using Emacs I highly recommend you to check this package out.

## Tips & Tricks

### User Configuration

After installing git you should always perform these steps to properly configure the tool.

```bash
# Set your identity
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

# Set your preferred editor
git config --globar core.editor emacs

# Review your settings
git config --list
```

### Ignoring files globally.

MacOS stores custom attributes for a folder inside it through a `.DS_Store` file. This includes personal attributes and therefore does not need to be shared in most git projects. As this is OS specific I include it in my global `.gitignore` instead of placing it in every `.gitignore` for each project.

```bash
# Setup your global .gitignore
touch ~/.gitignore

# Make sure we ignore any .DS_Store file in our git projects.
# This can also be done using your editor of choice.
echo '.DS_Store' >> ~/.gitignore

# Tell git about your global .gitignore file.
git config --global core.excludesfile '~/.gitignore'
```







