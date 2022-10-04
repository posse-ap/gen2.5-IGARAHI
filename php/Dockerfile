FROM php:7-fpm
COPY php.ini /usr/local/etc/php/
RUN apt-get update \
&& docker-php-ext-install pdo_mysql
COPY php.ini /usr/local/etc/php/
WORKDIR /var/www/html


