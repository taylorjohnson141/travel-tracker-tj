import chai from 'chai';
const expect = chai.expect;

describe('Traveler', () => {
  let traveler;
  beforeEach(() => {
    traveler = new Traveler(1);
  });