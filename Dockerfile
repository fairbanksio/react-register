FROM alpine

MAINTAINER Brandon Sorgdrager <Brandon.Sorgdrager@gmail.com>, Jon Fairbanks <Jon@Fairbanks.io>

# Install dependencies
RUN apk update && apk upgrade \
  && apk add git \
  && apk add nodejs-current-npm \
  && npm install -g yarn

# Create user
RUN adduser -h /react-register -s /bin/bash -S react-register
USER  react-register
WORKDIR /react-register

# Clone the repo and build it
RUN git clone https://github.com/Fairbanks-io/react-register . ; yarn install; yarn build

# Clone ExpressHTTP and install it
RUN mkdir server; cd server; git clone https://github.com/jonfairbanks/ExpressHTTP . ; yarn install

# Copy build files to the web server's public directory
RUN cp -a build/. server/public/

WORKDIR /react-register/server
EXPOSE 3000
RUN ["chmod", "+x", "/react-register/docker-entrypoint.sh"]
ENTRYPOINT ["../docker-entrypoint.sh"]
CMD ["yarn", "start" ]
