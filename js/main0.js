$(function(){

  $('#generate_click_callback').click(function() {

  console.log('test');
   // marinClickCall();
    reportEvent();
  
  })
});


function marinClickCall() {
  var track = new Image();
   track.src="https://tracker.marinsm.com/tp?act=1&cid=62571g0b12611868&tz=-1&ref=&page=http%3A%2F%2Fwhartleybooth.co.uk%2Fmarin_tests.html%3Fmkwid%3Ds5OV7lY0f";
};

function reportEvent(event) {
    var data = JSON.stringify({
      act: 1,
      test: 2
    });
    navigator.sendBeacon('https://tracker.marinsm.com/tp', data);
  }
