Rails.application.routes.draw do

  devise_for :users, :skip => :registrations
  root 'pages#home'
  resources :posts
  resources :portfolios
  get 'tags/:tag', to: 'posts#index', as: :tag
end
