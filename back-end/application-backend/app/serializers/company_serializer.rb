class CompanySerializer < ActiveModel::Serializer
    attributes :id, :name, :address
    has_many :applications
end