FROM node:12-slim as base
ENV NODE_ENV=production
EXPOSE 3000
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json ./

FROM base as dev
ENV NODE_ENV=development
CMD ["npm", "start"]

FROM base as source
RUN npm i && npm cache clean --force > "/dev/null" 2>&1
COPY --chown=node:node . .

FROM source as build
RUN npm run build

FROM jonfairbanks/expresshttp:latest
COPY --from=build /app/build /usr/src/app/public
EXPOSE 8888
CMD ["yarn", "start" ]
