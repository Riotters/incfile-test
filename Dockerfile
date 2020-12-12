FROM node

ARG GATSBY_ACTIVE_ENV

RUN yarn global add gatsby-cli

RUN gatsby telemetry --disable

COPY . /source

RUN cd /source ; yarn

RUN cd /source ; gatsby build