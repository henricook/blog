---
title: "My favourite git aliases"
description: "I take these git aliases from project to project with me, here they are in case they’re good for you too! They’re purposefully short, as anyone who works with git regularly on the command line and…"
date: "2016-02-26T16:30:19.525Z"
categories: 
  - Git
  - Meteor

published: true
canonicalLink: https://medium.com/@henricook/my-favourite-git-aliases-ad6f2b9928f5
---

I take these git aliases from project to project with me, here they are in case they’re good for you too!

They’re purposefully short, as anyone who works with git regularly on the command line and likes shortcuts may have noticed, it’s a lot of keystrokes day-to-day.

```
alias st=’git status’
alias cim=’git commit -m $@’
alias cia=’git commit — amend’
alias baseo=’git fetch origin && git rebase origin/master’
alias co=’git checkout $@’
alias lg=’git log — color — graph’
alias gd=’git diff’
alias gds=’git diff — staged’
alias bl=”git branch -l”
alias deletemerged=”for i in `git branch — merged`; do git branch -d $i; done”
```