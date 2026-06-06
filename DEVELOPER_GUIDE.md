# Developer Guide

Follow these steps from the project folder:

```powershell
cd "C:\Users\sachin\OneDrive\Desktop\New folder (4)\flaskp"
```

## Final Folder Structure

```text
flaskp/
  backend/
    .dockerignore
    app.py
    Dockerfile
    requirements.txt
  frontend/
    .dockerignore
    app.js
    Dockerfile
    package.json
    package-lock.json
    public/
      styles.css
    views/
      index.ejs
  .gitignore
  DEVELOPER_GUIDE.md
  README.md
  docker-compose.yml
```

## 1. Check Project Files

```powershell
dir
dir backend
dir frontend
```

## 2. Run Project With Docker Compose

Use this command:

```powershell
docker-compose up --build
```

Then open:

```text
http://localhost:3000
```

The backend API will run here:

```text
http://localhost:5000
```

To stop the running project, press `Ctrl + C`, then run:

```powershell
docker-compose down
```

## 3. Remove Unwanted Files From Git Tracking

The `venv` folder should not be uploaded to GitHub. Run:

```powershell
git rm --cached -r venv
```

If Git says the file is not tracked, that is fine. Continue to the next step.

## 4. Check Git Status

```powershell
git status
```

You should see project files like `backend`, `frontend`, `docker-compose.yml`, `.gitignore`, and documentation files.

## 5. Add And Commit Code

```powershell
git add .
git commit -m "Set up Flask backend and Node frontend with Docker"
```

## 6. Push Code To GitHub

```powershell
git push origin main
```

Your GitHub repository:

```text
https://github.com/Toto3107/flaskp
```

## 7. Build Docker Images

Replace `Toto3107` only if your Docker Hub username is different.

```powershell
docker build -t Toto3107/flaskp-backend:latest ./backend
docker build -t Toto3107/flaskp-frontend:latest ./frontend
```

## 8. Login To Docker Hub

```powershell
docker login
```

Enter your Docker Hub username and password or access token.

## 9. Push Docker Images

```powershell
docker push Toto3107/flaskp-backend:latest
docker push Toto3107/flaskp-frontend:latest
```

## 10. Screenshots For Submission

Take screenshots of:

```text
docker-compose up --build
```

The browser page:

```text
http://localhost:3000
```

The successful form submission result.

The GitHub repository after pushing code.

Docker Hub showing both uploaded images.

## Common Problems

If `docker compose` does not work, use:

```powershell
docker-compose up --build
```

If PowerShell blocks `npm`, use:

```powershell
npm.cmd install
```

If Git gives `index.lock` permission errors, close VS Code, Git Bash, and other terminals, pause OneDrive sync for a few minutes, then run the Git commands again.
