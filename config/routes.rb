Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  namespace :api do
    namespace :v1 do
      resources :charities
      scope path: '/charity_nav', controller: :charity_nav do
        post 'search_state' => :search_state
        post 'search_ein' => :search_ein
      end
    end
  end

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
