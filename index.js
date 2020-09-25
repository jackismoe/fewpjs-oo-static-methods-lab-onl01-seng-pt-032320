class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let ex = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let res = []
    let wordArray = string.split(' ')
    for (let n in wordArray) {
      if (n == 0) {
        res.push(this.capitalize(wordArray[n]))
      } else {
        if (ex.includes(wordArray[n])) {
          res.push(wordArray[n])
        } else {
          res.push(this.capitalize(wordArray[n]))
        }
      }
    }
    return res.join(' ')
  }
}