class CreateCharities < ActiveRecord::Migration[5.1]
  def change
    create_table :charities do |t|
      t.string :ein
      t.string :charityName
      t.string :notes

      t.timestamps
    end
  end
end
