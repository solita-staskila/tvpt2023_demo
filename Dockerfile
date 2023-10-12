# Use an official Node runtime as the parent image
FROM node:14

# Copy the current directory contents into the container at /app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable just for the style, doesn't really do anything in this app
ENV NODE_ENV production

# Run `npm start` when the container launches
CMD ["npm", "start"]
