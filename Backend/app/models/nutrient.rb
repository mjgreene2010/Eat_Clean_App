class Nutrient < ApplicationRecord
  belongs_to :dish
  has_many :nutrients, through: :dish
end