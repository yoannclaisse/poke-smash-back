FROM mysql:latest

ADD init.sql /docker-entrypoint-initdb.d