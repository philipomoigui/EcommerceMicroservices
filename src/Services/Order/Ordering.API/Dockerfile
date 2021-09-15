#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Services/Order/Ordering.API/Ordering.API.csproj", "Services/Order/Ordering.API/"]
COPY ["SharedLibs/Common.Logging/Common.Logging.csproj", "SharedLibs/Common.Logging/"]
COPY ["Services/Order/Ordering.Application/Ordering.Application.csproj", "Services/Order/Ordering.Application/"]
COPY ["Services/Order/Ordering.Domain/Ordering.Domain.csproj", "Services/Order/Ordering.Domain/"]
COPY ["SharedLibs/EventBus.Messages/EventBus.Messages.csproj", "SharedLibs/EventBus.Messages/"]
COPY ["Services/Order/Ordering.Infrastructure/Ordering.Infrastructure.csproj", "Services/Order/Ordering.Infrastructure/"]
RUN dotnet restore "Services/Order/Ordering.API/Ordering.API.csproj"
COPY . .
WORKDIR "/src/Services/Order/Ordering.API"
RUN dotnet build "Ordering.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Ordering.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Ordering.API.dll"]