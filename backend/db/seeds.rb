# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

House.destroy_all
Lock.destroy_all

home1 = House.create(address: "P Sherman 42 Wallaby, Sydney, AU")
home2 = House.create(address: "124 Conch Street, Bikini Bottom, Ocean")

device1 = Lock.create(house_id: home1.id, locked: true, name: "Front Door")
device2 = Lock.create(house_id: home2.id, locked: false, name: "Garage")

