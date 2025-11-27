// 1. 滚动触发动画（section进入视图时显示）
const animateSections = document.querySelectorAll('.section-animate');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

animateSections.forEach(section => {
    observer.observe(section);
});

// 2. 回到顶部按钮
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. 表单提交反馈
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('留言发送成功！我们会尽快回复你~');
    contactForm.reset();
});

// 4. 导航栏滚动效果
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.padding = '0.8rem 0';
        navbar.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = 'var(--shadow)';
    }
});