    
    function getMissingNo(a, n)
    {
        let total = Math.floor((n + 1) * (n + 2) / 2);
        for (let i = 0; i < n; i++)
            total -= a[i];
        return total;
    }
    const m=100;
    let arr=[m];
    for (var i = 1; i <= m; i++)
     {
      arr.push(i); 
     }
    let miss = getMissingNo(arr, m);
    document.write(miss);
