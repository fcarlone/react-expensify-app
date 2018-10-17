import moment from 'moment';

export default [{
  id: '1',
  description: 'Rent',
  amount: 2000,
  note: 'test note data 1',
  createdAt: 0
}, {
  id: '2',
  description: 'Water',
  amount: 3000,
  note: 'test note data 2',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Gas',
  amount: 4000,
  note: 'test note data 3',
  createdAt: moment(0).add(4, 'days').valueOf()
}];
