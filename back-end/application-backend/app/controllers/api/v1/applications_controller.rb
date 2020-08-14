class Api::V1::ApplicationsController < ApplicationController
    before_action :set_company

    def index 
        @applications = @company.applications

        render json: @applications, status: :ok
    end

    def create
        @application = @company.applications.new(application_params)
        # @application.date = Date.now 
        @application.save
        render json: @company, status: :ok 

    end

    def show
        @application = Application.find(params[:id])

        render json: @application, status: :ok
    end

    def destroy
        @application = Application.find(params[:id])
        @application.delete

    end

    private

    # bellow we are saying: we are gonna require an application, and we will permit these params
    def application_params
        params.require(:application).permit(:position, :description, :date, :company_id)
    end

    def set_params
        @application = Application.find(params[:id])
    end
    
    #since applications belong to a company, we first need to return the applications that belong to that company.
    def set_company
        @company = Company.find(params[:company_id])
    end
end
