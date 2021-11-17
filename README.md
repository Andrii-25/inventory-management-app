# Inventory management app

## How to install

### Using Git

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/Andrii-25/inventory-management-app.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install

cd frontend
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project and frontend directory.
2.  Create new files by copying and pasting the file and then renaming them to just `.env`

    ```bash
    cp .env.example .env
    ```
3.  The files `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the files to your environment.


### Running migration

Run migration to create database schema.

```bash
cd myproject
npx sequelize db:migrate
```


## How to run

### Running Node Express API server locally

```bash
cd myproject
npm start
```

You will know server is running by checking the output of the command `npm start`

```bash
App is running...
```

### Running React app locally

```bash
cd frontend
npm start
```

**Note:** `DATABASE_URL` will be your Postgres connection string. `REACT_APP_BASE_URL` will be your API server URL.