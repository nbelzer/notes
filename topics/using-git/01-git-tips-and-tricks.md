---
title: Git Tips & Tricks
author: nbelzer
layout: subpage
icon: "fad fa-book-spells"
main: "topics/_posts/2020-08-04-using-git.md"
---

This page contains a collection of small tips & tricks based on situations I encountered.


# User Configuration

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

# Ignoring files globally.

MacOS stores custom attributes for a folder inside it through a `.DS_Store` file. This includes personal attributes and therefore does not need to be shared in most git projects. As this is OS specific I include it in my global `.gitignore` instead of placing it in every `.gitignore` for each project.

```bash
# Setup your global .gitignore
touch ~/.gitignore

# Make sure we ignore any .DS_Store file in our git projects.
# This can also be done using your editor of choice.
echo '**/.DS_Store' >> ~/.gitignore

# Tell git about your global .gitignore file.
git config --global core.excludesfile '~/.gitignore'
```
