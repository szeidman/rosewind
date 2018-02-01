module API
  module V1
    class CharityNavController < ApplicationController

      def search
        @search = HTTParty.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=#{ENV['REACT_APP_CHARITYNAV_ID']}&app_key=#{ENV['REACT_APP_CHARITYNAV_KEY']}&minRating=4&pageSize=1000&state=WA")
        render json: @search.parsed_response
      end

      def list
        render json: @charity
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_charity
          @charity = Charity.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def charity_nav_params
          params.require(:charity_nav).permit(:ein, :state)
        end
    end
  end
end
