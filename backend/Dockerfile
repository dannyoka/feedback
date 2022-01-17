FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
ENV PORT=5000
ENV MONGODB_URI=mongodb://localhost:27017/surveys
COPY . .
CMD ["npm", "run" ,"start"]