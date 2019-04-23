Rails.application.routes.draw do
  resources :nutrients
  resources :ingredients
  resources :dishes
  resources :auth , only:[:create]
  
  namespace :api do
    namespace :v1 do
  resources :users
      # post '/signup', to: 'auth#create'
      # get '/profile', to: 'users#profile'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
