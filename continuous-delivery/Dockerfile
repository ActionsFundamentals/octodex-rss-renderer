#
# This docker file is for composing a container execution environment for our
# GitHub Actions continuous delivery workflow.
#
FROM node:buster

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --gid 1001 --system nodejs
RUN adduser --system nodejs --gid 1001 --uid 1001

USER nodejs

WORKDIR /app
COPY ./app/node_modules ./node_modules
COPY ./app/public ./public
COPY ./app/.next ./.next
COPY ./app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]