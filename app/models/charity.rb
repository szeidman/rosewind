class Charity < ApplicationRecord

  @charity_id = ENV['CHARITYNAV_ID']
  @charity_key = ENV['CHARITYNAV_KEY']

  uri = "https://api.data.charitynavigator.org/v2/Organizations?app_id="+@charity_id+"&app_key="+@charity_key+"&minRating=4&pageSize=1000&categoryID=8"
  response = HTTParty.get(uri)
  eins = []
  response.each do |resp|
    eins << resp["organization"]["ein"]
  end
  puts eins

end
