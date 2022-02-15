var hasCycle = function(head) {
    let start = head;
    let end = head;
   while (start && start.next) {
       start = start.next.next;
       end = end.next;
       if (start == end) {
           return true;
       }
   }
   
   return false;
}