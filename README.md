# University Research Opportunity Portal

A full-stack web application that allows users to browse, create, update, and manage university research opportunities. The project provides a centralized platform for organizing research opportunities, including their departments, research areas, application deadlines, required skills, availability, and application status.

## Features

- Browse all research opportunities as cards
- Search by title, faculty name or required skill
- Filter by research area
- View full details of an opportunity in a slide-in drawer
- Create a new opportunity
- Edit an existing opportunity (including changing its status between Open and Closed)
- Delete an opportunity, with a confirmation dialog
- REST API tested with Postman (collection included in this repository)

## Tech stack

| Layer       | Technology                                             |
| ----------- | ------------------------------------------------------ |
| Frontend    | React 19, Vite, Tailwind CSS 4, Motion (Framer Motion) |
| Backend     | FastAPI, SQLAlchemy, Pydantic                          |
| Database    | MySQL (via PyMySQL)                                    |
| API testing | Postman                                                |

## Project structure

```
university-research-opportunity-portal/
├── backend/                 # FastAPI backend
|   ├── .venv/
│   ├── app/
│   │   ├── main.py          # FastAPI app entry point
│   │   ├── models.py        # SQLAlchemy models
│   │   ├── schemas.py       # Pydantic schemas
│   │   └── database.py      # Database connection and session
│   ├── requirements.txt     # Python dependencies
│   └── .env.example         # Example environment variables
├── frontend/                # React frontend
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── components/      # React components
│   │   ├── pages/           # React pages
│   │   └── services/        # API service
│   ├── package.json         # Node.js dependencies
│   └── vite.config.js       # Vite configuration
|   └── tailwind.config.js    # Tailwind CSS configuration
├── postman/                 # Postman collection for API testing
├── README.md                # This file
└── .gitignore               # Git ignore file
```

## Prerequisites

Install these before you start:

- **Python 3.10 or newer** (check with `python --version`)
- **Node.js 20.19 or newer** and npm (check with `node --version`)
- **MySQL 8** running locally, with a user that can create tables
- **Git**

## Setup and running

Run the backend and the frontend in two separate terminals. Start with the backend.

### 1. Clone the repository

```bash
git clone https://github.com/raheel-436/university-research-opportunity-portal.git
cd university-research-opportunity-portal
```

### 2. Create the database

Open a MySQL client (MySQL Workbench, or the `mysql` command line) and run:

```sql
CREATE DATABASE research_portal;
```

You can use a different name, as long as it matches your `.env` file in the next step.

### 3. Set up the backend

```bash
cd backend
```

Create and activate a virtual environment.

**Windows (PowerShell):**

```powershell
python -m venv venv
.\.venv\Scripts\Activate.ps1
```

If PowerShell blocks the script, run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` first, or use Command Prompt and run `venv\Scripts\activate.bat`.

**macOS / Linux:**

```bash
python3 -m venv venv
source venv/bin/activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

Create your environment file by copying the template:

**Windows:** `copy .env.example .env`
**macOS / Linux:** `cp .env.example .env`

Then open `backend/.env` and set your database connection:

```env
DATABASE_URL=mysql+pymysql://YOUR_USER:YOUR_PASSWORD@localhost:3306/research_portal
```

Replace `YOUR_USER`, `YOUR_PASSWORD` and the database name with your own. If your password contains special characters such as `@` or `#`, URL-encode them (for example `@` becomes `%40`).

Start the backend from inside the `backend` folder:

```bash
fastapi dev app/main.py
```

The API is now running at **http://127.0.0.1:8000**. Open **http://127.0.0.1:8000/docs** to see the interactive API documentation (Swagger UI).

### 4. Set up the frontend

Open a **second terminal**, from the project root:

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173** in your browser. The frontend expects the backend at `http://127.0.0.1:8000/api`. This address is set in `frontend/src/services/api.js`.

The database starts empty. Add your first opportunities with the **Create** button in the app, or through the API (see below).

## API endpoints

Base URL: `http://127.0.0.1:8000/api`

| Method   | Endpoint              | Description                             | Success       | Errors                        |
| -------- | --------------------- | --------------------------------------- | ------------- | ----------------------------- |
| `POST`   | `/opportunities`      | Create an opportunity                   | `201 Created` | `422` invalid or missing data |
| `GET`    | `/opportunities`      | Get all opportunities                   | `200 OK`      |                               |
| `GET`    | `/opportunities/{id}` | Get one opportunity                     | `200 OK`      | `404` not found               |
| `PUT`    | `/opportunities/{id}` | Update an opportunity (send all fields) | `200 OK`      | `404`, `422`                  |
| `DELETE` | `/opportunities/{id}` | Delete an opportunity                   | `200 OK`      | `404` not found               |

### Opportunity fields

```json
{
  "research_title": "AI in Healthcare Diagnostics",
  "research_description": "Applying machine learning to medical imaging.",
  "research_area": "Artificial Intelligence",
  "faculty_name": "Dr. Ahmed Khan",
  "department": "Computer Science",
  "required_skills": "Python, Machine Learning",
  "available_positions": 3,
  "application_deadline": "2026-12-20",
  "status": "Open"
}
```

- `application_deadline` must be a date in `YYYY-MM-DD` format.
- `available_positions` must be a whole number.
- `status` defaults to `"Open"`. The app uses `"Open"` and `"Closed"`.

## API testing with Postman

The Postman collection is in the `postman/` folder of this repository. It contains 10 requests, in this order:

1. Create three opportunities (requests 01 to 03)
2. Retrieve all opportunities (04)
3. Retrieve one opportunity by ID (05)
4. Update an existing opportunity (06)
5. Change an opportunity's status from Open to Closed (07)
6. Delete an opportunity (08)
7. Request the deleted opportunity again and receive `404 Not Found` (09)
8. Send invalid data and receive a `422` validation error (10)

Each request has tests that check the response. To run them:

1. Start the backend (see above).
2. Open the repository folder in Postman, or import the collection from `postman/`.
3. Check that the collection variable `base_url` is `http://127.0.0.1:8000/api`.
4. Run the collection in order with the **Run** button. The ID of the created opportunity is saved automatically and reused by the later requests.

Running the collection creates new opportunities in your database each time.
The postman Collection is exported in JSON format, so you can also import it. its in the folder `postman/specs` of this repository.

## Troubleshooting

| Problem                                   | Fix                                                                                                                                           |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `fastapi: command not found`              | Activate the virtual environment, then run `pip install -r requirements.txt` again.                                                           |
| `Can't connect to MySQL server`           | Make sure MySQL is running and that `DATABASE_URL` in `backend/.env` has the correct user, password, port and database name.                  |
| `Access denied for user`                  | Check the username and password in `DATABASE_URL`.                                                                                            |
| `Unknown database`                        | Create the database first (step 2).                                                                                                           |
| The page loads but shows no opportunities | Check that the backend is running on port 8000 and that `http://127.0.0.1:8000/api/opportunities` returns JSON.                               |
| `Address already in use`                  | Another program is using the port. Stop it, or start the backend with `--port 8001` and update the address in `frontend/src/services/api.js`. |
| Postman says "Could not send request"     | The backend is not running, or `base_url` is wrong.                                                                                           |
