class CreateNutrients < ActiveRecord::Migration[5.2]
  def change
    create_table :nutrients do |t|
      t.string :name
      t.string :unit
      t.integer :value
      t.float :gm
      t.belongs_to :dish, foreign_key: true

      t.timestamps
    end
  end
end
