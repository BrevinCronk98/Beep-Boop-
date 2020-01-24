$(document).ready(function() {

    $("form#beep").submit(function(event) {
        var end = parseInt($("#boop").val());
        var range = []
        var one = /1/;
        var two = /2/;
        var three = /3/;
;   

        for(var i=0; i <= end; i++){
            range.push( " "+ i ) 
            var ranges= i.toString()
        } if(ranges.match(three)){
            ranges.push("boop")
        }
         
    
        
    
        $("#out").text(range);
        console.log(range);
        console.log(ranges);
        event.preventDefault()

        
        

        
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