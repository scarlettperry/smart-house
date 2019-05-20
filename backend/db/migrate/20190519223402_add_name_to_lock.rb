class AddNameToLock < ActiveRecord::Migration[5.2]
  def change
    add_column :locks, :name, :string
  end
end
