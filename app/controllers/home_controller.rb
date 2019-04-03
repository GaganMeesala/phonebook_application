class HomeController < ApplicationController

  # Displaying home page with keypad
  def show
    if !params[:name].nil?
      @user = User.find_by(name: params[:name].strip)
      respond_to do |format|
        format.js
      end
    else
      @array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    end
  end

  # New form for creating contact numbers
  def add_contact_form
    respond_to do |format|
      format.js
    end
  end

  # Creating new contact
  def create_contact
    if params[:name].present? and params[:number].present?
      @user = User.create(name: params[:name], number: params[:number])
    end
  end

  # Searching the contact number through keypad
  def search
    search_key = params[:search]
    if search_key.blank?
      @users = {}
    else
      @users = User.search(search_key).order('created_at ASC')
      respond_to do |format|
        format.js
        format.html
      end
    end
  end
end