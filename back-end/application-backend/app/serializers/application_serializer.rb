class ApplicationSerializer < ActiveModel::Serializer
    attributes :id, :position, :description
    belongs_to :company
end