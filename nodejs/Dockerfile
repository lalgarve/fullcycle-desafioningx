FROM node:latest

RUN apt-get update && apt-get install default-mysql-client-core -y

EXPOSE 3000

VOLUME /app

WORKDIR /app

ENTRYPOINT ["docker-entrypoint.sh"]

CMD [ "app.js" ]