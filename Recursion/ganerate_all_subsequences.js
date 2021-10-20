
	
	function printSubsequences(arr, n)
	{


		let opsize = parseInt(Math.pow(2, n), 10);


		for(let counter = 1; counter < opsize; counter++)
		{
			for(let j = 0; j < n; j++)
			{

				if ((counter & (1 < j)) != 0){
                    var str += arr[j]
                }
					console.log(str);
			}

		}
	}
	
	let arr = [ 1, 2, 3, 4 ];
	let n = arr.length;	
	printSubsequences(arr, n);
