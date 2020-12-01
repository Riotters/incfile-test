FROM node

RUN yarn global add gatsby-cli

RUN gatsby telemetry --disable

COPY . /source

RUN cd /source ; yarn

# Run the gatsby build and IGNORE FAILURE
# @todo: stop ignoring failures
RUN cd /source ; gatsby build || true

COPY /source/form-order-now.php /source/public/form-order-now.php