class CreateLocks < ActiveRecord::Migration[5.2]
  def change
    create_table :locks do |t|
      t.boolean :locked
      t.references :house, index: true

      t.timestamps
    end
  end
end
