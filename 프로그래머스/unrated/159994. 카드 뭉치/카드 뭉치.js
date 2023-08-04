function solution(cards1, cards2, goal) {
  function canFormGoal(goal, idx1, idx2) {
    if (goal.length === 0) return true;

    const word = goal[0];

    if (idx1 < cards1.length && cards1[idx1] === word) {
      return canFormGoal(goal.slice(1), idx1 + 1, idx2);
    }

    if (idx2 < cards2.length && cards2[idx2] === word) {
      return canFormGoal(goal.slice(1), idx1, idx2 + 1);
    }

    return false;
  }

  return canFormGoal(goal, 0, 0) ? "Yes" : "No";
}