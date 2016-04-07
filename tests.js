test("hello test", function() {
  ok(1 == "1", "passed!");
});

test("add test", function() {
  equal( hoge.add(1)(2) , 3, "adding test");
  equal( hoge.add(4)(2) , 3, "fail test");
});