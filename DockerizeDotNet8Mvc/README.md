# 🚀 DockerizeDotNet8Mvc

This is a simple **ASP.NET Core 8 MVC application** that has been fully **containerized using Docker**.

The project demonstrates how to build, package, and run a .NET web application inside a Docker container using a multi-stage build.

---

## 📌 Project Overview

This project shows how to:

- Create an ASP.NET Core MVC application
- Dockerize the application using a multi-stage Dockerfile
- Handle runtime and build environments properly
- Solve common Docker issues (ports, images, containers)
- Run the application inside an isolated container

---

## 🐳 Docker Concepts Used

- Multi-stage build
- .NET SDK vs ASP.NET Runtime images
- Container port mapping
- Image tagging
- Container lifecycle management

---

## 📁 Project Structure

```

DockerizeDotNet8Mvc/
│
├── Controllers/
├── Models/
├── Views/
├── wwwroot/
├── Dockerfile
├── Program.cs
├── TestProject.csproj
└── README.md

````

---

## ⚙️ How to Run the Project

### 1️⃣ Build Docker Image

```bash
docker build -t dockermvc .
````

---

### 2️⃣ Run Container

```bash
docker run -d -p 5002:8080 --name dockermvcapp dockermvc
```

---

### 3️⃣ Access Application

Open your browser:

```
http://localhost:5002
```

---

## 🧱 Dockerfile Summary

The project uses a **multi-stage Docker build**:

### Build Stage

* Uses .NET SDK image
* Restores dependencies
* Publishes the app

### Runtime Stage

* Uses ASP.NET Core runtime image
* Runs only the published output

---

## ⚠️ Common Issues Faced

### ❌ Port already in use

Solution: change port mapping

```bash
-p 5002:8080
```

---

### ❌ Container name conflict

Solution: remove old container

```bash
docker rm -f container_name
```

---

### ❌ Image not found

Solution: check image name

```bash
docker images
```

---

### ❌ Missing ASP.NET runtime

Solution: use correct base image:

```dockerfile
mcr.microsoft.com/dotnet/aspnet:8.0
```

---

## 📸 Screenshots

### 🌐 Browser Output

![Browser Output](Screenshots/Browser%20Output.png)

---

## 👨‍💻 Author

**Eslam Seadawy**  
