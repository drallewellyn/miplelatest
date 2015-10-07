require 'test_helper'

class PletoolsControllerTest < ActionController::TestCase
  setup do
    @pletool = pletools(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pletools)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pletool" do
    assert_difference('Pletool.count') do
      post :create, pletool: { description: @pletool.description, link: @pletool.link, title: @pletool.title }
    end

    assert_redirected_to pletool_path(assigns(:pletool))
  end

  test "should show pletool" do
    get :show, id: @pletool
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pletool
    assert_response :success
  end

  test "should update pletool" do
    patch :update, id: @pletool, pletool: { description: @pletool.description, link: @pletool.link, title: @pletool.title }
    assert_redirected_to pletool_path(assigns(:pletool))
  end

  test "should destroy pletool" do
    assert_difference('Pletool.count', -1) do
      delete :destroy, id: @pletool
    end

    assert_redirected_to pletools_path
  end
end
