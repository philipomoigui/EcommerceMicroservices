# AfrikaMart - An Ecommerce System

This repo contains a sample application based on an ecommerce web application I named AfrikaMart to explore several architecture concepts like;

- Microservices
- CQRS
- PUB/SUB pattern

and how to use container technologies like;
- Docker
- Docker-compose
- Kubernetes (Not yet implemented)


# Table of contents

- [Table of contents](#table-of-contents)
- [Software Architecture](#software-architecture)
- [Technology Used](#technology-used)
- [Installation](#installation)
-  - [Building The Docker Images](#building-the-docker-images)
    - [Services Urls](#services-url)
- [Refrences](#refrences)


# Software Architecture
[(Back to top)](#table-of-contents)

I've created a software architecture diagram which shows all the moving parts in the application. Services communicate synchronously using gRPC while asynchronous communication are done with RabbitMQ Publish/Subscribe Topic Exchange Model.

<! Inserts Image here !>

### Web Application
This is the front end of the system. Users can create account, login, view products, purchase product. (Not yet developed)

### Catalog Service
This service provides an API to manage products, perform CRUD operations on products. It uses MongoDB to persist products.

### Basket Service
This service provides an API for managing user basket. When you add a product to cart. It uses a Redis database for persistence.
This service also publish the event;
- BasketCheckoutEvent

### Discount Service
This is a gRPC service that is use for calculating discounts, and getting products as well as user specific discounts. It uses Postgres Sql for persistence.

### Order Service
This service is responsible for managing orders. Performing CRUD on Orders . It also consumes the "BasketCheckoutEvent" event from Basket Service. it makes use of CQRS pattern with MediatR, FluentValidation and AutoMapper packages.

### Notification Service
This will be responsible for handling notifications, user specific notifications as well as order notification. (Not yet implemented). Notificatios are currently handled in the Order service when orders are created, but that should be extracted into its own service.

### Payment Service
This will be a gRPC service responsible for handling payments (Not yet implemented). Currently, payments are being handled in Order service upon creation of orders, this will be extracted into a seperate service to handle and store payments.

### API Gateway
It use Ocelot Api Gateway and serves as a unified point of entry into the system using the BFF pattern.

### Shopping Aggregator

# Technology Used
[(Back to top)](#table-of-contents)

This describes the technology and libraries used to build this application.

### Net5 and ASP.Net 5 
This application is built completely using .Net5 and Asp.net5. You can learn more [here](https://dot.net/).

#### Dapper
This is a light weight ORM used in Discount service. You can learn about Dapper [here](https://github.com/StackExchange/Dapper).

#### Entity Framework Core
For the Order service, database-access is implemented using Entity Framework Core code-first. See [here](https://docs.microsoft.com/en-us/ef/core/index)  for more info.

#### Docker
Every service within the system and all infrastructural components (database, message-broker) are run in a Docker container. In this solution, I only used Linux based containers. Docker Compose is used to orchestrate the application and connect all the components. See [here](https://www.docker.com/) for more info about Docker.

#### RabbitMQ
RabbitMQ is used as message-broker. I use a default RabbitMQ Docker image (including management) from Docker Hub (rabbitmq:3-management). See [here](https://www.rabbitmq.com/) for more info about RabbitMq.

#### SQL Server on Linux
The database server used to host all databases is MS SQL Server running on Linux. I use a default 2017 SQL Server Docker image from Docker Hub (mcr.microsoft.com/mssql/server:2017-latest).

#### AutoMapper
AutoMapper is used (only where it adds value) to map between POCOs. This is primarily handy when mapping commands to events, events to events or events to models. See [automapper](http://automapper.org/) for more info.

#### SwashBuckle
Swashbuckle is used for auto-generating Swagger documentation and a test-ui for the ASP.NET Web APIs. See [swashbuckle](https://github.com/domaindrivendev/Swashbuckle) for more info.

I will be updating this as I build this project.

# Installation
[(Back to top)](#table-of-contents)
 
 I will be assuming you are on a windows machine. To run this project, Make sure you have the latest version of Docker Desktop running smoothly on your machine. I only used Linux based containers.
 
####  Building The Docker Images
To build the images, make sure you have cloned the project to your machine, then run do the following;

using the terminal, Change direcroty to the "src" folder
```
cd src
```

Then, run the folowing docker command in the "src" directory

```
docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d
```

#### Services Url

The above commands will build the images and run the container on your machine. These might take quite some time depending on your internet as there are many external images it will have to pull. When it completes, You can check docker desktop that your images has been built and container running. Optionally, you can navigate to the portainer service I added through http://host.docker.internal:9000 -- admin/P@ssw0rd portainer, Portainer makes it easier to manage Docker containers, images, networks, and volumes from a web-based Portainer dashboard.

These are the set hostname and port for each of the services;

Catalog Service -> http://host.docker.internal:8000/swagger/index.html

Basket Service -> http://host.docker.internal:8001/swagger/index.html

Discount Service -> http://host.docker.internal:8002/swagger/index.html

Order Service -> http://host.docker.internal:8004/swagger/index.html

Shopping.Aggregator -> http://host.docker.internal:8005/swagger/index.html

API Gateway -> http://host.docker.internal:8010/Catalog

RabbitMq Management Dashboard -> http://host.docker.internal:15672 -- guest/guest

Portainer -> http://host.docker.internal:9000 -- admin/P@ssw0rd

pgAdmin PostgreSQL -> http://host.docker.internal:5050 -- admin@philo.com/P@ssw0rd


I will update this readMe as I add more services and build out more features.


# Refrences

I learnt a lot from exploring Microsoft eShopOnContainers refrence app which you can find [here](https://docs.microsoft.com/en-us/dotnet/architecture/cloud-native/introduce-eshoponcontainers-reference-app). 

I explored most, if not all of Mehmet Ozkaya Articles on implementing cloud native applications in .Net ecosystem.
