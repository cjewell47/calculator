$(setup);

function setup() {
  $('.number').click(function(e) {
    deleteReset();
    errorReset();
    const value = $(e.target).val();
    $('#screen').text($('#screen').text() + value);
  });

  $('.operator').click(function(e) {
    deleteReset();
    check();
    const operation = $(e.target).val();
    $('#screen').text($('#screen').text() + operation);
  });

  $('#point').click(function() {
    deleteReset();
    $('#screen').text($('#screen').text() + '.');
  });

  $('.cancel').click(function() {
    $('#screen').text('');
  });

  $('#eq').click(function() {
    check();
    $('#screen').text(eval($('#screen').text()));
  });

  $('#save').click(function() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let maths = $('#screen').text();
    let name = window.prompt('Enter the name of this sum');
    let savedMath = $(`<div>
      <button class="savedMaths col-md-8 col-sm-8" value="${maths}">
      ${name} / ${date}</button>
      <button type="button" class="delete col-md-4 col-sm-4" value="deleted">Delete</button>
      </div>`);
    $('.saved').append(savedMath);
    maths = 0;
    name = 0;
    savedMath = 0;
  });

  $('.saved').on('click', $('.savedMaths'), function(e) {
    const savedSum = $(e.target).val();
    $('#screen').text(savedSum);
  });

  $('.saved').on('click', $('.delete'), function(e) {
    if($(e.target).val() === 'deleted') {
      $(e.target).parent().remove();
    }
    console.log('DELETE!!');
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

  function deleteReset() {
    if($('#screen').text().indexOf('deleted') !== -1) {
      $('#screen').text('');
    }
  }
}
