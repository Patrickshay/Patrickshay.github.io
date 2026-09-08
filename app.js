(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS || [];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const grid = document.getElementById('project-grid');
  const dialog = document.getElementById('project-dialog');
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const githubIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .8a11.3 11.3 0 0 0-3.57 22.02c.56.1.77-.24.77-.54v-2.1c-3.15.68-3.82-1.34-3.82-1.34-.51-1.3-1.26-1.65-1.26-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1 1.72 2.65 1.22 3.3.94.1-.73.4-1.22.71-1.5-2.51-.29-5.15-1.26-5.15-5.59 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.99 0 0 .95-.3 3.1 1.16A10.8 10.8 0 0 1 12 6.28c.96 0 1.92.13 2.83.38 2.15-1.46 3.09-1.16 3.09-1.16.62 1.56.23 2.71.12 2.99.72.79 1.15 1.8 1.15 3.03 0 4.34-2.64 5.3-5.16 5.58.4.35.77 1.04.77 2.1v3.08c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .8Z"/></svg>';
  const tagsHtml = items => items.map(item => `<span>${escapeHtml(item)}</span>`).join('');

  function projectCard(project) {
    const index = projects.indexOf(project) + 1;
    return `<article class="project-card" aria-labelledby="project-${project.id}">
      <div class="project-cover cover-${project.cover}" aria-hidden="true"><div class="cover-meta"><span>PROJECT / ${String(index).padStart(2, '0')}</span><span>PA.</span></div><div class="cover-title">${escapeHtml(project.coverTitle)}</div><div class="cover-foot">${escapeHtml(project.coverFoot)}</div></div>
      <div class="project-content"><p class="project-category">${escapeHtml(project.categoryLabel)}</p><h3 id="project-${project.id}">${escapeHtml(project.title)}</h3><p class="project-description">${escapeHtml(project.summary)}</p><div class="tag-list">${tagsHtml(project.stack)}</div><div class="project-bottom"><button type="button" class="project-detail-button" data-project="${project.id}" aria-label="View details for ${escapeHtml(project.title)}">Explore project <span aria-hidden="true">↗</span></button><a class="project-github" href="${escapeHtml(project.links[0].url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(project.title)} on GitHub">${githubIcon} GitHub</a></div></div></article>`;
  }

  let renderVersion = 0;
  async function renderProjects(filter, animate = true) {
    const version = ++renderVersion;
    const selected = filter === 'all' ? projects : projects.filter(project => project.category === filter);
    grid.getAnimations?.().forEach(animation => animation.cancel());
    if (animate && !prefersReducedMotion.matches && grid.animate) {
      await grid.animate([{opacity:1, transform:'translateY(0)'},{opacity:0, transform:'translateY(8px)'}], {duration:140, fill:'forwards'}).finished.catch(() => {});
      if (version !== renderVersion) return;
    }
    grid.innerHTML = selected.map(projectCard).join('');
    grid.getAnimations?.().forEach(animation => animation.cancel());
    document.getElementById('project-count').textContent = `${selected.length} project${selected.length === 1 ? '' : 's'}`;
    if (animate && !prefersReducedMotion.matches && grid.animate) {
      grid.animate([{opacity:0, transform:'translateY(14px)'},{opacity:1, transform:'translateY(0)'}], {duration:380, easing:'cubic-bezier(.22,1,.36,1)'});
    }
  }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    renderProjects(button.dataset.filter);
  }));
  renderProjects('all', false);

  let lastProjectTrigger = null;
  function openProject(project, trigger) {
    lastProjectTrigger = trigger;
    document.getElementById('dialog-content').innerHTML = `<p class="dialog-category">${escapeHtml(project.categoryLabel)}</p><h2 id="dialog-title">${escapeHtml(project.title)}</h2><p class="dialog-intro">${escapeHtml(project.summary)}</p><div class="tag-list">${tagsHtml(project.stack)}</div><div class="dialog-section"><h3>The idea</h3><p>${escapeHtml(project.context)}</p></div><div class="dialog-section"><h3>Inside the project</h3><ul>${project.details.map(detail => `<li>${escapeHtml(detail)}</li>`).join('')}</ul></div>${project.note ? `<div class="dialog-section"><p>${escapeHtml(project.note)}</p></div>` : ''}<div class="dialog-actions">${project.links.map((link, index) => `<a class="button ${index === 0 ? 'button-dark' : 'button-outline'}" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div>`;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.classList.add('dialog-open');
      dialog.scrollTop = 0;
      dialog.querySelector('.dialog-close').focus();
    } else {
      window.open(project.links[0].url, '_blank', 'noopener,noreferrer');
    }
  }
  grid.addEventListener('click', event => {
    const trigger = event.target.closest('[data-project]');
    if (!trigger) return;
    const project = projects.find(item => item.id === trigger.dataset.project);
    if (project) openProject(project, trigger);
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (lastProjectTrigger?.isConnected) lastProjectTrigger.focus({preventScroll:true});
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-nav');
  function closeMenu() {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }
  menuToggle.addEventListener('click', () => {
    const opened = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(opened));
    menuToggle.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('is-open', opened);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') { closeMenu(); menuToggle.focus(); }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.header-inner')) closeMenu();
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  function activateTab(tab, moveFocus = false) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (moveFocus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {event.preventDefault(); activateTab(tabs[next], true);}
    });
  });

  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js-reveals');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
      else if (entry.boundingClientRect.top > window.innerHeight || entry.boundingClientRect.bottom < 0) entry.target.classList.remove('is-visible');
    }), {threshold:0, rootMargin:'0px 0px -25px 0px'});
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  }
  let scrollTicking = false;
  function updateScroll() {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    document.querySelector('.reading-progress').style.transform = `scaleX(${range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0})`;
    document.querySelector('.site-header').classList.toggle('scrolled', window.scrollY > 15);
    let activeId = '';
    ['work','about','experience','beyond'].forEach(id => {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();
      if (rect.top <= 170 && rect.bottom > 170) activeId = id;
    });
    document.querySelectorAll('[data-nav]').forEach(link => {
      if (link.hash === `#${activeId}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {scrollTicking = true; window.requestAnimationFrame(updateScroll);}
  }, {passive:true});
  window.addEventListener('resize', updateScroll, {passive:true});
  updateScroll();

  const contactAddress = 'pratikshayawadhoot@gmail.com';
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  function composeMessage() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const topic = document.getElementById('contact-topic').value;
    const message = document.getElementById('contact-message').value.trim();
    return {subject:`${topic} — ${name}`, body:`Hi Pratikshay,\n\n${message}\n\nBest,\n${name}\n${email}`};
  }
  function validateMessage() {
    ['contact-name','contact-message'].forEach(id => {
      const input = document.getElementById(id);
      input.setCustomValidity(input.value.trim() ? '' : 'Please fill out this field.');
    });
    return form.reportValidity();
  }
  form.addEventListener('input', event => {event.target.setCustomValidity?.(''); formStatus.textContent = '';});
  function prepareEmail() {
    if (!validateMessage()) return;
    const message = composeMessage();
    window.location.href = `mailto:${contactAddress}?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;
    formStatus.textContent = 'Your draft is ready. Send it from your email app, or use Open in Gmail if no app opened.';
  }
  // This is a local draft composer; never submit form data to a mailto action.
  form.addEventListener('submit', event => event.preventDefault());
  document.getElementById('prepare-email').addEventListener('click', prepareEmail);
  form.addEventListener('keydown', event => {
    if (event.key === 'Enter' && event.target.tagName === 'INPUT' && !event.isComposing) {
      event.preventDefault();
      prepareEmail();
    }
  });
  document.getElementById('gmail-button').addEventListener('click', () => {
    if (!validateMessage()) return;
    const message = composeMessage();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactAddress)}&su=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    formStatus.textContent = 'Finish sending in the Gmail tab. If it did not open, allow the new tab or use your email app.';
  });
  document.getElementById('copy-email').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(contactAddress);
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = `Copy this address: ${contactAddress}`;
    }
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
