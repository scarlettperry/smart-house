class LockSerializer < ActiveModel::Serializer
  attributes :id, :locked, :house_id, :name
  belongs_to :house
end
