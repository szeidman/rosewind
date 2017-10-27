class User < ApplicationRecord
  has_many :user_charities
  has_many :charities, through: :user_charities

  has_secure_password

  def self.from_token_payload payload
    payload['sub']
  end

end
