test("add", function() {
     deepEqual(add(2, 3), 5, "adding 2 and 3");
    deepEqual(add(2,7), 9, "adding 2 and 7");
    });

test("sum", function(){
  deepEqual(sum([11, 3, 8]), 22, "adding 11, 3, & 8");
});

test("countEvens", function(){
deepEqual(countEvens([3, 8, 6, 4, 7]), 3, "should be 3 even values");
});

test("makeEvenStringsUppercase", function(){
  var actual = ['hello', 'cohort', 'iv', 'welcome', 'to', 'tdd'];
  var expected = ['hello', 'CoHort', 'IV', 'welcome', 'TO', 'tdd'];
  deepEqual(makeEvenStringsUppercase(actual), expected, "should be 3 uppercased strings");
 });

test("sumLengthOfStrings", function(){
    var strings = "this is a very long string";
    deepEqual(sumLengthOfStrings(strings), 21, "string should be 21 character spaces"); 

    });

test("makeCatWithName", function(){
  deepEqual(makeCatWithName("fluffy").name, "cat's name should be fluffy");
});
