function Cons(head,tail){
    this.head = head;
    this.tail = tail;
  }
  function toArray(list) {
    if(list){
        var more = list.tail;
        return [list.head].concat(more? toArray(more) : []);
    }
    return [];
  }
  
  Cons.prototype.toArray = function(){ return toArray(this); };
  
  
  Cons.fromArray = function(array){
    if (array.length) {
      return new Cons(array[0], Cons.fromArray(array.slice(1)))
    }
    return null
  }
  
  function funcFilter(consElement, predicate){
    let next = consElement.tail ? funcFilter(consElement.tail, predicate) : null;
    return predicate(consElement.head) ? new Cons(consElement.head, next) : next;
  }
  
  function map1(list, mapper){
    list.head = mapper(list.head)
    if(list.tail !== null) {
    map1(list.tail, mapper)}
    return new Cons(list.head, list.tail);
  }
  
  function map(list, mapper){
    return new Cons(mapper(list.head), list.tail ? map(list.tail, mapper) : null);
  }
  
  Cons.prototype.filter = function(predicate){ return funcFilter(this,predicate); };
  Cons.prototype.map = function(mapper){ return map(this, mapper); };
  
  /*****************************************************************************/
  function toString(list) {
    if(!list) return "null"
    return "[" + list.head + "," + toString(list.tail) + "]"
  }
  
  /*****************************************************************************/
  // Testing block
  console.clear()
  var numbers  = new Cons(1, new Cons(2, new Cons(3, new Cons(4, new Cons(5, null)))));
  console.log("Create list: ", toString(numbers));
  console.log("List to array: ", numbers.toArray());
  let lst = Cons.fromArray([1,2,3,4,5])
  console.log("List from array: ", toString(lst));
  console.log("Filter: ", toString(lst.filter(function(n){ return n % 2 === 0; })));
  var digits = Cons.fromArray(["1","2","3","4","5"]);
  console.log("List from array: ", digits);
  console.log("Map: ", digits.map(function(s){return parseInt(s);}).filter(function(n){ return n > 3;}))