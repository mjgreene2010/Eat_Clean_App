# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ingredients = [
    {
    ndbno: "09427",
    name: "Abiyuch, raw",
    weight: 114,
    measure: "0.5 cup",
    nutrients: [
        {
        nutrient_id: "208",
        nutrient: "Energy",
        unit: "kcal",
        value: "79",
        gm: 69
        },
        {
        nutrient_id: "269",
        nutrient: "Sugars, total",
        unit: "g",
        value: "9.75",
        gm: 8.55
        },
         {
        nutrient_id: "204",
        nutrient: "Total lipid (fat)",
        unit: "g",
        value: "0.11",
        gm: 0.1
        },
        {
        nutrient_id: "205",
        nutrient: "Carbohydrate, by difference",
        unit: "g",
        value: "20.06",
        gm: 17.6
        }
        ]
    },
    {
    ndbno: "09002",
    name: "Acerola juice, raw",
    weight: 242,
    measure: "1.0 cup",
    nutrients: [
    {
        nutrient_id: "208",
        nutrient: "Energy",
        unit: "kcal",
        value: "56",
        gm: 23
        },
        {
        nutrient_id: "269",
        nutrient: "Sugars, total",
        unit: "g",
        value: "10.89",
        gm: 4.5
        },
        {
        nutrient_id: "204",
        nutrient: "Total lipid (fat)",
        unit: "g",
        value: "0.73",
        gm: 0.3
        },
        {
        nutrient_id: "205",
        nutrient: "Carbohydrate, by difference",
        unit: "g",
        value: "11.62",
        gm: 4.8
        }
        ]
        },
    {
    ndbno: "09001",
    name: "Acerola, (west indian cherry), raw",
    weight: 98,
    measure: "1.0 cup",
        nutrients: [
            {
            nutrient_id: "208",
            nutrient: "Energy",
            unit: "kcal",
            value: "31",
            gm: 32
            },
            {
            nutrient_id: "269",
            nutrient: "Sugars, total",
            unit: "g",
            value: "--",
            gm: "--"
            },
            {
            nutrient_id: "204",
            nutrient: "Total lipid (fat)",
            unit: "g",
            value: "0.29",
            gm: 0.3
            },
            {
            nutrient_id: "205",
            nutrient: "Carbohydrate, by difference",
            unit: "g",
            value: "7.54",
            gm: 7.69
            }
            ]
            }
    