const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  items.forEach(i=>io.observe(i));

  const navToggle = document.querySelector('.nav-toggle');
  const mobilePanel = document.querySelector('.mobile-panel');
  navToggle.addEventListener('click', ()=>{
    const isOpen = mobilePanel.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  mobilePanel.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      mobilePanel.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // --- 상담 신청 폼: FormSubmit.co 실서비스 이메일 전송 연동 (가입/키 발급 불필요) ---
  const contactForm = document.getElementById('contactForm');
  const formFields = document.getElementById('formFields');
  const formSuccess = document.getElementById('formSuccess');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const formResetBtn = document.getElementById('formResetBtn');
  const FORMSUBMIT_EMAIL = 'come1252@naver.com';
  if (contactForm) {
    contactForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = '전송 중...';
      formStatus.style.color = 'var(--gold-bright)';
      formStatus.textContent = '신청서를 전송하고 있습니다...';
      const formData = new FormData(contactForm);
      try{
        const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        if (res.ok) {
          // 신청 완료: 입력폼을 감추고 체크마크 확인 패널을 즉시 노출해 전송 여부를 바로 인지시킴
          formFields.style.display = 'none';
          formSuccess.hidden = false;
          contactForm.reset();
        } else {
          formStatus.textContent = '전송에 실패했습니다. 잠시 후 다시 시도해주세요.';
          formStatus.style.color = '#b23a3a';
        }
      } catch(err) {
        formStatus.textContent = '네트워크 오류로 전송하지 못했습니다. 잠시 후 다시 시도해주세요.';
        formStatus.style.color = '#b23a3a';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '상담 신청 보내기';
      }
    });
  }
  if (formResetBtn) {
    formResetBtn.addEventListener('click', ()=>{
      formSuccess.hidden = true;
      formFields.style.display = '';
      formStatus.textContent = '';
    });
  }
