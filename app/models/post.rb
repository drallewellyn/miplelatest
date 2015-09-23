class Post < ActiveRecord::Base
  acts_as_taggable
  acts_as_taggable_on :tags
  validates :title, presence: true, length: {minimum: 5}
  validates :body, presence: true
  extend FriendlyId
  friendly_id :title, use: :slugged

end
