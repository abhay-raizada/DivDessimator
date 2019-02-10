var exit = false;
var prevNode = null;
$(document).on({
    'mouseenter': function(e) {
    if (!exit){
        var newNode = e.target
        $(newNode).css({
            "background-color": "#bcd5eb",
            "outline": "1px solid #5166bb"
        })
        console.log("mousenter" + $(e.target).attr('class'));
        if(prevNode) {
            $(prevNode).css({
                "background-color": "",
                "outline": ""
            });
        }
        prevNode = newNode;
    }
    else{
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
            if(prevNode) {
                $(prevNode).css({
                    "background-color": "",
                    "outline": ""
                });
            }
            exit = true 
        }
        else{
            return;
        }
    }
}, 'div');

