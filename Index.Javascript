document.getElementById('customer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let lastName = document.getElementById('lastName').value;
    let firstName = document.getElementById('firstName').value;
    let address = document.getElementById('address').value;
    let wilaya = document.getElementById('wilaya').value;
    let phone = document.getElementById('phone').value;

    if (lastName && firstName && address && wilaya && phone) {
        alert('تم إرسال طلبك بنجاح!');
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});
