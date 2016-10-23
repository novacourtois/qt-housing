/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    firstName: 'Hannah',
    lastName: 'Tyler',
    email: 'look1@test.com',
    username: 'hannah_tyler',
    password: 'test',
    pronouns: 'they / them / their',
    profileType: 'looking'
  }, {
    provider: 'local',
    firstName: 'Nova',
    lastName: 'Courtois',
    email: 'look2@test.com',
    username: 'novacourtois',
    password: 'test',
    pronouns: 'they / them / their',
    profileType: 'looking'
  }, {
    provider: 'local',
    firstName: 'Alex',
    lastName: 'Fire',
    email: 'look3@test.com',
    username: 'alexFire',
    password: 'test',
    pronouns: 'they / them / their',
    profileType: 'looking'
  }, {
    provider: 'local',
    firstName: 'Bree',
    lastName: 'Davis',
    email: 'look4@test.com',
    username: 'breedavis',
    password: 'test',
    pronouns: 'they / them / their',
    profileType: 'looking'
  }, 

  {
    provider: 'local',
    firstName: 'Quinn',
    lastName: 'Last',
    email: 'rent1@test.com',
    username: 'quinnlast',
    password: 'test',
    pronouns: 'they / them / their',
    profileType: 'looking'
  }, {
    provider: 'local',
    firstName: 'Gabi',
    lastName: 'Zero',
    email: 'rent2@test.com',
    username: 'gabizero',
    password: 'test',
    pronouns: 'they / them / their',
    profileType: 'looking'
  }, {
    provider: 'local',
    firstName: 'Riley',
    lastName: 'Glz',
    email: 'rent3@test.com',
    username: 'rileyglz',
    password: 'test',
    pronouns: 'they / them / their',
    profileType: 'looking'
  }, {
    provider: 'local',
    firstName: 'Lou',
    lastName: 'Was',
    email: 'rent4@test.com',
    username: 'whatLou',
    password: 'test',
    pronouns: 'they / them / their',
    profileType: 'looking'
  }, {
    provider: 'local',
    firstName: 'Andi',
    lastName: 'Serpant',
    email: 'rent5@test.com',
    username: 'andAserpent',
    password: 'test',
    pronouns: 'they / them / their',
    profileType: 'looking'
  }, 


  {
    provider: 'local',
    firstName: 'Fake',
    lastName: 'User',
    username: 'FakeUser',
    email: 'test@test.com',
    password: 'password',
    profileType: 'renting',
    age: 18
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});