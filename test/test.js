const expect = require('chai').expect
const conversor = require('..')

describe('#conversor"', function () {

  it('si se ingresa un valor en Litros', function(){
      const translation = conversor.litroAGalon(1)
      expect(translation).to.equal('0.2641')
  })

  it('si se ingresa un valor en Galones', function(){
      const translation = conversor.galonaLitro(1)
      expect(translation).to.equal('3.7854')
  })
})
