var hasCycle = function(head) {
    let pr = head;
    let nxt = head;
   while (pr && pr.next) {
       pr = pr.next.next;
       nxt = nxt.next;
       if (pr == nxt) {
           return true;
       }
   }
   
   return false;
}