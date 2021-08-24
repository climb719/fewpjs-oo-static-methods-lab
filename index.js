class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\s'-]/g, "")
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
     const words =  string.split(' ')
     const intersection = exceptions.filter(element => words.includes(element));
  //  if (words === words[0] || !intersection) {
       const newWords = words.map(word =>
        word[0].toUpperCase() + word.substring(1))
        const newString = newWords.join(" ")
        return newString
     //}
    }

  }
