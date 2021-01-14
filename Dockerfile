FROM node:14.13.1
WORKDIR /burger-app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /burger-app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
