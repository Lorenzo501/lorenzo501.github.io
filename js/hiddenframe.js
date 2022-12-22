var interval;
        $(function()
{
    interval=setInterval("updateActiveElement();", 50);
});

function updateActiveElement()
{
    if ( $(document.activeElement).attr('id')=="hiddenframe" ) 
    {
        clearInterval(interval);
        iflag=1; 
    }    
}//End.