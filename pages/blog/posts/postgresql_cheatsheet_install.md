# Install PostgreSQL on ubuntu

https://blog.logrocket.com/setting-up-a-remote-postgres-database-server-on-ubuntu-18-04/

```sh
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update -y
sudo apt-get -y install postgresql postgresql-client postgresql-contrib
sudo apt show postgresql
sudo systemctl status postgresql.service
sudo passwd postgres
sudo su -l postgres
```

References

- https://blog.logrocket.com/setting-up-a-remote-postgres-database-server-on-ubuntu-18-04/
-

# Manage PostgreSQL from the cli

https://www.a2hosting.com/kb/developer-corner/postgresql/managing-postgresql-databases-and-users-from-the-command-line

TL;DR; version

```sh
sudo -u postgres psql
postgres=# create database mydb;
postgres=# create user myuser with encrypted password 'mypass';
postgres=# grant all privileges on database mydb to myuser;
```

One nice thing about PGSQL is it comes with some utility binaries like **createuser** and **createdb.** So we will be making use of that.

As the default configuration of Postgres is, a user called **_postgres_** is made on and the user **_postgres_** has full superadmin access to entire PostgreSQL instance running on your OS.

`$ sudo -u postgres psql`

The above command gets you the psql command line interface in full admin mode.

In the following commands, keep in mind the < angular brackets > are to denote variables you have to set yourself. In the actual command, omit the `<>`

## Creating user

`$ sudo -u postgres createuser <username>`

## Creating Database

`$ sudo -u postgres createdb <dbname>`

## Giving the user a password

```
$ sudo -u postgres psql
psql=# alter user <username> with encrypted password '<password>';
```

## Granting privileges on database

`psql=# grant all privileges on database <dbname> to <username> ;`

And yeah, that should be pretty much it !

# Doing purely via psql

Your OS might not have the `createuser` or `createdb` binaries, or you may, for some reason want to do it purely via psql, then these are the three magic commands —

```SQL
CREATE DATABASE yourdbname;
CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';
GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser;
```
