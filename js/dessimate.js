var exit = false
$(document).on({
    'mouseenter': function(e) {
    if (!exit){
        $(e.target).css({
            "border-color": "#FF0000", 
            "border-width": "1px",
            "border-style": "solid"
        })
        console.log("mousenter" + $(e.target).attr('class'));
    }
    else{
        return;
    }
    },
    'mouseleave':  function(e) {
    if (!exit){
        $(e.target).css({
            "border-color": "", 
            "border-width": "",
            "border-style": ""
        
        });
        console.log("mouseleave" + $(e.target).attr('class'));
    }
    else {
        return;
    }
    },
    'click': function(e) {
        if(!exit){
            console.log("Clicked!!!" + $(e.target).attr('class'));
            e.preventDefault();
            $(e.target).css({
                "display": "none"
            });
            exit = true 
        }
        else{
            return;
        }
    }
}, 'div');

