class ApplicationController < ActionController::API
  include Knock::Authenticable
  include HTTParty

  def unauthorized_entity(entity_name)
    render json: { error: "Unauthorized request" }, status:
    :unauthorized
  end

end
