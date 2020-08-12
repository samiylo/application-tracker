class Api::V1::CompaniesController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]

    def index
        @companies = Company.all

        render json: @companies, status: :ok
    end

    def show
        @company = Company.find(params[:id])

        render json: @company, status: :ok
    end

    def update
        @company = Company.find(params[:id])
        @company.update(company_params)

        render json: @company, status: :ok
    end

    def create
        # binding.pry
        @company = Company.new(company_params)
        @company.save
        render json: @company, status: :ok
    end

    def destroy
        @company = Company.find(params[:id])
        @company.delete

        render json: @company, status: :ok
    end

    private

    def company_params
        params.require(:company).permit(:name, :address)
    end

    def set_params
        @company = Company.find(params[:id])
    end
end
