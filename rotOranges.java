class Solution {
    class Node {
    int time;
    int x, y;
    public Node(int level, int i, int j) {
        time = level;
        x = i;
        y = j;
        // System.out.println(level+" "+x+" "+y);
    }
}
    public int row, col;
    
    public boolean cb(int i, int j){
    // System.out.println(row+" rc"+col);
    if ((i >= 0 && i < row) && (j >= 0 && j < col))
        return true;
    return false;
}
    
    public boolean checkAll(int[][] grid){
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            // System.out.print(grid[i][j]);
            if (grid[i][j] == 1) {
                return true;
            }
        }
    }
    return false;
}
    
    public int orangesRotting(int[][] grid) {
    Queue < Node > q=new LinkedList <> ();
    row = grid.length;
    col = grid[0].length;

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            // System.out.print(grid[i][j]);
            if (grid[i][j] == 2) {
                q.add(new Node(0, i, j));
            }
        }
    }
    Node f = new Node(0, 0, 0);
    while (!q.isEmpty()) {
        f = q.remove();
        cb(0, 0);
        // if(cb(f.x,f.y))
        if (cb(f.x + 1, f.y)) {
            if (grid[f.x + 1][f.y] == 1) {
                q.add(new Node(f.time + 1, f.x + 1, f.y));
                grid[f.x + 1][f.y] = 2;
            }
        }
        if (cb(f.x - 1, f.y)) {
            if (grid[f.x - 1][f.y] == 1) {
                q.add(new Node(f.time + 1, f.x - 1, f.y));
                grid[f.x - 1][f.y] = 2;
            }
        }
        if (cb(f.x, f.y + 1)) {
            if (grid[f.x][f.y + 1] == 1) {
                q.add(new Node(f.time + 1, f.x, f.y + 1));
                grid[f.x][f.y + 1] = 2;
            }
        }
        if (cb(f.x, f.y - 1)) {
            if (grid[f.x][f.y - 1] == 1) {
                q.add(new Node(f.time + 1, f.x, f.y - 1));
                grid[f.x][f.y - 1] = 2;
            }
        }

    }
    if (checkAll(grid)) return -1; return f.time;


}
    
}