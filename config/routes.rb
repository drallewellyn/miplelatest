Rails.application.routes.draw do

  mount Bootsy::Engine => '/bootsy', as: 'bootsy'
  devise_for :users, :skip => :registrations
  root 'pages#home'
  resources :posts
  resources :portfolios

end
