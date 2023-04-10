---
modified: 2023-04-09 13:26
modifiedTs: 1680965256641  
created: 2023-04-09 00:47
createdTs: 1680965256641  
layout: MDXLayout  
route: /blog   
slug: postgresql-cheatsheet-admin
ext: .md
title: PostgreSQL Cheatsheet Admin  
summary: Administration shell commands for PostgreSQL  
images: [opera-house.jpg, harbour-bridge.jpg]   
authors: [Jeffrey Barron]
tags: [postgresql, cheatsheet]
aliases: ["References"]
---

---

## Connecting to Postgres

### Configure to Allow Remote Connections (Shell) [^1]

Change postgresql.conf as follows, or choose an IP address for security.  
`$ sudo nano /etc/postgresql/14/main/postgresql.conf`  
![[attachments/Pasted image 20220812100426.png]]

Open `/etc/postgresql/14/main/pg_hba.conf` and replace  
![[attachments/Pasted image 20220812100705.png]]  
with  
![[attachments/Pasted image 20220812100836.png]]  
then run  

``` sh
sudo service postgresql stop
sudo service postgresql start
```

### Logging in Using Postgres User

```shell
ssh -l postgres 192.168.16.152
# or Login as PostgreSQL superuser “postgres” on remote PostgreSQL server using ssh (Linux)
ssh postgres@192.168.16.152

# then Login as PostgreSQL superuser “postgres” (Linux)
root@localhost:~# su - postgres
```

### Open Postgres Terminal

```shell
# Enter PostgreSQL Command Line via “psql” client (psql)
psql
```

---

## Connect to Database [^2]

Connect to a PostgreSQL database “test” as “postgres” user (psql)  

```shell
\c test
You are now connected to database "test" as user "postgres".
```

---

## Check Psql Client Version

Check psql client version (psql)

```shell
psql -V
```

Output:

```
psql (PostgreSQL) 9.6.12
```

---

## Check Postgres Server Version

```shell
select version();
```

Output:

``` output
version                                                  
-----------------------------------------------------------------------------------------------------------
 PostgreSQL 9.6.12 on x86_64-pc-linux-gnu, compiled by gcc (Debian 6.3.0-18+deb9u1) 6.3.0 20170516, 64-bit
(1 row)
```

## Configuration

### Stop / Start Postgresql Service

Stops postgresql service through root user (Linux)

```shell
service postgresql stop
```

Starts postgresql service through root user (Linux)

```shell
service postgresql start
```

Restart postgresql service through root user (Linux)  
__note__: If running from non root user you must prefix your command with “sudo” and non-root user should already be there in sudo list. Also be careful with running these commands because some distributors don’t provide them these days.

```shell
service postgresql restart
```

### Display Configuration Parameters

List all current runtime configuration parameter (psql)

```shell
show all
```

### Display Configuration Parameters Using Sql

List all current runtime configuration parameter using sql with additional details including description (SQL)

```shell
select * from pg_settings;
```

### Show Current Setting from “max_connections

Display current value set for “max_connections” parameter (SQL)

```shell
SELECT current_setting('max_connections');
```

Output:

``` output
max_connections
 current_setting 
-----------------
 100
(1 row)
```

### Show Postgres Config File Location

Show PostgreSQL configuration file location (psql)  
The PostgreSQL configuration files are stored in directory from above command output.  
The main configuration file is called “__postgresql.conf__“.  

```shell
show config_file;
```

Output:

``` output
config_file                
------------------------------------------
 /etc/postgresql/9.6/main/postgresql.conf
(1 row)
```

### Display Contents of Postgres Config File Location

```shell
postgres@localhost:~$ less /etc/postgresql/9.6/main/postgresql.conf
```

Output:

``` ouput
postgresql.conf
. . . .
data_directory = '/var/lib/postgresql/9.6/main'         # use data in another directory
                                        # (change requires restart)
hba_file = '/etc/postgresql/9.6/main/pg_hba.conf'       # host-based authentication file
                                        # (change requires restart)
ident_file = '/etc/postgresql/9.6/main/pg_ident.conf'   # ident configuration file
                                        # (change requires restart)
listen_addresses = '*'                  # what IP address(es) to listen on;
                                        # comma-separated list of addresses;
                                        # defaults to 'localhost'; use '*' for all
                                        # (change requires restart)
port = 5432                             # (change requires restart)
 
. . . .
```

Definitions:  
– `data_directory` directive tells where the database files are stored.  
– `hba_file` directive tells the host based authentication file.  
– `port` directive tells the TCP port number. The default is 5432.

---

## Maintenance

### Garbage Collect (Reclaim Storage)[^2]

Use the vacuum command to reclaim storage from deleted rows in the employee table (SQL)  

1. Table rows that are deleted or obsoleted by an update are not physically removed from their table; they remain present until a VACUUM command is executed. Therefore it’s necessary to do VACUUM periodically, especially on frequently-updated tables.
2. Verbose Prints a detailed vacuum activity report for each table.
3. Analyze update statistics for table

```shell
vacuum(verbose, analyze) employee;
```

Output:

