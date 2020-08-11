class Application < ApplicationRecord
    belongs_to :company
    validates :position, :description, presence: true
end
