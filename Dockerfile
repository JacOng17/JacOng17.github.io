ENV BUNDLER_VERSION=2.7.2 # Replace with your desired version
RUN gem update --system && \
    gem install bundler:$BUNDLER_VERSION && \
    bundle install

FROM jekyll/jekyll:4.4.1

FROM ruby:3.4.6

COPY Gemfile Gemfile.lock ./

RUN bundle install

ADD . /srv/jekyll

RUN jekyll build

EXPOSE 4000
