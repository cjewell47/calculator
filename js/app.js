$(setup);

function setup() {
  let sum;

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
    sum = $('#screen').text();
    $('#screen').text(eval($('#screen').text()));
  });

  $('#save').click(function() {
    let maths = $('#screen').text();
    let name = window.prompt('Enter the name of this sum');
    let savedMath = $(`<button class="savedMaths col-md-8" value="${maths}">
      ${name}</button>
      <button type="button" class="delete col-md-4" name="delete">Delete</button>`);
    $('.saved').append(savedMath);
    sum = 0;
    maths = 0;
    name = 0;
    savedMath = 0;
  });

  $('.saved').on('click', $('.savedMaths'), function(e) {
    const savedSum = $(e.target).val();
    $('#screen').text(savedSum);
  });

  // $('.savedMaths').click(function(e) {
  //   const savedSum = $(e.target).val();
  //   $('#screen').text(savedSum);
  //   console.log('something!!!!!!!!!');
  // });

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
