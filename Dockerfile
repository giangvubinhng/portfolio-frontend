FROM node:latest
WORKDIR /client
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
  then yarn install; \
  else yarn install --production; \
  fi
COPY . ./
EXPOSE 3000
CMD ["yarn", "run", "start"]

