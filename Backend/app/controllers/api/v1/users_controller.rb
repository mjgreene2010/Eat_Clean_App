class Api::V1::UsersController < ApplicationController


def index
  @users = User.all
  render json: @users
end
  def new
    @user = User.new
    render json: @user
 end

 def create
   @user = User.create(user_params)
   render json: @user
   #   @user = User.create(user_params)
   #   if @user.valid?
   #     render json: { user: User.new(@user) }, status: :created
   #   else
   #     render json: { error: 'failed to create user' }, status: :not_acceptable
   #   end

   #   render json: @user
  end

   def user_params
     params.permit(:username, :password, :bio, :avatar)
   end
     
   def define_curent_user
      if params[:id]
        @current_user =User.find(params[:id])
      else
        @current_user = User.new
      end
    end

    def current_user
      @current_user
    end
  

    
 
end