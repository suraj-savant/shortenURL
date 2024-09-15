# URL Shortener

This project is a URL shortening application that transforms long URLs into shorter, more manageable URLs. The backend is built with Express.js, and the frontend is powered by Vite. The entire application is containerized using Docker for easy deployment and scaling.

## Run using DockerHub image    
    # pull image from dockerhub
    docker pull savantsuraj/shorturl

    # run downladed image
    docker run -e MONGODB_URL=<your-mongo-db-url>  -e PORT=3000  -p 3000:3000 savantsuraj/shorturl

    # visit the url
    http://localhost:3000

## Run docker project
    # docker build image
    docker build -t shorturl .   

    # run the image
    docker run -e MONGODB_URL=<your-mongo-db-url>  -e PORT=3000  -p 3000:3000 shorturl

    # visit the url
    http://localhost:3000


## Features

- Shorten long URLs
- Retrieve original URLs using the shortened link
- User-friendly frontend for easy interaction
- Containerized using Docker for easy deployment
- Begineer friendly project on MERN stack with docker containerisation
