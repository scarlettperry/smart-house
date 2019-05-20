class HouseSerializer < ActiveModel::Serializer
  attributes :id, :address
  has_many :locks
end
