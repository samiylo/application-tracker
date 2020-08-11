Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 

      # nesting applications will remove the /api/vi/applications route
      resources :companies do 
        resources :applications
      end
      # this would all a fetch like this: /api/v1/applications
      # resources :applications
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
