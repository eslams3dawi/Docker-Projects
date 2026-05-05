# First-sage base image with .NET SDK and Alpine Linux
FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build
# Sepcificy the working directory for the build stage
WORKDIR /source 
# Copy the project file to the working directory
COPY *.csproj .
# Restore the project dependencies
RUN dotnet restore TestProject.csproj

# Copy the remaining source code to the working directory
COPY . .

# Publish the application to the /app directory in release configuration
RUN dotnet publish TestProject.csproj -c release -o /app 

# Final stage with the runtime image
FROM  mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS runtime
# Set the working directory for the runtime stage
WORKDIR /app
# Copy the published application from the build stage to the runtime stage
COPY --from=build /app .
# Set the entry point to run the application using the dotnet command with the name of the DLL file as an argument
ENTRYPOINT [ "dotnet", "TestProject.dll" ]