$(setup);

function setup() {

  $('.number').click(function(e) {
    errorReset();
    const value = $(e.target).val();
    $('#screen').text($('#screen').text() + value);
  });

  $('.operator').click(function(e) {
    check();
    const operation = $(e.target).val();
    $('#screen').text($('#screen').text() + operation);
  });

  $('#point').click(function() {
    $('#screen').text($('#screen').text() + '.');
  });

  $('.cancel').click(function() {
    $('#screen').text('');
  });

  $('#eq').click(function() {
    check();
    $('#screen').text(eval($('#screen').text()));
  });

  function check() {
    const lastChar = $('#screen').text().slice(-1);
    if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
      $('#screen').text('Error');
    }
  }

  function errorReset() {
    if($('#screen').text().indexOf('Error') !== -1) {
      $('#screen').text('');
    }
  }
}
