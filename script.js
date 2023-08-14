let bubblesort= (arr) => {
    let len = arr.length 
    for (let i=len-1 ;i>=0;i--){
        for (let j= 1 ; j<=i ; j++){
            console.log(`Comparing arr ${j - 1} which is ${arr[j - 1]} and arr ${j} which is ${arr[j]}`);

            if(arr[j-1]>arr[j]){
                let temp =arr[j - 1]
                arr[j-1] =arr[j]
                arr[j]= temp
            }
        }
    }
    return arr
}
console.log(bubblesort([7,5,2,4,3,9]));
console.log(bubblesort([9,7,5,4,3,1])); 
console.log(bubblesort([1,2,3,4,5,6])); 

// let bubblesort= (arr) => {
//         let len = arr.length 
//     for (let i=len-1 ;i>=0;i--){
//         console.log(arr[i]);
//     }
// }
// (bubblesort([7,5,2,4,3,9]));

// let nam = (arr) => {
//     let len = arr.length;
//     for (let i = len - 1; i >= 0; i--) {
//         for (let j= 1 ; j<=i ; j++){
//             console.log(arr[j]);
//         }
        
//     }
// }

// nam([7, 5, 2, 4, 3, 9]);