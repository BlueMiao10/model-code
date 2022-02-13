//[2,2,4,5,1]   中间大于最右边,最小值出现在右侧,或者左侧第一个
//[1,1,1,0,1]  [1,0,1,1,1] 中间和最右边相等,不好判断
//[2,3,0,1,1]   中间小于最右边,则最小值为中间或者左边

function minNumberInRotateArray(rotateArray) {
  let start = 0
  let end = rotateArray.length - 1
  while (start <= end) {
    let mid = (end + start) >>> 1
    if (rotateArray[mid] > rotateArray[end]) {
      start = mid + 1
    }else if(rotateArray[mid] === rotateArray[end]){
      
    }
  }
}