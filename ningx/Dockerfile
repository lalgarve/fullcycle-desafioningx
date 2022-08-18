FROM nginx:stable

COPY ./nodeapp.conf /etc/nginx/conf.d/
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.disabled

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]