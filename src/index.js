import './index.css';
import numeral from 'numeral';

const courseValue = numeral(10000).format('$0,0.00');
console.log(`I would love to pay ${courseValue} for this awesome course!`);// eslint-disable-line no-console
