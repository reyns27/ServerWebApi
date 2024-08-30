# Suggested code may be subject to a license. Learn more: ~LicenseLog:141305804.
FROM node:18.20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

EXPOSE 8000

CMD ["npm", "start"]

