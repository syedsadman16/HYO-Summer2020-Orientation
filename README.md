# Hack Your Own Summer 2020 Orientation Project
## Team Scorpius

# BUILDING

## Requirements
- [Node version 12.18.0](https://nodejs.org/en/)
   - If you're on Unix/macOS/WSL, consider using [nvm](https://github.com/nvm-sh/nvm#about) to install instead.

## Setup

1. Hit the *Fork* button in the top right corner to fork the repository to your GitHub.

2. Clone the resulting repository.
```
git clone git@github.com:<your GitHub username>/HYO-Summer2020-Orientation.git
```

If you don't [have SSH keys set up](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) with your GitHub, you can also use
```
git clone https://github.com/<your GitHub username>/HYO-Summer2020-Orientation
```

3. Enter the cloned repository and install dependencies.
```
cd HYO-Summer2020-Orientation
npm install
```

4. Start a development server to see your changes rendered live as you make them.
```
nodemon app.js
```

5. View the rendered content at [http://localhost:1337](http://localhost:1337). 
