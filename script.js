let True = 0
let False = 0
let num = 0

let userName = prompt('Enter your name') || 'Player';
userName = userName.trim() === '' ? 'Player' : userName;
$('#user-name').text(userName);

const words = {
    wordEnglish: ['Apple','Dog ','Blue ','House ','Happy ','Adventure ','Delicious ','Elephant ','Mystery ','Harmony','Intricate','Serendipity ','Ubiquitous ','Esoteric ','Quixotic'],
    wordUkrainian: ['Яблуко','Собака','Синій','Будинок','Щасливий','Пригода','Смачний','Слон','Таємниця','Гармонія','Складний','Серендіпіті','Всюдисущий','Езотеричний','Квіксотичний'],
}
let startSize = words.wordEnglish.length
$('#number').text(
    `${startSize}/0`        
)
let rand = parseInt(Math.random() * words.wordEnglish.length)

$('#question').text(words.wordEnglish[rand])
$('#btn').on('click', ()=>{
    const userAnswer = String($('#answer').val()).trim().toLowerCase();
    const correctAnswer = words.wordUkrainian[rand].toLowerCase();
    
    if (userAnswer === correctAnswer) {
        True++;
        num++;
    
        const delIndex = words.wordUkrainian.findIndex(item => correctAnswer === item);
    
        if (delIndex !== -1) {
            words.wordEnglish.splice(delIndex, 1);
            words.wordUkrainian.splice(delIndex, 1);
        }
    } else {
        alert('Wrong answer');
        False++;
    }
    
    words.wordEnglish.splice(rand, 1);
    words.wordUkrainian.splice(rand, 1);
    
    $('#answer').val('')

    $('#number').text(
        `${startSize}/${num}`
    )
    $('#score').text(
        `True:${True} False:${False}`
    )
    if (words.wordEnglish.length === 0) {
        $('#question').text(`Test over`);
        const levelMessage =
            False === 0 ? 'Your level of English is C2' :
            False < 6 ? 'Your level of English is B2' :
            False < 11 ? 'Your level of English is A2' :
            'Your level of English is A0';
        alert(levelMessage);
    } else {
        rand = Math.floor(Math.random() * words.wordEnglish.length);
        $('#question').text(words.wordEnglish[rand]);
    }
})
