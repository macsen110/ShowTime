beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;
          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    },
    toAddFun: function () {
      return {
        addTest: function (params) {
          console.log(params)
        }
      }
    }
    
  });
});
