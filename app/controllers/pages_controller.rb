class PagesController < ApplicationController
  def index
    @background = "<%= stylesheet_link_tag 'home_page', :media => 'screen' %>"
    @title = "Главная"
  end

end
