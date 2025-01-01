
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('container').classList.remove('hidden');
    }, 3000); // مدة التحميل الوهمي: 3 ثوانٍ
});
