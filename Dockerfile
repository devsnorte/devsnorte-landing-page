# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.12.1
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


# Git commit SHA baked in at build time via --build-arg GIT_COMMIT=<sha>.
# Falls back to "local" for local builds / CI without the arg.
# Available at runtime as process.env.RELEASE_COMMIT for OTel resource attributes.
ARG GIT_COMMIT=local

# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package-lock.json package.json ./
RUN npm ci --include=dev

# Copy application code
COPY . .

# Build application
RUN npx next build


# Final stage for app image
FROM base

# Standalone output only needs the server, static assets, and public files
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Copy the Fly.io entrypoint
COPY --from=build /app/docker-entrypoint.js ./

# Standalone server reads these to bind correctly
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Propagate the build-time git SHA into the runtime environment so OTel
# can attach vcs.repository.ref.revision to every trace.
ARG GIT_COMMIT=local
ENV RELEASE_COMMIT=${GIT_COMMIT}

# Entrypoint sets up the container.
ENTRYPOINT [ "/app/docker-entrypoint.js" ]

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "node", "server.js" ]
