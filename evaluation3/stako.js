for (let i = 1; i < n; i++) {
   
    while (s.length != 0 && price[s[s.length - 1]] <= price[i])
        s.pop();

  
    let span = (s.length == 0) ? (i + 1) : (i - s[s.length - 1]);
    S[i] = span;

   
    s.push(i);
}

return S;
}
