class IngredientsController < ApplicationController
    def index
        @ingredients= Ingredient.all
    end

    def show
        @ingredient= Ingredient.find(params[:id])
    end

    def new
        @ingredient= Ingredient.new
    end

    def create
        @ingredient= Ingredient.create(ingredient_params)
        redirect_to ingredients_path
    end

    def edit
        @ingredient= Ingredient.find(params[:id])
    end

    def update
        @ingredient= Ingredient.find(params[:id])
        ingredient.update(ingredient_params)
        redirect_to ingredients

    end

    def destroy
        @ingredient= Ingredient.find(params[:id])
        ingredient.destroy
        redirect_to ingredients_path
    end

    def ingredient_params
        params.permit()
    end
end
