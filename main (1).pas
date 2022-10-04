program Lab1;
var a, b, c:real;
    n:integer;
begin
  Writeln('Insert 2 numbers real: ');
  Readln(a);
  Readln(b);
  Writeln('What you want to do,average or geometric mean: ');
  Read(n);
    If (n = 1) then 
        c:= ((a*b)/2)
        Writeln('Avg: ', c)
        
    else if (n = 2) then
        c:= power((a*b), 1/3)
        Writeln('geometric mean: ', c)
    else
        Writeln('Raspuns Incorect');
end.