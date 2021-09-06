# Project Title

This repo contains a sample application based on an ecommerce web application I named MyAfricaMart to explore several architecture concepts like;

- Microservices
- CQRS
- PUB/SUB pattern

and how to use container technologies like;
- Docker
- Kubernetes (Not yet implemented)


# Table of contents

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Software Architecture](#software-Architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
    - [Sponsor](#sponsor)
    - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)
- [License](#license)
- [Footer](#footer)


# Software Architecture
[(Back to top)](#table-of-contents)

I've created a software architecture diagram which shows all the moving parts in the application. Service communicate synchronously using gRPC while asynchronous communication are done with RabbitMQ Publish/Subscribe Topic Exchange Model.

<! Inserts Image here !>

# Web Application
This is the front end of the system. Users can create account, login, view products, purchase product. (Not yet developed)

# Catalog Service
This service provides an API to manage products, perform CRUD operations on products. It uses MongoDB to persist products.

# Basket Service
This service provides an API for managing user basket. When you add a product to cart. It uses a Redis database for persistence.
This service also publish the event;
- BasketCheckoutEvent

# Discount Service
This is a gRPC service that is use for calculating discounts, and getting products as well as user specific discounts. It uses Postgres Sql for persistence.

# Order Service
This service is responsible for managing orders. Performing CRUD on Orders .It also consumes the "BasketCheckoutEvent" event from Basket Service. it makes use of CQRS pattern with MediatR, FluentValidation and AutoMapper packages.

# Notification Service
This will be responsible for handling notifications, user specific notifications as well as order notification. (Not yet implemented). Notificatios are currently handled in the Order service when orders are created, but that should be extracted into its own service.

# Payment Service
This will be a gRPC service responsible for handling payments (Not yet implemented). Currently, payments are being handled in Order service upon creation of orders, this will be extracted into a seperate service to handle and store payments.

# API Gateway
It use Ocelot Api Gateway and serves as a unified point of entry into the system using the BFF pattern.

#Shopping Aggregator

# Technology Used
This describes the technology and libraries used to build this application.

##### Net5 and ASP.Net 5 
This application is built completely using .Net5 and Asp.net5. You can learn more [here](https://dot.net/).

##### Dapper
This is a light weight ORM used in Discount service. You can learn about Dapper [here](https://github.com/StackExchange/Dapper).

##### Entity Framework Core
For the Order service, database-access is implemented using Entity Framework Core code-first. See [here](https://docs.microsoft.com/en-us/ef/core/index)  for more info.

##### Docker
Every service within the system and all infrastructural components (database, message-broker) are run in a Docker container. In this solution, I only used Linux based containers. Docker Compose is used to orchestrate the application and connect all the components. See [here](https://www.docker.com/) for more info about Docker.

##### RabbitMQ
RabbitMQ is used as message-broker. I use a default RabbitMQ Docker image (including management) from Docker Hub (rabbitmq:3-management). See [here](https://www.rabbitmq.com/) for more info about RabbitMq.

##### SQL Server on Linux
The database server used to host all databases is MS SQL Server running on Linux. I use a default 2017 SQL Server Docker image from Docker Hub (mcr.microsoft.com/mssql/server:2017-latest).

##### AutoMapper
AutoMapper is used (only where it adds value) to map between POCOs. This is primarily handy when mapping commands to events, events to events or events to models. See [automapper](http://automapper.org/) for more info.

##### SwashBuckle
Swashbuckle is used for auto-generating Swagger documentation and a test-ui for the ASP.NET Web APIs. See [swashbuckle](https://github.com/domaindrivendev/Swashbuckle) for more info.

I will be updating this as I build this project.

# Installation
[(Back to top)](#table-of-contents)
 
 To run this project, Make sure you have the latest version of Docker Desktop running smoothly on your machine. I only used Linux based containers.
 
#####  Building The Docker Images
To build the images, make sure you have cloned the project to your machine, then run do the following;

cd src
docker-compose -f docker-compose.yml -f docker-compose.override.yml up

The above commands will build and run the images on your machine. These might take quite some time depending on your internet as there are many external images it will have to pull. When it completes, You can check the status of the images through docker desktop or by using an external service called portainer, I have added to the docker-compose file.

These are the set Url port of each of the service;

Catalog Service -> http://host.docker.internal:8000/swagger/index.html

Basket Service -> http://host.docker.internal:8001/swagger/index.html

Discount Service -> http://host.docker.internal:8002/swagger/index.html

Order Service -> http://host.docker.internal:8004/swagger/index.html

Shopping.Aggregator -> http://host.docker.internal:8005/swagger/index.html

API Gateway -> http://host.docker.internal:8010/Catalog

Rabbit Management Dashboard -> http://host.docker.internal:15672 -- guest/guest

Portainer -> http://host.docker.internal:9000 -- admin/P@ssw0rd

pgAdmin PostgreSQL -> http://host.docker.internal:5050 -- admin@philo.com/P@ssw0rd


I will update this readme as I add more services and build out more features.
