
### Summary
![react-register](https://raw.githubusercontent.com/Fairbanks-io/react-register/develop/imgs/react-register-sm.png)

[![Build Status](https://travis-ci.org/Fairbanks-io/react-register.svg?branch=develop)](https://travis-ci.org/Fairbanks-io/react-register)

A Material UI based dashboard built on React


### Live demo
- https://fairbanks-io.github.io/react-register

### Installation

##### Docker Deployment
1. Launch the docker image
```bash
docker run -d -p 3000:3000 --name react-register fairbanksio/react-register
```
2. Open http://hostname:3000/react-register in a browser.

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
yarn install
```
6. Run the start script
```bash
yarn start
```
7. Navigate to http://host:3000/react-register

### Site modification and configuration
1. Check if **src/variables/SiteData.jsx** exists
	- If it exists, modify this file as necessary.
	- If the file does not exist, **copy SiteData.jsx-sample** to **SiteData.jsx**

2. Make all modifications as necessary to SiteData.jsx


### Build and deploy a production ready version
1. For serving a `build` version of this application, checkout [ExpressHTTP](https://github.com/jonfairbanks/ExpressHTTP)
