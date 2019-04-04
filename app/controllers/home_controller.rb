class HomeController < ApplicationController

  # Displaying home page with keypad
  def show
    if !params[:name].nil?
      @user = User.find_by(name: params[:name].strip)
      respond_to do |format|
        format.js
      end
    else
      @hash = {1 => "", 2 => "ABC", 3 => "DEF", 4 => "GHI", 5 => "JKL", 6 => "MNO", 7 => "PQRS", 8 => "TUV", 9 => "WXYZ", 0 => ""}
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
      @users = User.search(search_key)
      respond_to do |format|
        format.js
        format.html
      end
    end
  end
end