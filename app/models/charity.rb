class Charity < ApplicationRecord

  @charity_id = ENV['CHARITYNAV_ID']
  @charity_key = ENV['CHARITYNAV_KEY']

  def self.pullCharitiesFromExternalAPI
    uri = "https://api.data.charitynavigator.org/v2/Organizations?app_id="+@charity_id+"&app_key="+@charity_key+"&minRating=4&pageSize=10&categoryID=8"
    response = HTTParty.get(uri)
    eins = []
    response.each do |resp|
      eins << resp["organization"]["ein"]
    end
    eins.map do |e|
      org_uri = "https://api.data.charitynavigator.org/v2/Organizations/"+e+"?app_id="+@charity_id+"&app_key="+@charity_key
      response = HTTParty.get(org_uri)
      charity = Charity.find_or_initialize_by(ein: e)
      charity.name = response["charityName"]
      charity.tagline = response["tagline"]
      charity.cause = response["cause"]["causeName"]
      charity.rating = response["currentRating"]["rating"]
      charity.rating_image = response["currentRating"]["small"]
      charity.score = response["currentRating"]["score"]
      charity.street1 = response["mailingAddress"]["streetAddress1"]
      charity.street2 = response["mailingAddress"]["streetAddress2"]
      charity.city = response["mailingAddress"]["city"]
      charity.state = response["mailingAddress"]["stateOrProvince"]
      charity.zip = response["mailingAddress"]["postalCode"]
      charity.mission = response["mission"]
      charity.ein = response["ein"]
      charity.save
    end
  end
  binding.pry
end
