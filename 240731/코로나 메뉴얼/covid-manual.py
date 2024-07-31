a,b=map(str,input().split())
c,d=map(str,input().split())
e,f=map(str,input().split())
A=0
B=0
C=0
D=0
def solve(x,y):
    global A,B,C,D
    if x=='Y' and int(y)>=37:
        A+=1
    elif x=="N" and int(y)>=37:
        B+=1
    elif x=="Y":
        C+=1
    else:
        D+=1

solve(a,b)
solve(c,d)
solve(e,f)

if A >=2:
    print('E')
else:
    print('N')