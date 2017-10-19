class Charity < ApplicationRecord
  has_many :user_charities
  has_many :users, through: :user_charities
  @charity_id = ENV['CHARITYNAV_ID']
  @charity_key = ENV['CHARITYNAV_KEY']

  def self.pullCharitiesFromExternalAPI
    uri = "https://api.data.charitynavigator.org/v2/Organizations?app_id="+@charity_id+"&app_key="+@charity_key+"&minRating=4&pageSize=1000&categoryID=8"
    response = HTTParty.get(uri)
    response.each do |resp|
      charity = Charity.find_or_create_by(ein: resp["organization"]["ein"])
    end

  end
  binding.pry
end
