Rails.application.routes.draw do
  root :to => 'home#show'
  get 'search' => 'home#search'
  get 'view' => 'home#show'
  get '/add_contact_form' => 'home#add_contact_form'
  post '/create_contact' => 'home#create_contact'
end