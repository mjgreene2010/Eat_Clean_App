class DishesController < ApplicationController
    def index
        @dishes = Dish.all
        render json: @dishes
    end

    def show
        @dish= Dish.find(params[:id])
    end

    def new
        @dish= Dish.new
    end

    def create
        @dish= Dish.create(dish_params)
        render json: @dish
    end

    def edit
        @dish= Dish.find(params[:id])
    end

    def update
        @dish= Dish.find(params[:id])
        @dish.update(dish_update_params)
        render json: @dish
        
    end

    def destroy
        @dishes= Dish.find(params[:id]).destroy
        # dishes.destroy
        render json: @dishes
    end

    def dish_params
        params.permit(:name, :description)
    end

    def dish_update_params
        params.permit(:description)
    end

end
