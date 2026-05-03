const getTop = function (element: HTMLElement, start: number) {
  if (element.nodeName === 'HTML') return -start;
  return element.getBoundingClientRect().top + start;
};

const easeInOutCubic = function (t: number) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

const position = function (start: number, end: number, elapsed: number, duration: number) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeInOutCubic(elapsed / duration);
};

const smoothScroll = function (
  el: HTMLElement | number,
  duration = 600,
  callback?: (el: HTMLElement | number) => void,
  context: HTMLElement | Window = window
) {
  const start =
    context instanceof HTMLElement
      ? context.scrollTop
      : window.pageYOffset;
  let end: number;
  if (typeof el === 'number') {
    end = el - 60;
  } else {
    end = getTop(el, start) - 60;
  }

  const clock = Date.now();

  const step = function () {
    const elapsed = Date.now() - clock;
    if (context instanceof HTMLElement) {
      context.scrollTop = position(start, end, elapsed, duration);
    } else {
      window.scroll(0, position(start, end, elapsed, duration));
    }

    if (elapsed > duration) {
      if (typeof callback === 'function') {
        callback(el);
      }
    } else {
      requestAnimationFrame(step);
    }
  };
  step();
};

export default (url: string) =>
  new Promise<void>(function (resolve, reject) {
    const pattern = /^(\/#.+)|(.+(\/#.+))$/;
    if (pattern.test(url)) {
      const hash = pattern
        .exec(url)!
        .filter(item => item)
        .pop()!;
      const id = hash.replace(/\/?#/, '');
      const el = document.getElementById(id);
      if (el) {
        smoothScroll(el, 600, () => resolve());
        return;
      }
    }
    reject(new Error('Error: hash in URL is invalid or element not found!'));
  });
