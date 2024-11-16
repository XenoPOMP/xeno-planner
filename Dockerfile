FROM node:lts as dependencies
WORKDIR /xeno-planner
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /xeno-planner
COPY . .
COPY --from=dependencies /xeno-planner/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /xeno-planner
ENV NODE_ENV production

COPY --from=builder /xeno-planner/public ./public
COPY --from=builder /xeno-planner/package.json ./package.json
COPY --from=builder /xeno-planner/.next ./.next
COPY --from=builder /xeno-planner/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]