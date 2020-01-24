$(document).ready(function() {

    $("form#beep").submit(function(event) {
        var val1 = parseInt($("#boop").val());
        event.preventDefault();
        var numbers = [val1];
        console.log(numbers);
        

        
    });
});
//function range(start, val1) {
          // if (end - start ===2) {
          // return [start + 1];
       // } else{
           // var list = range(start, end -1);
           // list.push(end-1)
           // return list;
       // }
   // }
  // console.log (range(1,10));