# Name the node stage "build"
FROM node:18 as builder
# AS build
# Set working directory
WORKDIR /app



#EXPOSE 3000
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
# Install dependencies
RUN npm install --legacy-peer-deps


#RUN npm install react@latest react-dom@latest --legacy-peer-deps
#RUN npm install @ckeditor/ckeditor5-build-classic --legacy-peer-deps
#RUN npm install @ckeditor/ckeditor5-react --legacy-peer-deps
# Build the React app
RUN npm install redux -f
RUN npm run build
#RUN npm run start

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the build output from Stage 1 to Nginx's web root directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
