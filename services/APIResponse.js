function APIResponse(res) {
  this.res = res
}

APIResponse.prototype.respondWith = function (
  type,
  value = 'Ha ocurrido un error.',
) {
  return this.res.json({ status: type, data: value })
}

module.exports = APIResponse
