# Committime

> Note: Sign your git commits!

## What

Git's best and worst features involve changing history.
Anyone can change _commit_ history.
It's good to be aware of how to do so.

Each commit has an associated author date and committer date.
A regular `git log` only shows the author date.
To see both a commit's author date and committer date:

```sh
git log --pretty=fuller
```

Git allows these dates to be changed by rewriting history.
_Do not use this on a public commits you've already pushed to a repository_ (unless you're working solo and have the `--force`).

## Why

Changing an unsigned git commit's author date or committer date may be seen as a bit questionable.
However, there are scenarios where it may be desirable, and doing so may represent a more accurate git history.

Suppose you worked all day on a feature but didn't get a chance to clean-up and commit until the next day.
Or you go on vacation and don't get around to it until the next week.
One might argue that you should indicate your committer date as the correct day of work.
Realistically it doesn't matter; but if it is somewhat trivial to change, a git log could serve as a clear history of when the project was worked on.

As I try to keep a clean git history, I find it particularly useful on personal projects.

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

To ease this operation, I created [`committime`]:

![usage]

`committime` shows the user a list of latest commits.
Once a commit is selected, `committime` shows the possible formats of date entry.
Additionally, the user can conveniently specify that the author date and committer date should match.
After entering the date(s) for the commit, `committime` does the heavy lifting.

Behind the scenes, `committime` is running a `git filter-branch` operation to change the environment variables `GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE` for the chosen commit. `git filter-branch` information can be found in the [git docs](https://git-scm.com/docs/git-filter-branch) or [book](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#_the_nuclear_option_filter_branch).

## Open source code

`committime` is a hobby project and free to use, modify, and even sell within the bounds of the liberal MIT license. You'll find the most recent version at https://github.com/jackfletch/committime.

[`committime`]: https://github.com/jackfletch/committime
[usage]: /static/media/committime/example.png
