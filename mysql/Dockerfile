FROM mysql:latest

COPY --chown=mysql:mysql ./inicializa.sql  /docker-entrypoint-initdb.d/

ENTRYPOINT ["docker-entrypoint.sh"]
EXPOSE 3306 33060
CMD ["mysqld"]