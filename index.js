var divideString = function(s, k, fill) {
    let r=s.length%k
    let st=0;
    let e=k;
    if(r!=0){
      s = s.padEnd(s.length+(k-r),fill);
    }
    let arr = [];
    console.log(s);
    for(let i=0;i<parseInt(s.length/k);i++)     {
      arr.push(s.slice(st,e))
        st=st+k;
        e=e+k;
    }
  console.log(arr);
};
let s="abcefghijkl";
let k=4;
let fill="x";
divideString(s,k,fill);