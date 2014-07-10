MyGists::Application.routes.draw do

  get "contact/index"
  get "about/index"
  resources :gists
  root 'gists#index'

end
