function solution(lottos, win_nums) {
	var answer = [];
	var result = [6, 5, 4, 3, 2, 1];

	for (var i = 0, len = win_nums.length; i < len; i++) {
		const num = win_nums[i];
		const index = lottos.indexOf(num);

		if (index !== -1) {
			lottos[index] = null;
			win_nums[i] = null;
		}
	}

	const minCount = lottos.filter((v) => v === null).length;
	const maxCount = minCount + lottos.filter((v) => v === 0).length;

	answer[0] = result[maxCount === 0 ? maxCount : maxCount - 1];
	answer[1] = result[minCount === 0 ? minCount : minCount - 1];

	return answer;
}
