'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HotelSchema extends Schema {
  up () {
    this.create('hotels', (table) => {
      table.increments()
      table.string('hotelName', 255).notNullable().unique().index()
      table.string('hotelId', 255).notNullable().unique().index()
      table.boolean('reference').defaultTo(false)
      table.text('address')
      table.string('baseUrl', 255)
      table.timestamps()
    })
  }
  // message: "insert into `hotels` (`address`, `baseUrl`, `created_at`, `hotelId`, `hotelName`, `reference`, `updated_at`) values ('Кипр, район Фамагуста, Айя-Напа', NULL, '2020-03-19 20:07:18', '4', '4', true, '2020-03-19 20:07:18') - SQLITE_CONSTRAINT: NOT NULL constraint failed: hotels.baseUrl"

  down () {
    this.drop('hotels')
  }
}

module.exports = HotelSchema
