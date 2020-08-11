class Company < ApplicationRecord
    has_many :applications
    validates :name, :address, presence: true
end
