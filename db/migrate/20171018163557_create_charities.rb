class CreateCharities < ActiveRecord::Migration[5.1]
  def change
    create_table :charities do |t|
      t.integer :ein
      t.string :charityName

      t.timestamps
    end
  end
end
