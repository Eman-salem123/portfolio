// دالة لفتح وقفل القائمة في شاشات الموبايل
function toggleMenu() {
    const navLinks = document.getElementById("navlinks");
    navLinks.classList.toggle("show");
}

// إضافة ميزة: إغلاق القائمة عند الضغط على أي رابط بداخلها 
// (مفيدة جداً في صفحات الـ Single Page أو لتحسين تجربة المستخدم)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById("navlinks");
        navLinks.classList.remove("show");
    });
});

// إغلاق القائمة إذا ضغط المستخدم في أي مكان خارجها
window.onclick = function(event) {
    const navLinks = document.getElementById("navlinks");
    if (!event.target.matches('.logo') && !event.target.matches('.nav-links') && navLinks.classList.contains('show')) {
        // يمكنك إضافة شرط هنا للتأكد أن الضغطة ليست على زر الـ toggle نفسه
    }
}