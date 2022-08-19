export function unique(arr: []) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.')
  }
  const len = arr.length
  let i = -1
  while (i++ < len) {
    let j = i + 1
    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1)
      }
    }
  }
  return arr
}

export function uuid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

export function guid() {
  return new Date().getTime().toString(32) + Math.floor(Math.random() * 10000000000).toString(32) + s4()
}

export function shortId() {
  const id = Math.random() + new Date().getTime()
  return id.toString(16).replace('.', '')
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

/**
 * @description 数组扁平化
 * @param target --目标数组
 */
export function flatter(target: any[]) {
  if (Array.isArray(target)) {
    let result: any[] = []
    target.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(flatter(item))
      } else {
        result.push(item)
      }
    })
    return result
  } else {
    return target
  }
}
