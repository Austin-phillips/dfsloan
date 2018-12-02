class CreateForms < ActiveRecord::Migration[5.2]
  def change
    create_table :forms do |t|
      t.string :first
      t.string :last
      t.string :middle
      t.string :email
      t.string :cellphone
      t.string :workphone
      t.string :maritalstatus
      t.string :dob
      t.string :addressone
      t.string :addresstwo
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :yaa 
      t.string :roo
      t.string :bfirst
      t.string :blast
      t.string :bmiddle
      t.string :bdob

      t.timestamps
    end
  end
end
