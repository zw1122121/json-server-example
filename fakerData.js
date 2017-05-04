const faker = require('faker')
const moment = require('moment')
const _ = require('lodash')

const defaultDateFormat = "YYYY-MM-DD"
const DateFormatWithTime = "YYYY-MM-DD hh:mm:ss"
faker.locale = "zh_CN"
module.exports = () => {
  let users = _.times(100, () => {
    return {
      userId : faker.random.uuid(),
      age : faker.random.number(),
      createTime : moment(faker.date.past()).format(DateFormatWithTime),
      port : faker.name.findName()
    }
  })
  return {
    users : users
  }
}

