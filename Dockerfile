FROM node:slim
WORKDIR /app
ADD ./app /app
RUN npm install --only=production
EXPOSE 3000
CMD npm start
