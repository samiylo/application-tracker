class Api::V1::ApplicationsController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]

    def index 
        @applications = Application.all

        render json: @applications, status: :ok
    end

    def create
        @application = Application.create(application_params)

        render json: @application, status: :ok 
    end

    private

    def application_params
        params.require(:application).permit(:position, :description, :date, :company_id)
    end

    def set_params
        @application = Application.find(params[:id])
    end
end
