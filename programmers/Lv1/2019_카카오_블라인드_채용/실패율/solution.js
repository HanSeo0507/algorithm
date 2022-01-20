function solution(N, stages) {
	const failureList = [];

	for (var i = 1; i <= N; i++) {
		const fails = stages.filter((v) => v === i).length;
		const users = stages.filter((v) => v > i).length;
		const failureRate = fails / users;
		failureList[i - 1] = [i, failureRate];
	}

	const sorted = failureList.sort((a, b) => b[1] - a[1]);
	return sorted.map((v) => v[0]);
}
