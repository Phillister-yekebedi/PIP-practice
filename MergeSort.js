// Given an array of intergers , use merge sort algorithm to 
// sort the array in ascending order
// let num= [23,45,68,90,34,43,22,4]
// target= 5

function arrInt(array){
    if(array.length <=1){
        return array
    } 
    let middle = Math.floor(array.length/2)
    let left = array.slice(0,middle)
    let right =array.slice(middle) 
     return mergeSort(arrInt(left),arrInt(right))
}
function mergeSort(left,right){
    let empty =[]
    while(right.length &&left.length){
        if(left[0]<right[0]){
            empty.push(left.shift())
        }else{
            empty.push(right.shift())
        }
    }
    return [...empty,...left,...right]
}
 let array =[23,45,68,90,34,43,22,4]   
 console.log(arrInt(array))
   
function search(array,target){
    let left =0
    let right = array.length-1
    let middle = Math.floor((left+right)/2)
    while(left <= right){
        if(array[middle]===target){
            return middle
        }else if(array[middle]< target){
            left = middle+1
        }else{
            right = middle -1
        }
    }
    return null
}  
 let target = 90
 console.log (search(array,target))
   





