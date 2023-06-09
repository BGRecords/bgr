//<head>
//  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
//  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
//  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
//  <script src="//www.gstatic.com/firebasejs/4.5.0/firebase.js"></script>
//</head>

//<script>
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxO_qfCLx4f1_Gl6UYVLsI5PixK3LkMEU",
    authDomain: "bgr-api.firebaseapp.com",
    databaseURL: "https://bgr-api-default-rtdb.firebaseio.com",
    projectId: "bgr-api",
    storageBucket: "bgr-api.appspot.com",
    messagingSenderId: "50853591148",
    appId: "1:50853591148:web:a4fc4984ae70d01a3bc049",
    measurementId: "G-TNJPKJD7EE"
};

firebase.initializeApp(firebaseConfig);

  var postid = ""
  
  
//create firebase database reference
var dbRef = firebase.database();
var podcastepsRef = dbRef.ref('comments/post/' + postid);

//load older conatcts as well as any newly added one...
podcastepsRef.on("child_added", function(snap) {
  $('#comments').append(contactHtmlFromObject(snap.val()));
});


//save contact
document.querySelector('.addValue')
  .addEventListener("click", function( event ) {  
    event.preventDefault();
    if( document.querySelector('#name').value != '' 
          || document.querySelector('#comment').value != '' ){
      podcastepsRef.push({
        name: document.querySelector('#name').value,
        comment: document.querySelector('#comment').value,
        status: "Posted",
      });
      contactForm.reset();
    } else {
      alert('Please complete the form!');
    }
  }, false);

//prepare conatct object's HTML
function contactHtmlFromObject(contact){
  var html = '';
  html += '<li class="list-group-item contact" style="text-align: left; background-color: silver;">';
    html += '<div>';
      html += '<p class="lead">'+contact.name;
      html += '<p>❛'+contact.comment+'❜</p>';
    html += '</div>';
  html += '</li>';
  html += '<br>';
  return html;
}
//</script>
