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
        # @dish= Dish.find(params[.id])
        # dish.update(dish_params)
        # redirect_to cars_path
    end

    def destroy
        @dish= Dish.find(params[:id])
        dish.destroy
        redirect_to dishes_path
    end

    def dish_params
        params.permit(:name, :description)
    end

end
