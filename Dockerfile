# Dockerfile for building and serving the Creative Theme Jekyll site
FROM ruby:3.2-slim

# Install OS-level packages for building Ruby native extensions
RUN apt-get update && \
    apt-get install -y build-essential libssl-dev zlib1g-dev liblzma-dev && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /srv/jekyll

# Copy Gemfile and lock, rename for case-sensitive FS
COPY GemFile GemFile.lock ./
RUN mv GemFile Gemfile && mv GemFile.lock Gemfile.lock

# Install bundler (locked to version in lockfile) and project gems
RUN gem install bundler:2.6.3 && \
    bundle _2.6.3_ lock --add-platform x86_64-linux aarch64-linux && \
    bundle _2.6.3_ config set --local frozen true && \
    bundle _2.6.3_ install

# Copy the rest of the site
COPY . .

# Expose Jekyll default port
EXPOSE 4000

# Serve the site, binding to all interfaces for external access
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]