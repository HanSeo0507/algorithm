function solution(id_list, report, k) {
	var answer = [];
	const targetResult = {};
	const reporterResult = {};
	const idListLength = id_list.length;

	for (var l = 0; l < idListLength; l++) {
		const id = id_list[l];

		targetResult[id] = {};
		reporterResult[id] = {};
	}

	for (var i = 0, len = report.length; i < len; i++) {
		const splitted = report[i].split(" ");
		const reporter = splitted[0],
			target = splitted[1];

		const alreadyReported = targetResult[target][reporter];
		if (!alreadyReported) {
			targetResult[target][reporter] = 1;
			reporterResult[reporter][target] = 1;
		}
	}

	for (var j = 0; j < idListLength; j++) {
		const id = id_list[j];
		const result = reporterResult[id];

		const times = Object.keys(result).reduce((prev, curr) => {
			const willReport = Object.keys(targetResult[curr]).length >= k;
			return willReport ? prev + 1 : prev;
		}, 0);

		answer[j] = times;
	}

	return answer;
}
