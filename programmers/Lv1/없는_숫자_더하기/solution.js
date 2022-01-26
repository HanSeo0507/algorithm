function solution(numbers) {
	var list = [...Array(10).keys()];
	return list.reduce((acc, curr) => (numbers.indexOf(curr) === -1 ? (acc += curr) : acc));
}
