package own;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;
import java.util.StringTokenizer;

public class Bridge2146 {
	static int N;
	static int G[][];
	static int V[][];
	static int count;
	public static void main(String[] args) throws Exception {
		System.setIn(new FileInputStream("input/2146.txt"));
		BufferedReader in = new BufferedReader(new InputStreamReader (System.in));

		N = Integer.parseInt(in.readLine());
		G = new int[N][N];
		V = new int[N][N];
				
		count = 1;
		StringTokenizer st;
		int i, j;
		for(i = 0; i < N; i++) {
			st = new StringTokenizer(in.readLine());
			for(j = 0; j < N; j++) {
				G[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		
		for(i = 0; i < N; i++) {
			for(j = 0; j < N; j++) {
				if(G[i][j] == 1) {
					count++;
					dfs(i, j);
				}
			}
		}
		
		for(i = 0; i < N; i++) {
			System.out.println(Arrays.toString(G[i]));
		}
		
		int min = 1000;
		for(i = 2; i <= count; i++) {
			int bridge = makeBridge(i);
			if(bridge < min) {
				min = bridge;
			}
		}
		
		System.out.println(min);
	}
	
	static int[] dx = {-1, 1, 0, 0};
	static int[] dy = {0, 0, -1, 1};
	static Queue<Pair> queue = new LinkedList<Pair>();
	/*
	private static void bfs(int x, int y) {
		G[x][y] = count;
		queue.offer(new int[] {x, y});
		
		while(!queue.isEmpty()) {
			int[] cur = queue.poll();
			
			for(int i = 0; i < 4; i++) {
				int nextX = cur[0] + dx[i];
				int nextY = cur[1] + dy[i];
				
				if(nextX >= 0 && nextY >= 0 && nextX < N && nextY < N && G[nextX][nextY] == 1) {
					G[nextX][nextY] = count;
					queue.offer(new int[] {nextX, nextY});
				}
			}
		}
	}*/
	/*
	private static void dfs(int x, int y) {
		Stack<Pair> stack = new Stack<Pair>();
		stack.push(new Pair(x, y));
		
		while(!stack.isEmpty()) {
			Pair cur = stack.pop();
			G[cur.x][cur.y] = count;
			
			for(int i = 0; i < 4; i++) {	
				int newX = cur.x + dx[i];
				int newY = cur.y + dy[i];
				
				if(newX >= 0 && newY >= 0 && newX < N && newY < N && G[newX][newY] == 1) {
					stack.push(new Pair(newX, newY));
				}
			}			
		}
	}
	*/
	
	private static void dfs(int x, int y) {
		G[x][y] = count;
		
		for(int i = 0; i < 4; i++) {
			int newX = x + dx[i];
			int newY = y + dy[i];
			
			if(newX >= 0 && newY >= 0 && newX < N && newY < N && G[newX][newY] == 1) {
				dfs(newX, newY);
			}
		}
	}
	
	
	private static int makeBridge(int n) {
		queue.clear();
		int i;
		
		for(i = 0; i < N; i++) {
			for(int j = 0; j < N; j++) {
				if(G[i][j] == n) {
					V[i][j] = 0;
					queue.offer(new Pair(i, j));
				} else {
					V[i][j] = -1;
				}
			}
		}
		
		for(i = 0; i < N; i++) {
			System.out.println(Arrays.toString(V[i]));
		}
		
		while(!queue.isEmpty()) {
			Pair cur = queue.poll();
			
			for(i = 0; i < 4; i++) {
				int newX = cur.x + dx[i];
				int newY = cur.y + dy[i];
				
				if(newX >= 0 && newX < N && newY >= 0 && newY < N && V[newX][newY] == -1) {
					if(G[newX][newY] != 0 && G[newX][newY] != n) {
	                    return V[cur.x][cur.y];
	                }

	                if(G[newX][newY] == 0) {
	                    V[newX][newY] = V[cur.x][cur.y] + 1;
	                    queue.offer(new Pair(newX, newY));
	                }
				}
			}
		}
		
		return 1000;
	}
}

class Pair {
	int x;
	int y;
	
	public Pair(int x, int y) {
		this.x = x;
		this.y = y;
	}
}