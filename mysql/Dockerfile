FROM mysql
COPY main.sql /docker-entrypoint-initdb.d
ADD ./conf.d/my.cnf /etc/mysql/conf.d
RUN chmod 644 /etc/mysql/conf.d/my.cnf