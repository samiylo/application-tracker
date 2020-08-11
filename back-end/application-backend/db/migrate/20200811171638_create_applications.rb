class CreateApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :applications do |t|
      t.integer :company_id
      t.string :position
      t.string :description
      t.datetime :date

      t.timestamps
    end
  end
end
