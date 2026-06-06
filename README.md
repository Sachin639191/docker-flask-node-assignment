# Flask + Node.js Docker Assignment

This project contains a Node.js Express frontend and a Flask backend. The frontend displays a student form and sends the submitted data to the Flask API.

## Folder Structure

```text
flaskp/
  backend/
    app.py
    requirements.txt
    Dockerfile
  frontend/
    app.js
    package.json
    package-lock.json
    Dockerfile
    views/
      index.ejs
    public/
      styles.css
  docker-compose.yml
  .gitignore
```

## Run With Docker Compose

```bash
docker-compose up --build
```

Open the frontend at:

```text
http://localhost:3000
```

The Flask backend runs at:

```text
http://localhost:5000
```

## Build Images Manually

Replace `your-dockerhub-username` with your Docker Hub username.

```bash
docker build -t your-dockerhub-username/flaskp-backend:latest ./backend
docker build -t your-dockerhub-username/flaskp-frontend:latest ./frontend
```

## Push Images To Docker Hub

```bash
docker login
docker push your-dockerhub-username/flaskp-backend:latest
docker push your-dockerhub-username/flaskp-frontend:latest
```

## Push Code To GitHub

```bash
git add .
git commit -m "Set up Flask backend and Node frontend with Docker"
git push origin main
```

Repository link:

```text
https://github.com/Toto3107/flaskp
```
