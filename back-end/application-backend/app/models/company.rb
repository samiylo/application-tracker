class Company < ApplicationRecord
    has_many :applications, dependent: => :destroy # dependent will destroy an application if the company gets deleted. 
    validates :name, :address, presence: true
end
