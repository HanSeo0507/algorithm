function solution(s) {
	var answer = s;
	const list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

	for (var i = 0, len = list.length; i < len; i++) {
		const arr = answer.split(list[i]);
		answer = arr.join(i);
	}

	return parseInt(answer);
}
