class LocksController < ApplicationController
    def index
        @locks = Lock.all
        render json: @locks, status: :accepted
    end

    def create
       @lock = Lock.create(lock_params)
       if @lock.valid?
            render json: @lock, status: :accepted
       else
            render json: {errors: @lock.errors.full_messages}, status: :unprocessable_entity
       end

    end

    private

    def lock_params
        params.require(:lock).permit(:locked, :house_id)
    end


end
