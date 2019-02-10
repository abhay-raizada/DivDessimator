console.log('sdfasdfsadfsadfsdafasd')
$(document).on({
    'mouseenter': function(e) {
    $(e.target).css({
        "border-color": "#FF0000", 
        "border-width": "1px",
        "border-style": "solid"
    })
    console.log("mousenter" + $(e.target).attr('class'));
    },
    'mouseleave':  function(e) {
        $(e.target).css({
            "border-color": "", 
            "border-width": "",
            "border-style": ""
        
        });
    console.log("mouseleave" + $(e.target).attr('class'));
    },
    'click': function(e) {
        console.log("Clicked!!!" + $(e.target).attr('class'));
        e.preventDefault();
        $(e.target).css({
            "display": "none"
        });
    }
}, 'div');

