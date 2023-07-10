function getNeighbors(row, col, graph) {
  let neighbors = [];
  // Check up
  if (row > 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }

  // Check down
  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check left
  if (col > 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }

  // Check right
  if (col < graph[0].length - 1 && graph[row][col + 1]) {
    neighbors.push([row, col + 1]);
  }
  // Return neighbors

  return neighbors;
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  // Create a stack, put the starting node in the stack
  // Put the stringified starting node in visited
  // Initialize size to 0
  // While the stack is not empty,
  // Pop the first node
  // DO THE THING (increment size by 1)
  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  // This is what your helper function `getNeighbors` is for
  // Remember, you're storing your visited nodes as strings!
  // return size

  let stack = [[row, col]];
  let nodeToString = [row, col].join(",");
  let visited = new Set().add(nodeToString);
  let size = 0;

  while (stack.length > 0) {
    let currNode = stack.pop();
    let [currRow, currCol] = currNode;
    size += 1;

    let neighbors = getNeighbors(currRow, currCol, graph);

    for (let neighbor of neighbors) {
      let nodeStr = neighbor.join(",");
      if (!visited.has(nodeStr)) {
        visited.add(nodeStr);
        stack.push(neighbor);
      }
    }
  }

  return size;
}

module.exports = [getNeighbors, islandSize];
