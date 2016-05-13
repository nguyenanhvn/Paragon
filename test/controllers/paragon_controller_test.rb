require 'test_helper'

class ParagonControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get team" do
    get :team
    assert_response :success
  end

end
