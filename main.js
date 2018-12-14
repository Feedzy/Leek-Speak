let boutton = document.getElementById('boutton-traduire');

const lettre_alphabet = {
'a': '4','b': '8','e': '3','f': 'ph','g': '6', 
'i': '1', 'o': '0','s': '5','t': '7','c': '(', 
'd': '<|','h': '|-|','k': '|<', 'l': '|', 'm': '|\\/|',
'n': '|\\|','p': '|2','u': '|_|','v': '/', 'x': '><',
'y': '\'/'
  }

  
boutton.addEventListener('click', function()
{
    let texte = document.getElementById('texte_a_traduire').value;
    let tableau = [];
    for (let i = 0; i < lettre_alphabet.length; i++) 
    {
       if (lettre_alphabet[i]== texte.chartAt(1)) 
       {
           lettre = lettre_alphabet[i];
           console.log(lettre);
       }
    }
}, false);