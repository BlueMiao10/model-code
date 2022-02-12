/*
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

 */

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
let groupAnagrams = function (strS) {
  //创建一个map对象，让每个数组当键
  let ans = new Map()
  for(let i = 0;i<strS.length;i++){
    //先把他们排序
    let asc = strS[i].split('').sort().join('')
    //排序之后，之前创建的map里有之前的，就把他们作为一个键的值，否则就新建一个键值对
    if(ans.has(asc)){
      ans.get(asc).push(strS[i])
    }else{
      ans.set(asc,[strS[i]])
    }
  }
  return Array.from(ans.values())
}

console.log(groupAnagrams(strs));


//桶排序应该也能做，把相同的放在一个桶里，在考虑一下