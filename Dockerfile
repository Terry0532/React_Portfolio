# Build react client
FROM node:current

# Working directory be app
WORKDIR /app

COPY package.json /app

ENV PATH /app/node_modules/.bin:$PATH

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . /app

# EXPOSE 3000

CMD ["npm","start"]

# # stage1 - build react app first 
# FROM node:current as build
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY ./package.json /app/
# RUN npm install --silent
# COPY . /app
# RUN npm run build

# # stage 2 - build the final image and copy the react build files
# FROM nginx:latest
# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]