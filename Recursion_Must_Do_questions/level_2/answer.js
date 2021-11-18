function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 1)
        {
            console.log("Move disk 1 from rod " + from_rod +
            " to rod " + to_rod);
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
 
    var n = 4; // Number of disks
    // towerOfHanoi(n, 'A', 'C', 'B');


    function inAndec(n){
        if(n==1){
            return n;
        }
        return n * inAndec(n-1)
        
    }
    console.log(inAndec(3))