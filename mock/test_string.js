function chart(method) {
  let res = null;
  switch (method) {
    case 'GET':
      res = '正确的返回结果！'
      break
    default:
      res = '非GET请求！'
  }
  return res
}

module.exports = chart
