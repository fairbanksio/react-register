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

# Download the web server and copy build files to public directory
RUN git clone https://github.com/jonfairbanks/ExpressHTTP . ; yarn install

# Clone repo and install modules
RUN mkdir tmp; cd tmp; git clone https://github.com/Fairbanks-io/react-register . ; yarn install; yarn build

# Download the web server and copy build files to public directory
RUN cp -a tmp/build/. public/

EXPOSE 3000
CMD ["yarn", "start" ]
