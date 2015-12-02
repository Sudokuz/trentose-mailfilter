


// model
var MailModel = {
  /**
   * Initialises the model with the "database" of filter rules
   * and messages. This function is already implemented.
   */
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   }, 
  
   /**
    * Filters out messages in the "database" that match the spam rules.
    * @return an array of messages, excluding those that match the filter rules.
    */
    filter : function(){
        var array = [];
        var spam = false;
        
        for (var i in this.messages){
            
            for ( var j in this.rules){
                //if its spam no action
                if (this.messages[i].search(this.rules[j]) != -1) {
                    spam = true;
                }
            }
            //if it isnt spam then pushed into display array
            if(!spam) {array.push( this.messages[i] ); }
            spam = false;
        }
        return array;
    }

  
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]

//view
var MailView = {
    
   htmlStr: "<li>FIELD</li>",
    
    render: function(array){
        $(".result").html("");
        for(var i in array){
            $(".result").append(this.htmlStr.replace("FIELD",array[i]));
        }
    }
    
};

//controller
var MailController = {
    
    //initialises app functionality
    init: function(){
        MailModel.init();
        MailView.render( MailModel.messages );
    },
    
    //updates message list filtering spam according to spam rules
    filter: function(){
        MailView.render(MailModel.filter());   
    }
};



$(document).ready(function(){
    
    MailController.init();
    
    $(".btn-filter").click( function() {
        MailController.filter(); 
    });

});
