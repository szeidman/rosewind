class Charity < ApplicationRecord
  has_many :user_charities
  has_many :users, through: :user_charities

  validates_uniqueness_of :ein

end
