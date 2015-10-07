class PletoolsController < ApplicationController
  before_action :set_pletool, only: [:show, :edit, :update, :destroy]

  # GET /pletools
  # GET /pletools.json
  def index
    @pletools = Pletool.all
  end

  # GET /pletools/1
  # GET /pletools/1.json
  def show
  end

  # GET /pletools/new
  def new
    @pletool = Pletool.new
  end

  # GET /pletools/1/edit
  def edit
  end

  # POST /pletools
  # POST /pletools.json
  def create
    @pletool = Pletool.new(pletool_params)

    respond_to do |format|
      if @pletool.save
        format.html { redirect_to @pletool, notice: 'Pletool was successfully created.' }
        format.json { render :show, status: :created, location: @pletool }
      else
        format.html { render :new }
        format.json { render json: @pletool.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pletools/1
  # PATCH/PUT /pletools/1.json
  def update
    respond_to do |format|
      if @pletool.update(pletool_params)
        format.html { redirect_to @pletool, notice: 'Pletool was successfully updated.' }
        format.json { render :show, status: :ok, location: @pletool }
      else
        format.html { render :edit }
        format.json { render json: @pletool.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pletools/1
  # DELETE /pletools/1.json
  def destroy
    @pletool.destroy
    respond_to do |format|
      format.html { redirect_to pletools_url, notice: 'Pletool was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pletool
      @pletool = Pletool.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pletool_params
      params.require(:pletool).permit(:title, :link, :description)
    end
end
