FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY index.js /usr/share/nginx/html/index.js
COPY styles.css /usr/share/nginx/html/styles.css
COPY resume.html /usr/share/nginx/html/index.html
COPY projects.html /usr/share/nginx/html/index.html
COPY experience.html /usr/share/nginx/html/index.html
COPY contactme.html /usr/share/nginx/html/index.html