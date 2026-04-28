# 🐳 Pushing a Docker Image to Docker Hub

This guide documents the steps taken to tag and push a Docker image to Docker Hub.

---

## Prerequisites

- Docker Desktop installed and running
- A Docker Hub account ([hub.docker.com](https://hub.docker.com))

---

## Step 1 — Log In to Docker Hub

Before pushing any image, you need to authenticate with Docker Hub.

```powershell
docker login
```

**Output:**
```
Authenticating with existing credentials... [Username: eslamseadawi]

i Info → To login with a different account, run 'docker logout' followed by 'docker login'

Login Succeeded
```

> ✅ Docker reused saved credentials automatically. If it's your first time, you'll be prompted to enter your username and password.

---

## Step 2 — Tag the Image as `latest`

Create the first tag `eslamseadawi/redis:latest` pointing to the local `redis` image.

```powershell
docker tag redis eslamseadawi/redis
```

> No output means the command succeeded. Since no tag is specified, Docker defaults to `latest`.

---

## Step 3 — Tag the Image as `eslamDev`

Create a second custom tag `eslamseadawi/redis:eslamDev` pointing to the same local `redis` image.

```powershell
docker tag redis eslamseadawi/redis:eslamDev
```

> No output means the command succeeded. Both tags now point to the exact same image ID — no data is duplicated.

---

## Step 4 — Push the `latest` Tag to Docker Hub

```powershell
docker push eslamseadawi/redis:latest
```

**Output:**
```
The push refers to repository [docker.io/eslamseadawi/redis]
14d3b17b0010: Layer already exists
4f4fb700ef54: Layer already exists
97afe6025aa9: Layer already exists
3531af2bc2a9: Layer already exists
d55df8e0f53d: Layer already exists
2b8951cd65b5: Layer already exists
9e0f42ff49e1: Layer already exists
latest: digest: sha256:d80663b725aa4303161e59c1f1266fd7eb1af96a4f841a43096273919b2ab795 size: 2286
```

> ℹ️ **"Layer already exists"** means Docker skipped re-uploading unchanged layers — this is Docker's layer caching in action, making pushes faster.

---

## Step 5 — Push the `eslamDev` Tag to Docker Hub

```powershell
docker push eslamseadawi/redis:eslamDev
```

**Output:**
```
The push refers to repository [docker.io/eslamseadawi/redis]
14d3b17b0010: Layer already exists
4f4fb700ef54: Layer already exists
97afe6025aa9: Layer already exists
3531af2bc2a9: Layer already exists
d55df8e0f53d: Layer already exists
2b8951cd65b5: Layer already exists
9e0f42ff49e1: Layer already exists
eslamDev: digest: sha256:d80663b725aa4303161e59c1f1266fd7eb1af96a4f841a43096273919b2ab795 size: 2286

i Info → Not all multiplatform-content is present and only the available single-platform image was pushed
         sha256:d372cf7cd5ab47fb6ad1a73c45ea1104d6f3fa11cc833ff0b3ac997890b4ccec -> sha256:d80663b725aa4303161e59c1f1266fd7eb1af96a4f841a43096273919b2ab795
```

> ℹ️ All layers already existed from the previous push in Step 4, so nothing was re-uploaded.  
> ℹ️ The multiplatform warning is informational — only the image built for your current platform (e.g., `amd64`) was pushed, not a multi-arch manifest.

---

## Step 6 — Verify Local Images

Confirm all images and their tags are present locally.

```powershell
docker images
```

**Output:**
```
                                                                              i Info →   U  In Use
IMAGE                         ID             DISK USAGE   CONTENT SIZE   EXTRA
eslamseadawi/redis:eslamDev   d372cf7cd5ab        204MB         55.3MB    U
eslamseadawi/redis:latest     d372cf7cd5ab        204MB         55.3MB    U
nginx:stable                  1a9ab83e2892        240MB         65.8MB    U
nginx:stable-trixie           1a9ab83e2892        240MB         65.8MB    U
redis:alpine                  c5e375abb885        134MB           35MB    U
redis:latest                  d372cf7cd5ab        204MB         55.3MB    U
```

> 🔍 `eslamseadawi/redis:eslamDev`, `eslamseadawi/redis:latest`, and `redis:latest` all share the **same Image ID** (`d372cf7cd5ab`). They are the same image data under different tag names — no extra disk space is used.

---

## Result

Both tags are now publicly available on Docker Hub at:

```
docker.io/eslamseadawi/redis:latest
docker.io/eslamseadawi/redis:eslamDev
```

Anyone can pull them using:

```bash
docker pull eslamseadawi/redis
# or
docker pull eslamseadawi/redis:eslamDev
```