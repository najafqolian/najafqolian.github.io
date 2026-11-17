// (() => {
//     const items = [...document.querySelectorAll('img, video, iframe')].map(media => {
//         const parent = media.parentElement;

//         if (getComputedStyle(parent).position === 'static') {
//             parent.style.position = 'relative';
//         }

//         const label = document.createElement('span');
//         label.className = 'media-watermark';
//         label.textContent = 'najafqolian.github.io';
//         label.setAttribute('aria-hidden', 'true');

//         media.after(label);

//         return { media, label };
//     });

//     function updateWatermarks() {
//         for (const { media, label } of items) {
//             const width = media.offsetWidth;
//             const height = media.offsetHeight;

//             label.hidden = width === 0 || height === 0;

//             if (label.hidden) continue;

//             const inset = Math.min(10, width * 0.04);
//             label.style.fontSize = `${Math.min(12, width / 18)}px`;

//             const isVideo = media.matches('video, iframe');

//             const left = isVideo
//                 ? inset
//                 : width - label.offsetWidth - inset;

//             const top = isVideo
//                 ? inset
//                 : height - label.offsetHeight - inset;

//             label.style.left = `${media.offsetLeft + Math.max(0, left)}px`;
//             label.style.top = `${media.offsetTop + Math.max(0, top)}px`;
//         }
//     }

//     let pendingFrame = 0;

//     function scheduleUpdate() {
//         if (pendingFrame) return;

//         pendingFrame = requestAnimationFrame(() => {
//             pendingFrame = 0;
//             updateWatermarks();
//         });
//     }

//     const observer = new ResizeObserver(scheduleUpdate);

//     for (const { media } of items) {
//         observer.observe(media);
//         observer.observe(media.parentElement);

//         media.addEventListener('load', scheduleUpdate);
//         media.addEventListener('loadedmetadata', scheduleUpdate);
//     }

//     window.addEventListener('resize', scheduleUpdate);

//     scheduleUpdate();
// })();

document.addEventListener('contextmenu', event => {
    if (event.target instanceof HTMLImageElement) {
        event.preventDefault();
    }
});

document.addEventListener('dragstart', event => {
    if (event.target instanceof HTMLImageElement) {
        event.preventDefault();
    }
});