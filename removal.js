// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxO_qfCLx4f1_Gl6UYVLsI5PixK3LkMEU",
  authDomain: "bgr-api.firebaseapp.com",
  databaseURL: "https://bgr-api-default-rtdb.firebaseio.com/",
  projectId: "bgr-api",
  storageBucket: "bgr-api.appspot.com",
  messagingSenderId: "50853591148"
};

firebase.initializeApp(firebaseConfig);

//create firebase database reference
var dbRef = firebase.database();
var removalRef = dbRef.ref('removal');

//load older conatcts as well as any newly added one...
removalRef.on("child_added", function(snap) {
  $('#removal').append(contactHtmlFromObject(snap.val()));
});


//save contact
document.querySelector('.addValue')
  .addEventListener("click", function( event ) {  
    event.preventDefault();
    if( document.querySelector('#name').value != '' 
          || document.querySelector('#email').value != '' ){
      removalRef.push({
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        extras: document.querySelector('#reason').value,
        secure: "true",
        status: "Pending"
      });
      contactForm.reset();
      document.write('We will review your request very soon!')
    } else {
      alert('Please complete the form!');
    }
  }, false);

//prepare conatct object's HTML
function contactHtmlFromObject(contact){
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div>';
      html += '<p class="lead">'+contact.name+' ('+ contact.artist +') </p>';
      html += '<p> Email: '+contact.email+'</p>';
      html += '<p> Extras: '+contact.extras+'</p>';
      html += '<hr><p>Moderation:</p>';
      html += '<p> Status: '+contact.status+'</p>';
      html += '<p> Secure: '+contact.secure+'</p>';
    html += '</div>';
  html += '</li>';
  html += '<br>';
  return html;
}
