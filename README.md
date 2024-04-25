# JetEditor

This is a simple Markdown editor built using react with react-markdown package. It provides a user-friendly interface with two main sections: the editor and the preview.

## Features

- **Editor Section :** Write your Markdown content in a clean and straightforward editor.
- **Preview Section :** Instantly see the rendered Markdown output in the preview section.
- **Copy Button :** Instantly copy the Markdown input in the Editor Section.
- **Light/Dark Mode :** Off course Dark mode is a must have for any editor though i included a light mode to save battery in the morning 😊.

## Getting Started

### You can directly use the app via this [link](https://bharathajjarapu.github.io/JetEditor) .

### Or Deploy it yourself by

1. Clone this repository to your local machine.
2. Navigate to the project directory using the command line.
3. Run `npm install` to install the required dependencies.
4. Execute `npm start` to launch the development server.
5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the React Markdown Editor.

## Usage

1. Enter your Markdown content in the editor section on the left.
2. Witness the live preview of your Markdown-rendered content on the right.

Feel free to send a pull request if you happen to find errors.

## Packages Used

- react
- gh-pages
- react-scripts
- react-markdown

## Deployment

1. Add Homepage to `package.json`

```
+ "homepage": "https://gitname.github.io/react-gh-pages",
```

2. change the `package.json` scripts
```
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
At this point, the React app's package.json file includes deployment scripts.
```
3. Deploy
```
npm run deploy
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy Markdown editing!
