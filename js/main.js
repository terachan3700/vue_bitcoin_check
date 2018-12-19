var app = new Vue({
  el: '#app',
  data: {
    bpi: null
  },
  mounted: function () {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function(response) {
      console.log(response) 
    })
  }
})