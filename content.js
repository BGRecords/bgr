// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJlV-wCAA4CQDG8cHAPsNB1IrRf7kq3uE",
    authDomain: "bgrecords-bc005.firebaseapp.com",
    databaseURL: "https://bgrecords-bc005-default-rtdb.firebaseio.com",
    projectId: "bgrecords-bc005",
    storageBucket: "bgrecords-bc005.appspot.com",
    messagingSenderId: "392065069632",
    appId: "1:392065069632:web:09e6fa179c1a1fce3265a5",
    measurementId: "G-NPTLT89P0Q"
};

firebase.initializeApp(firebaseConfig);

//create firebase database reference
var dbRef = firebase.database();
var usersRef = dbRef.ref('users');

//load older conatcts as well as any newly added one...
usersRef.on("child_added", function(snap) {
  $('#users').append(contactHtmlFromObject(snap.val()));
});


//save contact
document.querySelector('.addValue')
  .addEventListener("click", function( event ) {  
    event.preventDefault();
    if( document.querySelector('#name').value != '' 
          || document.querySelector('#email').value != '' ){
      usersRef.push({
        name: document.querySelector('#name').value,
        artist: document.querySelector('#artist').value,
        email: document.querySelector('#email').value,
        key: document.querySelector('#key').value,
        url: document.querySelector('#url').value,
        songstart: document.querySelector('#songstart').value,
        promo: document.querySelector('#promo').value,
        bgrspot: document.querySelector('#bgrspot').value,
        ytlib: document.querySelector('#ytlib').value,
        cid: document.querySelector('#cid').value,
        publishes: document.querySelector('#publishes').value,
        status: "Pending",
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
      html += '<p> Artist: '+contact.artist+'</p>';
      html += '<p> Artist Key: '+contact.key+'</p>';
      html += '<p> Song Url: '+contact.url+'</p>';
      html += '<p> Song Start At: '+contact.songstart+'</p>';
      html += '<hr><p>Extra Options:</p>';
      html += '<p> Allow Promotion: '+contact.promo+'</p>';
      html += '<p> Add to spotlight: '+contact.bgrspot+'</p>';
      html += '<p> Add to YT Music Libary: '+contact.ytlib+'</p>';
      html += '<p> Content ID: '+contact.cid+'</p>';
      html += '<hr><p>Publishing</p>';
      html += '<p> Publish To: '+contact.publishes+'</p>';
      html += '<hr><p>Moderation:</p>';
      html += '<p> Status: '+contact.status+'</p>';
    html += '</div>';
  html += '</li>';
  html += '<br>';
  return html;
}
