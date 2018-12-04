# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@form_id = 0
@maritalstatus = ['Married', 'Unmarried']
@roo = ['Rent', 'Own']
@status = ['New', 'Closed', 'Follow-Up']

User.create(email: 'test@test.com', password: 'password')

30.times do 
  @form_id += 1
  Form.create(
    first: Faker::Name.first_name,
    last: Faker::Name.last_name,
    middle: Faker::Name.middle_name,
    email: Faker::Internet.email,
    cellphone: Faker::PhoneNumber.cell_phone,
    maritalstatus: @maritalstatus.sample,
    dob: Faker::Date.birthday(18, 65),
    addressone: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zipcode: Faker::Address.zip_code,
    yaa: Faker::Number.between(1, 10),
    roo: @roo.sample,
    status: @status.sample,
  )
end 


puts 'Admin Created'
puts 'Leads Generated'