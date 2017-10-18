class CreateCharities < ActiveRecord::Migration[5.1]
  def change
    create_table :charities do |t|
      t.string :name
      t.string :tagline
      t.string :cause
      t.integer :rating
      t.text :rating_image
      t.float :score
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.integer :phone
      t.string :email
      t.text :mission

      t.timestamps
    end
  end
end
