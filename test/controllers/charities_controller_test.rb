require 'test_helper'

class CharitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @charity = charities(:one)
  end

  test "should get index" do
    get charities_url, as: :json
    assert_response :success
  end

  test "should create charity" do
    assert_difference('Charity.count') do
      post charities_url, params: { charity: { category: @charity.category, cause: @charity.cause, name: @charity.name, tagline: @charity.tagline } }, as: :json
    end

    assert_response 201
  end

  test "should show charity" do
    get charity_url(@charity), as: :json
    assert_response :success
  end

  test "should update charity" do
    patch charity_url(@charity), params: { charity: { category: @charity.category, cause: @charity.cause, name: @charity.name, tagline: @charity.tagline } }, as: :json
    assert_response 200
  end

  test "should destroy charity" do
    assert_difference('Charity.count', -1) do
      delete charity_url(@charity), as: :json
    end

    assert_response 204
  end
end
