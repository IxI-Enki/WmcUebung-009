﻿import { createServer } from 'http';
import chalk from 'chalk';

const server = createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });

  const body = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>wmc learning</title>
          <link rel="stylesheet" href="./indexStyle.css">
          <style>
          *
          {
          font-family: consolas;
          text-align: center;
          }
          body
          {
            background-color: white;
          }
          #header
          {
            font-size: 1.5rem;
            margin-top: -0.5em;
            margin-bottom: 0rem;
            padding-top: 0rem;
            padding-bottom: 0rem;
          }
          hr
          {
            margin-top: 0rem;
            margin-bottom: 0rem;
            padding-top: 0rem;
            padding-bottom: 0rem;
          }
          button
          {
            font-size: 1rem;
            margin-top: 0.1rem;
            margin-bottom: 0rem;
            padding-top: 0rem;
            padding-bottom: 1.2rem;
            border-radius: 0.2rem;
            border: grey 1px solid;
            height: 1rem;
          }
          .buttonL
          {
            box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
            border-radius: 0rem 2rem 2rem 0rem;
            color: white;
            background-color: black;
          }
          .buttonR
          {
            box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.6);
            border-radius: 2rem 0rem 0rem 2rem;
          }
          #lightModeButton
          {
            visibility: hidden;
            font-size: 0.5rem;
            color: white;
          }
          #darkModeButton
          {
            visibility: visible;
            font-size: 0.5rem;
          }
          #trainingsContainer
          {
            margin-top: 0rem;
            margin-left: 0rem;
            margin-top: 1rem;
            width: 100%;
            height: 10rem;
            background-color: #555;
            visibility: visible;
          }
          #container
          {
            display: grid;
            grid-template-columns: 1.5fr 0.5fr;
          }
          #uebungsAusgabe
          {
            text-align: left;
            margin-top: 0.1rem;
            padding-left: 0.2rem;
            font-size: 12px
          }
          #runButton
          {
            font-size: 12px;
            width: 3rem;
            height: 0.8rem;
            margin: 0em;
            padding-top: 0.1em;
          }
          </style>
          <script src="./script.js"></script>
        </head>

        <body>
          <a id="header"><strong>Web Medien Computing</strong></a>
          <hr>
          <span id="darkModeButton">
            swaps to dark-mode
            <button class="buttonR" onclick="startDarkmode()">
              <strong>Darkmode</strong></button>
          </span>
          <span id="lightModeButton">
            <button class="buttonL" onclick="startLightmode()">
              <strong>Lightmode</strong></button>
            swaps to light-mode
          </span>

          <!-- container for the training -->
          <grid id="container">
            <div id="trainingsContainer">
              <p id="uebungsAusgabe">
                const greeting = "Hello Jan"; <br>
                console.log(greeting);
              </p>
            </div>
            <p>
              <button id="runButton" onclick="runCode()"> ▶️Run </button>
            </p>
          </grid>
        </body>
        </html>
        `;
  response.end(body);
});

server.listen(8080, () => {
  console.log(
    chalk.green.underline.bold(`Server is listening`)
    +
    chalk.green(` to `)
    +
    chalk.blueBright.underline(`http://localhost:${server.address().port}`),
  );
});
