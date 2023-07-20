# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Express app runs (change it to your app's port)
EXPOSE 4040
# Set the default command to run when the container starts
CMD [ "npm", "run", "serve" ]
