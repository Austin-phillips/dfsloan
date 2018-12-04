class AddNoteToForms < ActiveRecord::Migration[5.2]
  def change
    add_column :forms, :note, :text, :default => "None"
  end
end
