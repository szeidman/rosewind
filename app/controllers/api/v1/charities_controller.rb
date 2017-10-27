module API
  module V1
    class CharitiesController < ApplicationController
      before_action :set_charity, only: [:show, :update, :destroy]
      before_action :authenticate_user

      # GET /charities
      def index
        @charities = Charity.all

        render json: @charities
      end

      # GET /charities/1
      def show
        render json: @charity
      end

      # POST /charities
      def create
        @charity = Charity.new(charity_params)
        if @charity.save
          render json: @charity
        else
          render json: @charity.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /charities/1
      def update
        if @charity.update(charity_params)
          render json: @charity
        else
          render json: @charity.errors, status: :unprocessable_entity
        end
      end

      # DELETE /charities/1
      def destroy
        @charity.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_charity
          @charity = Charity.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def charity_params
          params.permit(:ein, :charityName)
        end
    end
  end
end
