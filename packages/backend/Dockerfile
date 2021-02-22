FROM node:14

WORKDIR /app

COPY . .

RUN npm install -g npm@7.5.4

RUN echo && echo versions && \
  echo node: $(node -v) && \
  echo npm: $(npm -v) && \
  echo yarn: $(yarn -v) && \
  echo

RUN npm run build

CMD [ "npm", "run", "start:prod" ]
