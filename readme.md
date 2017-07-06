# Javascripting Homework Repository

This repository is for CCIS BSCS 4-2 '17-'18 only, and will only be specific for the Javascripting Lessons. Committing any other files that are not related to the course or the lessons will have certain repercussions to the whole section so be warned.

## How to Submit Your Homework

### Clone this repository

If you're using GitHub for Windows (the desktop app), once you enter your credentials to it, it should automatically detect your personal and organizational repositories. You can just use that to clone it.

If you're more of a terminal (command-prompt) person and you downloaded [GitBash](https://git-for-windows.github.io/), you can just clone the repository by typing the command `git clone git@github.com:PUP-CCIS/bscs422017-javascripting.git`. This would clone the repository to your current working directory (where your command-prompt is currently pointed before you execute the command).

If you encounter an authorization error while cloning, it means you do not have the proper credentials to to clone this repo. To fix this, you need to generate your own SSH key. For GitHub for Windows users, this is automatically done for you upon login afaik. For Git for Windows (Git Bash or Git GUI), you can generate your SSH keys when you open Git GUI and then click Help on the menu bar. Copy your SSH key and then go to GitHub, click on your profile at the top right of your screen, click on Settings, go to SSH and GPG tab, then add your SSH key there.

### Pull updates

Chances are that you'll not be the first one to pass your homework. If so, you should pull any updates from the remote repository before proceeding. To do this, look for the "Pull" button, or if you're using the command-prompt, inside the repository directory, issue a `git pull` command.

### Create a personal subfolder

After cloning and updating, create a subfolder inside the javascripting directory you just cloned. The subfolder should be named with your last name, and it should contain all the files you created for the javascripting lesson.

### Committing your work to your local copy of the repository

After creating a subfolder and copying the files that you need to submit in it, commit your work. If you're using GitHub for Windows, the commit button should be on the lower left portion of the app. It also shows all the files that you'll be committing to the repository.

### Pushing your work to the remote repository

Before pushing your work, do another `pull` to update your local repository copy since people may have pushed changes before you. There should be no merge conflicts since you'll all be working on your own subfolders. If, for some instance you encounter a merge conflict, contact your professor to assist for now (I'll teach you guys how to resolve conflicts later on).

After updating your code, you may now "Push" your work. Look for the Push button, or if you're using the command line, in the repository directory, issue a `git push` command.

After pushing your code, confirm that it's uploaded to GitHub by going to the [repository](https://github.com/PUP-CCIS/bscs422017-javascripting) and check if your subfolder is there.

## Frequently Asked Questions (F.A.Q)

*Q: I'm having problems with cloning the repository. What should I do?*
A: First of, check if you're a member of the GitHub organization [PUP-CCIS](https://github.com/PUP-CCIS). If you're not a member of the organization, check your e-mail first for any invitation because your professor is 98% sure he sent out an invitation to each and everyone of you. If you're sure you don't have an invitation, send me a message thru Schoology.

Lastly check if you have your SSH keys configured properly. If not, check this [guide](https://help.github.com/articles/connecting-to-github-with-ssh/) on how to setup your SSH keys so you can seamlessly connect to GitHub.

## Other questions?

Contact your professor thru Schoology if you have any questions.

Good luck.