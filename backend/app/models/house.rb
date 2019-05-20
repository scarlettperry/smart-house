class House < ApplicationRecord
    has_many :locks
    validates :address, presence: true, uniqueness: true
end
