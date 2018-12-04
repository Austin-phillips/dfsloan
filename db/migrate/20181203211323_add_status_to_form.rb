class AddStatusToForm < ActiveRecord::Migration[5.2]
  def change
    add_column :forms, :status, :string, :default => "New"
  end
end
