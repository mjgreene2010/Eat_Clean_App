Rails.application.routes.draw do
  resources :nutrients
  resources :ingredients
  resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
