module.exports = {
  startExtension: function (data) {
    this.navigate()
    if (data !== undefined) {
      this.api.execute(this.api.globals.initApp, [data])
    }
    return this
  }
}
