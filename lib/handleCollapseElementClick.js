// https://gist.github.com/jbutz/47355837c0874f1fa284e525eb3ee188#file-main-js
const CLASS_SHOW = 'show';
const CLASS_COLLAPSE = 'collapse';
const CLASS_COLLAPSING = 'collapsing';
const CLASS_COLLAPSED = 'collapsed';
const ANIMATION_TIME = 350; // 0.35s

function handleCollapseElementClick(e) {
  const el = e.currentTarget;
  const collapseTargetId = el.dataset.target || el.href || null;
  if (collapseTargetId) {
    const targetEl = document.querySelector(collapseTargetId);
    const isShown =
      targetEl.classList.contains(CLASS_SHOW) ||
      targetEl.classList.contains(CLASS_COLLAPSING);
    if (!isShown) {
      targetEl.classList.remove(CLASS_COLLAPSE);
      targetEl.classList.add(CLASS_COLLAPSING);
      targetEl.style.height = 0;
      targetEl.classList.remove(CLASS_COLLAPSED);
      setTimeout(() => {
        targetEl.classList.remove(CLASS_COLLAPSING);
        targetEl.classList.add(CLASS_COLLAPSE, CLASS_SHOW);
        targetEl.style.height = '';
      }, ANIMATION_TIME);
      targetEl.style.height = targetEl.scrollHeight + 'px';
    } else {
      targetEl.style.height = `${targetEl.getBoundingClientRect().height}px`;
      targetEl.offsetHeight; // force reflow
      targetEl.classList.add(CLASS_COLLAPSING);
      targetEl.classList.remove(CLASS_COLLAPSE, CLASS_SHOW);
      targetEl.style.height = '';
      setTimeout(() => {
        targetEl.classList.remove(CLASS_COLLAPSING);
        targetEl.classList.add(CLASS_COLLAPSE);
      }, ANIMATION_TIME);
    }
  }
}

export default handleCollapseElementClick;
