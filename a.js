function fun()
{
    let h=document.getElementsByTagName("input")[0].value
let w=document.getElementsByTagName("input")[1].value
let ans=h/(w*w)
let res;
if(h=="" || w=="")
    {
        ans="Invalid";
        res="Provide Valid Input"
    }
if(ans<18.5)
    {
        res="Under Weight"

    }
else if(ans>=18.5 && ans<=24.9)
    {
        res="Normal Weight"
    }
else if(ans>=25 && ans<=29.9)
    {
        res="Over Weight"
    }
else if(ans>=30)
    {
        res="Obesity"
    }
let r=document.getElementsByTagName("h3")[0]
r.innerHTML="Your BMI = "+(ans)
let r1=document.getElementsByTagName("h2")[0]
r1.innerHTML=res
}