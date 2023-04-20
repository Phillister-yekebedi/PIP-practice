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



//Given an array of integers [4, 7, 1, 3, 9, 2, 8, 5, 6], show the steps of the 
//merge sort algorithm as it sorts the array in ascending order.
function divide(num){
    if(num.length<=1){
        return num
    }
    let middle = Math.floor(num.length/2)
    let left = num.slice(0,middle)
    let right = num.slice(middle)
    return sorted(divide(divide(left), divide(right)))
}

function sorted(left, right){
    let emptyArray = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
        
    }
    return[...emptyArray,...left,...right]

}
   let num= [4, 7, 1, 3, 9, 2, 8, 5, 6]
   console.log(divide(num))



function divArr(arr){
    if(arr.length<=1){
        return arr
    }
    let middle=Math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return sortArr(divArr(left),divArr(right))
}
function sortArr(left,right){
    let newArr=[]
    while(left.length && right.length){
       
        if(left[0]<right[0]){
            newArr.push(left.shift())
        }
        else{
            newArr.push(right.shift())
        }
    }
    return[...newArr,...left,...right]
}
let arr=[3,4,5,8,10,5]
console.log(divArr(arr))



   





