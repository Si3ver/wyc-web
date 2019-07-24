function chart(method) {
  let res = null;
  switch (method) {
    case 'GET':
      res = '关东水煮'
      break
    default:
      res = '非GET请求！'
  }
  return res
}

module.exports = chart
