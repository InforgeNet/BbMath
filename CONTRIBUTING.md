# Contributing to BbMath

## First setup

1. You need [XenForo 2.x](https://xenforo.com/). You can setup a Scotch Box
   environment as described in the [Xenforo 2.x Development
   Documentation](https://xenforo.com/xf2-docs/dev/scotchbox/)
2. Fork BbMath
3. Move in the `src/addon/` folder of your development enviroment and `mkdir Inforge && cd Inforge`
4. `git clone https://github.com/<your-username>/BbMath && cd BbMath`
5. `git remote add upstream https://github.com/InforgeNet/BbMath`

## Pull request

Each time you want to submit a pull request, do the following:

1. Download latest upstream modifications: `git fetch upstream`
2. Ceate a new branch: `git checkout -b whatever-you-want-feature upstream/master`
3. Make you changes, add them and commit
4. `git push -u origin whatever-you-want-feature`
5. Visit `https://github.com/<your-username>/BbMath` and create a new pull request

### Commit message

Follow these guidelines to write a proper commit message: [How to Write a Git
Commit Message](https://chris.beams.io/posts/git-commit/).

### Code style

General guidelines:

* Indent code with a **single tab**
* Avoid brackets when they are not necessary
* Try to keep lines under 80 columns, assuming a tab width equal to 8 spaces
  (yes!)
* Follow the [XenForo 2.x](https://xenforo.com/xf2-docs/dev/) code style
  conventions
* In general, I like the [Linux Kernel Coding
  Style](https://www.kernel.org/doc/html/latest/process/coding-style.html) and
  try to adapt it to PHP, JS and every other C-like language
* Check out the code already in the repository and try to follow the same style
* Use common sense
