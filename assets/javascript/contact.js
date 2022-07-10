function getData() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone_number = document.getElementById('phone_number').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (name == '' || email == '' || phone_number == '' || subject == '' || message == '') {
    alert('Formulir tidak boleh kosong');
  } else {
    alert('Pesan berhasil terkirim');
  }
  let form = document.getElementById('contact');
  form.reset();

  let emailReceiver = 'ar834652@gmail.com';

  let a = document.createElement('a');
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hai, Aku ${name}, ${message}, Respon melalui email ${email} ini atau nomor telpon ${phone} ini. sekian terima kasih`;
  a.click();
}
