"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.litroAGalon = litroAGalon;
exports.galonaLitro = galonaLitro;
function litroAGalon(litro) {
   return (litro * 0.2641).toFixed(4);
}

function galonaLitro(galon) {
   return (galon * 3.7854).toFixed(4);
}
