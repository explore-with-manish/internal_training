import { IPoint, Point } from './point';

let point: IPoint = new Point(2, 3);

const jsResultSpan = document.querySelector('#jsResult');

if(jsResultSpan) {
    jsResultSpan.innerHTML = point.getDistance().toString();
}
