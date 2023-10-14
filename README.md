# tvpt2023_demo
A demo web-game where you have to guess the number, made with React.js framework. 

This demo is made for Information and Communications Technology qualification.

<br>

## Requirements 
- [Node.js](https://nodejs.org/en/download) or [Docker](https://www.docker.com/products/docker-desktop/)
- Git (optional) 
- Internet browser

<br>

## Running the app with Docker:

- Either git clone or download and extract the repository Zip 
- Open up a terminal (or powershell / cmd in windows) in the project root folder 
- Execute these commands: 
```
docker build -t demo-react-game .
docker run -p 3000:3000 demo-react-game
```
- Open up your browser and navigate to http://localhost:3000/

<br>

## Running the app with Node: 

- Do the same steps, except execute these commands:
```
npm install 
npm start 
```
- Open up your browser and navigate to http://localhost:3000/ (should open automatically)

<br>




## Running the app with Visual Studio: 

- Make sure either Docker or Node.js is successfully installed on your system
- Open up Visual Studio, or go to File -> Start window
- Select 'Clone a repository'
<details>
  <summary>[preview]</summary>
  
  ![screenshot](https://i.gyazo.com/689e135ab688100dc5921a96d48922a4.png)
</details>

- Input repository location: https://github.com/solita-staskila/tvpt2023_demo
- Click 'Clone'
<details>
  <summary>[preview]</summary>
  
  ![screenshot](https://i.gyazo.com/b83fb74274d371d4ef7ab752d484e613.png)
</details>

- Open up a terminal (View -> Terminal)
<details>
  <summary>[preview]</summary>
  
  ![screenshot](https://i.gyazo.com/e29ed3a8e263e52d22f27dc5bad6ab05.png)
</details>

- Make sure your terminal is in the project root folder, if not, execute this command to navigate:
```
cd tvpt2023_demo
```
<details>
  <summary>[preview]</summary>
  
  ![screenshot](https://i.gyazo.com/2983801649f268845d749ec680706b5d.png)
</details>

You can now run the app with Node or Docker.
To run with docker, execute these commands:  
```
docker build -t demo-react-game .
docker run -p 3000:3000 demo-react-game
```
To run the app with Node, execute:
```
npm install 
npm start 
```
- Finally open up your browser and navigate to http://localhost:3000/

<br>



## Screenshots:

<details>
  <summary>Index</summary>
  
  ![screenshot](https://i.gyazo.com/2d3304ecfe29a345f27cf177c92ce738.png)
</details>

<details>
  <summary>Index</summary>
  
  ![screenshot](https://i.gyazo.com/2c6dd72337eb5a86d688fad3c0fd46a8.png)
</details>
