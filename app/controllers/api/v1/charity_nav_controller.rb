module API
  module V1
    class CharityNavController < ApplicationController

      def search_state
        @search_state = HTTParty.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=#{ENV['REACT_APP_CHARITYNAV_ID']}&app_key=#{ENV['REACT_APP_CHARITYNAV_KEY']}&minRating=4&pageSize=1000&state=#{params[:charity_nav][:state]}")

        render json: @search_state.parsed_response
      end

      def search_ein
        @search_ein = HTTParty.get("https://api.data.charitynavigator.org/v2/Organizations/#{params[:charity_nav][:ein]}?app_id=#{ENV['REACT_APP_CHARITYNAV_ID']}&app_key=#{ENV['REACT_APP_CHARITYNAV_KEY']}")
        render json: @search_ein.parsed_response
      end

      private

        # Only allow a trusted parameter "white list" through.
        def charity_nav_params
          params.require(:charity_nav).permit(:ein, :state)
        end
    end
  end
end
