function display(x)
{
    if(calc.result.value===x)
    {
    calc.result.value="";
    calc.btnclr.value="Del";        
    }
    calc.dispbox.value=calc.dispbox.value+x;
}

function cleardisplay()
{
    if(calc.btnclr.value==="C")
{
    calc.result.value="";
    calc.btnclr.value="Del";
}
else
{
    var l=calc.dispbox.value.length;
calc.dispbox.value=calc.dispbox.value.slice(0,l-1);
}
}

function resultdisp()
{
    calc.result.value=eval(calc.dispbox.value);
    calc.dispbox.value="";
    calc.btnclr.value="C";
    }

function root()
{
    if(calc.dispbox.value.length>0)
    {
    var r=Math.pow(calc.dispbox.value,0.5);
    calc.result.value=r.toFixed(2);

    calc.dispbox.value="";
    calc.btnclr.value="C";
    }
}