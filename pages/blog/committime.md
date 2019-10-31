---
title: "Committime"
slug: "committime"
date: "2019-08-07T03:33:41.571Z"
description: "Ever wanted to quickly change the commit or author date of an unsigned git commit? Worried recruiters will discover your late-night code obsession? Look no further."
---

**Altering git commit times is generally a poor idea and is certainly not a best practice.**
**The ideas herein help understand the internals of git; please do not use them for any serious matter.**

_Note: This tool will not work with cryptographically signed commits._
_See [this stackoverflow answer](https://softwareengineering.stackexchange.com/a/212216) for a brief overview of why signing commits is important._

## What

Git's best and worst features involve changing history.
Anyone can change _commit_ history.
It's good to be aware of git's internals.

Each commit has an associated author date and committer date.
A regular `git log` only shows the author date.
To see both a commit's author date and committer date:

```sh
git log --pretty=fuller
```

resulting in something like

```sh
commit 293a1b884253f9efbc77b2d19d312b28874f523c
Author:     Jack Fletcher <jdfletch97@gmail.com>
AuthorDate: Thu Aug 22 14:45:46 2019 -0500
Commit:     Jack Fletcher <jdfletch97@gmail.com>
CommitDate: Thu Aug 22 14:45:46 2019 -0500

    Add real blog posts

```

Git allows these dates to be changed by rewriting history.
**Do not use this on public commits (i.e., ones that have already been pushed to a repository) unless you're working solo and have the `--force`**.

## Why

Changing an unsigned git commit's author date or committer date may be seen as a bit questionable.
That's because it is.
As stated earlier, I would not recommend using these techniques for any serious matter.

## How

To change the author date of last commit:

```sh
git commit --amend --no-edit --date "$date"
```

To change the committer date of last commit:

```sh
GIT_COMMITTER_DATE="$date" git commit --amend --no-edit
```

These methods can be combined with a `git rebase -i` and marking the commit to change with `edit` to change an arbitrary commit:

```sh
git rebase -i HEAD~3
# change pick to edit in rebase screen
# insert above command to change date
git rebase --continue
```

Checkout the [git book](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#_changing_multiple) for more `git rebase` information.

## CLI

I created [`committime`] just to see what is possible for a low-effort program:

![usage]

`committime` shows the user a list of latest commits.
Once a commit is selected, `committime` shows the possible formats of date entry.
Additionally, the user can conveniently specify that the author date and committer date should match.
After entering the date(s) for the commit, `committime` does the heavy lifting.

Behind the scenes, `committime` is running a `git filter-branch` operation to change the environment variables `GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE` for the chosen commit.
`git filter-branch` information can be found in the [git docs](https://git-scm.com/docs/git-filter-branch) or [book](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#_the_nuclear_option_filter_branch).

## Open source code

`committime` is a hobby project and free to use, modify, and even sell within the bounds of the liberal MIT license.
You'll find the most recent version at https://github.com/jackfletch/committime.

[`committime`]: https://github.com/jackfletch/committime
[usage]: /static/media/committime/example.png
