source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

#JWT handler
#gem 'knock'

gem 'jwt'

gem "active_model_serializers"
gem 'httparty'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "loofah", ">= 2.2.3"
gem "rails-html-sanitizer", ">= 1.0.4"
gem "rack", ">= 2.0.6"
gem "ffi", ">= 1.9.24"
gem "sprockets", ">= 3.7.2"
# TODO: update rails to be able to update activejob.
gem 'rails', '~> 5.1.2'

gem 'puma', '~> 4.3'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

gem 'foreman', '~> 0.82.0'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem "dotenv-rails"
  gem 'pry-rails'
  gem 'faker'
  gem 'sqlite3'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  gem 'pg', '~> 0.20'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
