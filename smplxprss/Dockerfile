FROM node:16.13.1-slim
WORKDIR /app
ADD *.j* /app
RUN npm install --only=production
EXPOSE 3000
CMD npm start
