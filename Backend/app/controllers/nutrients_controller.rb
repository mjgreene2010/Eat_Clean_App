class NutrientsController < ApplicationController
    def index
        @nutrients= Nutrient.all
    end

    def show
        @nutrient= Nutrient.find(params[:id])
    end

    def new
        @nutrient= Nutrient.new
    end

    def create
        @nutrient= Nutrient.create(nutrient_params)
        redirect_to nutrients_path
    end

    def edit
        @nutrient= Nutrient.find(params[:id])
    end

    def update
        @nutrient= Nutrient.find(params[:id])
        nutrient.update(nutrient_params)
        redirect_to nutrient
    end

    def destroy
        @nutrient= Nutrient.find(params[:id])
        nutrient.destroy
        redirect_to nutrients_path
    end

    def nutrient_params
        params.permit()
    end
end
