FROM nginx
COPY build /react
# build 를 /react에 copy
COPY default.conf /etc/nginx/conf.d/default.conf
# default.conf 를 /etc/nginx/conf.d/default.conf에 copy
EXPOSE 80
# Expose는 container port를 정의만 할 뿐 이렇게 열린다는 것이 아니다. run 할 때 선언을 해줘야 한다.