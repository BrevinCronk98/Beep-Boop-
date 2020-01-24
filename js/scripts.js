    var three = /3/;
    var two = /2/;
    var one = /1/;
    
    function rangeGenerator(rng){
        var range =[];
        for( var i =0; i<= rng; i++){
            var str = i.toString();
            if(str.match(three)){
            range.push('"Im Sorry  Im afraid I cant do that"');
            }  else if(str.match(two))  {
               range.push('"boop"');
            }   else if(str.match(one)){
                range.push('"beep"')   
            }  else{
              range.push(i)
            }          
        }
        var phrase = range.join(", ")
        return phrase 
       console.log(phrase)
    }
    $(document).ready(function() {
        $(":reset").click(function() {
            $("#out").text("");
          })
        
          $("#beep").submit(function(event) {
            event.preventDefault();
        
            var num = parseInt($("#boop").val());
            $("#out").text(rangeGenerator(num));
        });
      }); 
    