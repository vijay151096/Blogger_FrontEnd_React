# Getting Started with Create React App

Goto [DockerHub](hub.docker.com)

## Docker Image Name

vijaykumar151096/blogger_frontend

### Steps to Run Application With Docker

The Application Will be Hosted in PORT : 3000

* Pull the Images from docker hub
    * `docker pull vijaykumar151096/blogger_frontend`
* Run the Docker using Below Command
    * `docker run -d -p 9005:9005 --name blogger_frontend vijaykumar151096/blogger_frontend`
* To Stop
    * `docker stop blogger_frontend`
* To Start
    * `docker start blogger_frontend`

### Steps to Run Application Without Docker

The Application Will be Hosted in PORT : 3000

* Goto Terminal
* Type the Following Command to start the application
    * `npm start`
    

