describe('fromWhere',function(){
    it('should takes a car registration number as a parameter and returns the town the car is from',function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    })
    it('should takes a car registration number as a parameter and returns the town the car is from',function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
        
    })
  
    });