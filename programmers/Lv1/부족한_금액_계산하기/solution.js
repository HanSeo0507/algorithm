function solution(price, money, count) {
	var total = 0;
	var result = 0;

	for (var i = 1; i < count + 1; i++) {
		total += price * i;
	}

	result = money - total;
	return result >= 0 ? 0 : Math.abs(result);
}