``` output
INFO:  vacuuming "public.employee"
INFO:  scanned index "employee_pkey" to remove 1 row versions
. . .
sample, 1 estimated total rows

```

---

### Gather Statistics

Analyze a table and stores the results in the pg_statistic system catalog (SQL)

1. ANALYZE gathers statistics for the query planner to create the most efficient query execution plans. Accurate statistics assist planner to choose the most appropriate query plan, and thereby improve the speed of query processing.
2. Verbose Prints a detailed analyze activity report for each table.
3. With no table name specified, ANALYZE examines every table in the current database

```shell
analyze verbose employee;
```

Output:

``` output
INFO:  analyzing "public.employee"
INFO:  "employee": scanned 1 of 1 pages, containing 1 live rows and 0 dead rows; 1 rows in sample, 1 estimated total rows
ANALYZE
```

---

## Backup

### Database Backup (With Default options)

Create a backup for a database “mydb” in plain-text SQL Script file (mydb.bak.sql) (pg_dump)

```shell
$ pg_dump mydb > mydb.bak.sql
```

### Database Backup (With Customised options)

// Creates a backup for a database “mydb” in plain text format with drop & create database commands included in output file mydb.bak.sql (pg_dump)

Backup options:  
– `-c`: Output commands to clean(drop) database objects prior to writing commands to create them  
– `-C`: Begin output with “CREATE DATABASE” command itself and reconnect to created database – `-F`: Format of the output (value p means plain SQL output and value c means custom archive format suitable for pg_restore) – `-f`: Backup output file name

```shell
$ pg_dump -c -C -F p -f mydb.bak.sql mydb
```

### Remote Backup

Running pg_dump on client computer to back up data on a remote postgres server  
note: Use the -h flag to specify the IP address of your remote Host and -p to identify the port on which PostgreSQL is listening:

```shell
$ pg_dump -h <remote_host> -p <port> -U <user> -f mydb.bak mydb 
```

### All Databases Backup

Backup of all databases along with database roles and cluster wide information.

```shell
$ pg_dumpall > alldb.bak.sql
```

---

## Restore

### Restore from Backup File

Restore database plain-text backup generated by pg_dump or pg_dumpall with psql utility

```shell
$ psql -U username -f filename.sql
```

### Restore from Custom Archive Backup File

Restore database custom archive backup using pg_restore utility

```shell
$ pg_restore -d db_name /path/to/your/file/db_name.bak -c -U db_user
```

---

## Monitoring

### Session Monitor

Monitors Postgres sessions (SQL)  

- Few important parameters to know
- Pid - Backend Process ID
- Datname - Database Name
- Usename - User running the query
- Application_name - Client Application Name
- State - State of Session (e.g. Active, Waiting, Idle ..)
- Query - Query executed

```shell
SELECT 
    pid
    ,datname
    ,usename
    ,application_name
    ,client_hostname
    ,state
    ,client_port
    ,backend_start
    ,query_start
    ,query  
FROM pg_stat_activity
```

### Cancel Running Query

To cancel a running query with pid provided. This is useful in case of killing long running queries  

```shell
SELECT pg_cancel_backend(pid);
```

### Biggest Postgres Table/Indexes by Their Sizes

Top 20 Big tables/Indexes (Excluding catalog tables)  

```shell
SELECT
  nspname || '.' || relname AS "Object Name", relkind As "Object Type",
  pg_size_pretty(pg_relation_size(C.oid)) AS "size"
FROM pg_class C
LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
WHERE nspname NOT IN ('pg_catalog', 'information_schema')
ORDER BY pg_relation_size(C.oid) DESC
LIMIT 20;
```

---

## Indexes

### Create a New Index on a Table

Create a new index on the emp_name column of employee table

This index specifies “btree” as the index method and uses “asc” to store the index key column data in ascending order

```shell
create index idx_employee_emp_name on employee using btree (emp_name asc);
```

---

### View Indexes of a Table

List indexes of a table along with table definition

```shell
\d employee
postgres=# \d employee;
```

Output:

``` output
   Column   |         Type          |                         Modifiers                         
------------+-----------------------+-----------------------------------------------------------
 emp_id     | integer               | not null default nextval('employee_emp_id_seq'::regclass)
 emp_name   | character varying(50) | not null
 emp_salary | numeric(9,2)          | not null
Indexes:
    "employee_pkey" PRIMARY KEY, btree (emp_id)
    "idx_employee_emp_name" btree (emp_name)
```

### List All Indexes

List all indexes from all tables

```shell
\di
```

Output:

``` ouput
                      List of relations
 Schema |         Name          | Type  |  Owner   |  Table   
--------+-----------------------+-------+----------+----------
 public | employee_pkey         | index | postgres | employee
 public | idx_employee_emp_name | index | postgres | employee
(2 rows)
```

### Drop Index from a Table

Drop an existing index from a table (SQL)

```shell
drop index idx_employee_emp_name;
```

<br /><hr />

[^1]: [postgrescheatsheet.com](https://postgrescheatsheet.com)

[^2]: [Postgresql Docs, SQL Vacuum](https://www.postgresql.org/docs/current/sql-vacuum.html)
