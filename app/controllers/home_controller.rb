class HomeController < ApplicationController

  def index
   render json: { message: "Welcome to Rosewind"}
  end

end
