class CreateCharities < ActiveRecord::Migration[5.1]
  def change
    create_table :charities do |t|
      t.string :name
      t.string :tagline
      t.string :cause
      t.integer :rating
      t.text :rating_image
      t.float :score
      t.string :street1
      t.string :street2
      t.string :city
      t.string :state
      t.string :zip
      t.text :mission
      t.integer :ein

      t.timestamps
    end
  end
end
