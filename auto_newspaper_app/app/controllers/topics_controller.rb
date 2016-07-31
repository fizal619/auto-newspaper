class TopicsController < ApplicationController

  def index
    render json: Topic.all
  end


  def create
    topic = {
      name: params[:name]
    }
    Topic.create topic

    render json: Topic.last
  end


  def update
    topic = Topic.find(params[:id])
    topic.update({
      name: params[:name]
      })
    render json: 'Success'
  end


  def destroy
    topic = Topic.find(params[:id])
    topic.destroy
  end



end
