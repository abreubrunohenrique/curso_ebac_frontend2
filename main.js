$(document).ready(function() {
    $('header button').click(function(e) {
      e.preventDefault()
      const enderecoNovaTarefa = $('#nova-tarefa').val()
      const novoItem = $('<li></li>').addClass('item-tarefa')      
      $(`<div class="overlay">${enderecoNovaTarefa}</div>`).appendTo(novoItem)
      $(novoItem).appendTo('ul')
      $('#nova-tarefa').val('')
    })

  /* não entendi porque esse código não funciona (não aplica o line-through):

    $('li').click(function() {
        $(this).css('text-decoration', 'line-through')
}) 
  */


    $('ul').click('li', function() {
        $(this).css('text-decoration', 'line-through')
    })  
  })