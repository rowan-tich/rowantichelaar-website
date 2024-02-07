Hello,
This is my personal portfolio website current version 2.7.

It is made with Docker, HTML, CSS, Javascript, and Nginx. It is currently hosted on my own linux server located in Madison, WI. 

Building the container
```sh
$ docker build -t rtichelaar/staticsite:1.0 .
```
Running the container
```sh
$ docker run -itd --name website2.7 --publish 80:80 rtichelaar/staticsite:1.0
```

This will launch the website to my servers static hose and and cause cloudflare to recognize it and resolve rowantichelaar.com.
