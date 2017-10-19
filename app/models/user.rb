class User < ApplicationRecord
  has_many :user_charities
  has_many :charities, through: :user_charities

end
