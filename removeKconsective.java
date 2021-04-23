class Solution {
    class Pair{
        int count;
        char c;
        public Pair(char ch,int freq){
            count=freq;
            c=ch;
        }
    }
    
    public String removeDuplicates(String s, int k) {
        Stack<Pair> st= new Stack<>();
        String ans="";
        for(int i=0;i<s.length();i++){
            if(st.size()==0){
                st.push(new Pair(s.charAt(i),1));
                // System.out.println("0 "+s.charAt(i));
                continue;
            }
            if(st.peek().c==s.charAt(i)){
                Pair p = st.peek();
                // System.out.println("ss "+p.c);
                st.pop();
                p.count += 1;
                if(p.count==k){
                    continue;
                }else{
                    st.push(p);
                }
            }else{
                st.push(new Pair(s.charAt(i),1));
                // System.out.println(i+" "+s.charAt(i));
            }
        }
        while(st.size()>0){
            Pair p=st.pop();
            int freq=p.count;
            // System.out.println(p.c+""+st.size());
            while(freq-- > 0){
                ans = p.c + ans;
                // System.out.print(p.c+"char");
            }
        }
        return ans;
    }
}