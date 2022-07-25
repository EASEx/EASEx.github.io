---
sidebar_position: 1
---

# Tutorial Intro

Let's discover EASEx.

## Getting Started

Get started by **creating a new problem-solving session**.

### What you'll need

- A compatible Windows/MacOS/Linux desktop for the frontend application.
- A server with docker and docker compose installed.

## Setup Application

Download and install the latest application from [here](https://hazel-deployment.vercel.app/).

_Note that the application is not signed, so you may need to contact your administrator for installation._

## Setup Server

Clone and run the development server:

```bash
git clone https://EASEx/Deployment.git
cd deployment
docker-compose up
```

This will start the proxy on port 8888. Setting up the load balancer would depend on your task - please ensure that the load balancer supports large file transfer (>100 MB), web sockets and server side events.
