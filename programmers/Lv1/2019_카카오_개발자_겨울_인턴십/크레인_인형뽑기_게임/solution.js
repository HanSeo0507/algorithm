function solution(board, moves) {
	var answer = 0;
	var stack = [];

	for (var i = 0, len = moves.length; i < len; i++) {
		const index = moves[i] - 1;
		for (var j = 0, len_ = board.length; j < len_; j++) {
			const item = board[j][index];
			if (item === 0) continue;
			if (item === stack[stack.length - 1]) {
				stack.pop();
				board[j][index] = 0;
				answer += 2;
				break;
			}

			stack[stack.length] = item;
			board[j][index] = 0;
			break;
		}
	}

	return answer;
}
