FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install -g yarn --force
RUN yarn
CMD ["yarn", "dev"]
