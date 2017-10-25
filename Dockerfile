FROM node:6

RUN npm install -g @storybook/cli

WORKDIR /app
COPY package.json /app/
RUN npm config set registry http://registry.npmjs.org/ && npm install

COPY . /app/

VOLUME /app/node_modules
