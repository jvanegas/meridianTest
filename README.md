# Meridian Test

## Requirements

You need the following tools to run this project:

  * Node.js >= 16.x.x
  * PostgreSQL >= 14.x
  * Docker > 19.x.x

## Database (PostgreSQL)
This projects works with a PostgreSQL database. If you have one alreasy installed on your system, you can set the configuration in the `./` file to get connected. **You need to create manually a database called `meridian`**.

If you do not have PostgreSQL installed, you can run the command `./` to create a container with the database and with an admin tool. Go to `http://localhost:5050` to access `PgAdmin4`. The user is `admin@admin.com` and the password is `admin`. To connect to the database, use:

```
host: postgres
port: 5432
user: postgres
password: postgres
```

**NOTE**: if you are going to use another tool (like DBeaver) and want to connect to the database container, use host: `127.0.0.1` or `localhost`, and port `50432`.