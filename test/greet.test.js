
describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('HELLO, ANDREW', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
        
        assert.equal('HELLO, KAREN', greet('Karen'));
    });
});