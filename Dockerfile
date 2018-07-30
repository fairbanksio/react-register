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

# Clone repo and install modules
RUN git clone https://github.com/Fairbanks-io/react-register . ; yarn install; yarn build
RUN mkdir http; cd http; git clone https://github.com/jonfairbanks/ExpressHTTP .

RUN cp ../build/* http/public


EXPOSE 3000
CMD ["yarn", "start" ]
