FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
COPY index.js /usr/share/nginx/html/index.js
COPY projects.js /usr/share/nginx/html/projects.js
COPY styles.css /usr/share/nginx/html/styles.css

COPY resume.html /usr/share/nginx/html/resume.html
COPY projects.html /usr/share/nginx/html/projects.html
COPY experience.html /usr/share/nginx/html/experience.html
COPY contactme.html /usr/share/nginx/html/contactme.html

COPY images /usr/share/nginx/html/images
COPY resume.pdf /usr/share/nginx/html/resume.pdf