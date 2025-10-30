import { IPoint, Point } from './point.js';
import * as _ from 'lodash';

var users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];

let point: IPoint = new Point(2, 3);
console.log(point.getDistance());

console.log(_.orderBy(users, ['user', 'age'], ['asc', 'desc']));
