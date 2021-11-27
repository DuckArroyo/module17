const tiger = function() {
    const noise = 'roar';
    return {
      sound: function() {
        console.log(noise);
      },
    }
  }
  
  const tigger = tiger();
  tigger.sound(); //=> "roar"