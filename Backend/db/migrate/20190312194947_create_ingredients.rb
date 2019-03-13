class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :measurement
      t.belongs_to :dish, foreign_key: true

      t.timestamps
    end
  end
end
