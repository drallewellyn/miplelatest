class Admin < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :omniauthable, :registerable, :recoverable, :rememberable, :validatable
  devise :database_authenticatable, :trackable, :timeoutable, :lockable        
end
