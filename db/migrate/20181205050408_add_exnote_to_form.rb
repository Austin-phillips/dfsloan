class AddExnoteToForm < ActiveRecord::Migration[5.2]
  def change
    add_column :forms, :exnote, :text, :default => ''
  end
end
