$('.selection.dropdown')
  .dropdown({
    onChange: function(value) {
      $('.test.modal')
        .modal('setting', 'transition', value)
        .modal('show')
      ;
    }
  })
;