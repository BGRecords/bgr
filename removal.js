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
var usersRef = dbRef.ref('removal');

//load older conatcts as well as any newly added one...
usersRef.on("child_added", function(snap) {
  $('#removal').append(contactHtmlFromObject(snap.val()));
});


//save contact
document.querySelector('.addValue')
  .addEventListener("click", function( event ) {  
    event.preventDefault();
    if( document.querySelector('#name').value != '' 
          || document.querySelector('#email').value != '' ){
      usersRef.push({
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        extras: document.querySelector('#reason').value,
        artist: document.querySelector('#artist').value,
        paypal: document.querySelector('#paypal').value,
        promote: document.querySelector('#promo').value,
        copyright: document.querySelector('#copyright').value,
        oac: document.querySelector('#oac').value,
        cid: document.querySelector('#cid').value,
        artistkey: Math.floor(Math.random() * 999999) + 111111,
        status: "Pending",
        secure: "true",
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
      html += '<p> Artist Name: '+contact.artist+'</p>';
      html += '<p> PayPal: '+contact.paypal+'</p>';
      html += '<p> Artist Key: '+contact.artistkey+'</p>';
      html += '<hr><p>Extra Options:</p>';
      html += '<p> Allow Promotions: '+contact.promote+'</p>';
      html += '<p> Allow Copyright: '+contact.copyright+'</p>';
      html += '<p> Allow OAC: '+contact.oac+'</p>';
      html += '<p> Allow Content ID: '+contact.cid+'</p>';
      html += '<hr><p>Moderation:</p>';
      html += '<p> Status: '+contact.status+'</p>';
      html += '<p> Secure: '+contact.secure+'</p>';
    html += '</div>';
  html += '</li>';
  html += '<br>';
  return html;
}
