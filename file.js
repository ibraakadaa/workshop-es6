function rowSumOddNumbers1(num)
{ var x1
 var j,i,od
  s=0
  

  a=[] //le problem est comment declarer un tableau bidimentionnel
  od=1
  for(i=0;i<num;i++)
{ 
for(j=0;j<num;j++)
{ if(od%2===1)
  {a[i][j]=od}
  //b[j]=od 
   od++
}
//a[i]=b
// od=b[j]
od=a[i][j]
 
}
for(x1=0 ;x1<num ;x1++)
    
    {  s=s+a[i][x1]  }
}






function rowSumOddNumbers2(num)
{ var x1
 var j,i,od
  s=0
  

  a=[]
  od=1
  for(i=0;i<num;i++)
{ b=[]
for(j=0;j<num;j++)
{ if(od%2===1)
  {
  b[j]=od 
   od++}
}
a[i]=b
od=b[j]
 
}
for(x1=0 ;x1<num ;x1++)
    
    {  s=s+a[i][x1]  //le dernier index de i}
} }




var monTableau = [
  ["Paul", "Jean"],
  ["Pierre","Marc"]
 ];
 console.log(monTableau[0][0]);
  