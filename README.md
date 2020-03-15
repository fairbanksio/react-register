
### Summary
![react-register](https://raw.githubusercontent.com/Fairbanks-io/react-register/develop/imgs/react-register-sm.png)

[![Build Status](https://travis-ci.org/Fairbanks-io/react-register.svg?branch=develop)](https://travis-ci.org/Fairbanks-io/react-register)

A Material UI based dashboard built on React


### Live demo
- https://fairbanks-io.github.io/react-register

### Installation

##### Manual Deployment (Ubuntu 18.04)
1. Install dependencies
```bash
sudo apt-get install nodejs git
```
2. Install Yarn
```bash
npm install -g yarn
```
3. Clone the repository
```bash
git clone https://github.com/Fairbanks-io/react-register/
```
4. Change into react-register directory
```bash
cd react-register
```
5. Install module dependencies
```bash
npm install
```
6. Run the start script
```bash
npm start
```
7. Navigate to http://host:3000/react-register

#### Docker compose
1. Install docker compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
2. Clone Repository and cd into it
```bash
git clone https://github.com/Fairbanks-io/react-register/
cd react-register
```
3. Run docker-compose
```bash
docker-compose up -d
```
4. Open in browser
Navigate to https://localhost:3000/
*Customize the default port in docker-compose file*

 
### Site modification and configuration
1. Check if **src/variables/SiteData.jsx** exists
	- If it exists, modify this file as necessary.
	- If the file does not exist, **copy SiteData.jsx-sample** to **SiteData.jsx**

2. Make all modifications as necessary to SiteData.jsx

3. Add assets like images to ./public/ directory
    - *You may need to occasionally restart the server after adding files to this directory*


### Build and deploy a production ready version
1. Build a new docker image with the contents of directory
```bash
docker build -t DOCKER-USERNAME-HERE/YOUR-DESIRED-IMAGE-NAME .
```
2. login to docker
```bash
docker login
```
3. Publish image to docker
```bash
docker push DOCKER-USERNAME-HERE/YOUR-DESIRED-IMAGE-NAME
```
4. Deploy/run production docker container
```
docker run -d -p 3000:8888 --name react-register DOCKER-USERNAME-HERE/YOUR-DESIRED-IMAGE-NAME
```