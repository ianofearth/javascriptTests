$(document).ready(function(){
  $('button.dayTimeBtn').click(function(event){
    event.preventDefault();
    $('.dayTime').text('')
    var date = new Date();
    var day = date.getDay();
    if(day === 0){
      dayOfWeek = 'Sunday'
    }else if(day === 1){
      dayOfWeek = 'Monday'
    }else if(day === 2){
      dayOfWeek = 'Tuesday'
    }else if(day === 3){
      dayOfWeek = 'Wednesday'
    }else if(day === 4){
      dayOfWeek = 'Thursday'
    }else if(day === 5){
      dayOfWeek = 'Friday'
    }else{
      dayOfWeek = 'Saturday'
    }
    var hour = date.getHours();
    if(hour > 12){
      hour -= 12;
    }
    var minute = date.getMinutes().toString();
    if(minute.length === 1){
      minute = '0'+ minute
    }
    var time = hour +':'+ minute +' and '+ date.getSeconds() + ' seconds.'

    $('.dayTime').append('Today is '+dayOfWeek+', the time is: '+time);
  });

  $('button.dateFormatBtn').click(function(event){
    event.preventDefault();
    $('.dateFormat').text('')
    var date = new Date();
    var day = date.getDay();
    day = (day -= 1).toString();
    if(day.length === 1){
      day = '0'+day
    }
    var month = date.getMonth();
    month = (month += 1).toString();
    if(month.length === 1){
      month = '0'+month
    }

    var year = date.getFullYear().toString();
    var clickedID = this.id;

    if(clickedID === '1'){
      formattedDate = 'The date is: '+month+'-'+day+'-'+year
    }else if(clickedID === '2'){
      formattedDate = 'The date is: '+month+'/'+day+'/'+year
    }else if(clickedID === '3'){
      formattedDate = 'The date is: '+day+'-'+month+'-'+year
    }else{
      formattedDate = 'The date is: '+day+'/'+month+'/'+year
    }
    $('.dateFormat').append(formattedDate)
    formattedDate = ''
  });

  $('button.cycleLetterBtn').click(function(event){
    event.preventDefault();
    var phrase = $('.cycleLetter').text();
    var length = phrase.length
    var letter = phrase.charAt(length - 1)
    phrase = letter + phrase.substring(0,length-1)

    $('.cycleLetter').text(phrase)
  });

  $('button.getSundayBtn').click(function(event){
    event.preventDefault();
    var date = new Date();
    date.setDate(1)
    date.setMonth(0)
    date.setYear(2014)
    var year = 2014
    for(year; year < 2050; year ++){
      date.setYear(year)
      if(date.getDay() === 0){
        $('.getSunday').append(year + ' ');
      }
    }
  });

  $('form.thinkOfNumberForm').submit(function(event){
    event.preventDefault();
    $('.result').text('');
    $('.guesses').text('');
    var guess = parseInt($('.thinkOfNumber').val());
    if([1,2,3,4,5,6,7,8,9,10].indexOf(guess) === -1){
      alert('Thats not a valid number... You really suck at this...')
    }else{
      var thinkingOf = Math.floor((Math.random()*10)+1);
      if(guess === thinkingOf){
        $('.result').text('Wow, you guessed it!')
      }else{
        $('.result').text('Ha! I knew you would guess wrong!');
      }
      $('.guesses').text('The number I was thinking of was '+thinkingOf+' and you guessed '+guess+'!');
    }
    this.thinkOfNumber.value = '';
    this.thinkOfNumber.focus();
  });
});
