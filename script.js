function fibonacci(num) {
    let i = 0;
	let j = 1;
	while(num > 0){
		
		let k = i + j;
		j = k;
		i = j;

		num--;
		
	}

	return j;

	
}

module.exports = fibonacci;
