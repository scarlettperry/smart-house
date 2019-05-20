class HousesController < ApplicationController
    def index
        @houses = House.all
        render json: @houses, status: :accepted
    end

    def create
        @house = House.create(house_params)
        if @house.valid?
            render json: @house, status: :accepted
        else
            render json: {errors: @house.errors.full_messages}, status: :unprocessable_entity
        end

    end

    private

    def house_params
        params.require(:house).permit(:address)
    end
    
end
