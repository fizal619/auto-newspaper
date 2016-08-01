Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  match '(:anything)' => 'application#nothing', via: [:options]


  get           '/news',        to: 'articles#index'
  delete        '/news/:id',    to: 'articles#destroy'

  resources     'topics'

end
