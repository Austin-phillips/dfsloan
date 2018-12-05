class Api::FormsController < ApplicationController
  before_action :set_form, only: [ :show, :update, :destroy ]

  def index
    render json: Form.all.order(created_at: :desc)
  end

  def show 
    render json: @form
  end 

  def create 
    @form = Form.create(form_params)
    if @form.save
      render json: @form
    else
      render json: { errors: app.errors.full_message.join(',')}, status: 422
    end
  end 

  def update
    if @form.update(form_params)
      render json: @form
    else
      render json: { errors: @app.errors.full_message.join(',')}, status: 422 
    end
  end 

  def destroy
    @form.destroy
  end 

  private

  def set_form
    @form = Form.find(params[:id])
  end 

  def form_params
    params.require(:form).permit( :first, :last, :middle, :email, :cellphone, :workphone, :maritalstatus, :dob, :addressone, :addresstwo, :city, :state, :zipcode, :yaa, :roo, :bfirst, :blast, :bmiddle, :bdob, :status, :note, :exnote )
  end 
end
