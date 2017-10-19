export default {
  rando : function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  getTime : function() {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    const mon = month[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    return mon + " " + day + ", " + year;
  },
  getTaggedName : function() {
    const adjectives = ['trusted', 'secure', 'hot', 'new', 'interesting', 'best practice', 'exciting'];

    const nouns = ['es6', 'browserify', 'webpack', 'gulp', 'reactDOM', 'devTools'];

    return this.rando(adjectives) + ' ' + this.rando(nouns);
  }
}