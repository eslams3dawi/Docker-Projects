# build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /source

# copy csproj and restore dependencies
COPY *.csproj .
RUN dotnet restore

# copy and publish application files
COPY . .
RUN dotnet publish -c release -o /app

# runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

COPY --from=build /app .

ENTRYPOINT ["dotnet", "hrapp.dll"]


