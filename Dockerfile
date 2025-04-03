FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY car/package.json car/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY car/ ./

# Expose the port the app runs on
EXPOSE 80

# Start the application
CMD ["npm", "start"]
