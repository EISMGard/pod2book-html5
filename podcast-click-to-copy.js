// Podcast URL mapping
const podcastURLs = {
    "The Joe Rogan Experience": "https://podcasts.apple.com/us/podcast/the-joe-rogan-experience/id360084272",
    "Crime Junkie": "https://podcasts.apple.com/us/podcast/crime-junkie/id1322200189",
    "Huberman Lab": "https://podcasts.apple.com/us/podcast/huberman-lab/id1545953110",
    "Call Her Daddy": "https://podcasts.apple.com/us/podcast/call-her-daddy/id1418960261",
    "SmartLess": "https://podcasts.apple.com/us/podcast/smartless/id1521578868",
    "Stuff You Should Know": "https://podcasts.apple.com/us/podcast/stuff-you-should-know/id278981407",
    "The Tim Ferriss Show": "https://podcasts.apple.com/us/podcast/the-tim-ferriss-show/id863897795",
    "Freakonomics Radio": "https://podcasts.apple.com/us/podcast/freakonomics-radio/id354668519",
    "Serial": "https://podcasts.apple.com/us/podcast/serial/id917918570",
    "My Favorite Murder": "https://podcasts.apple.com/us/podcast/my-favorite-murder-with-karen-kilgariff-and-georgia/id1074507850",
    "Conan O'Brien Needs a Friend": "https://podcasts.apple.com/us/podcast/conan-obrien-needs-a-friend/id1438054347",
    "Distractible": "https://podcasts.apple.com/us/podcast/distractible/id1567659047",
    "Lex Fridman Podcast": "https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584",
    "Radiolab": "https://podcasts.apple.com/us/podcast/radiolab/id152249110",
    "99% Invisible": "https://podcasts.apple.com/us/podcast/99-invisible/id394775318",
    "How I Built This": "https://podcasts.apple.com/us/podcast/how-i-built-this-with-guy-raz/id1150510297",
    "Dateline NBC": "https://podcasts.apple.com/us/podcast/dateline-nbc/id1464919521",
    "The Dan Bongino Show": "https://podcasts.apple.com/us/podcast/the-dan-bongino-show/id965293227",
    "Hidden Brain": "https://podcasts.apple.com/us/podcast/hidden-brain/id1028908750",
    "TED Radio Hour": "https://podcasts.apple.com/us/podcast/ted-radio-hour/id523121474",
    "Deep Questions with Cal Newport": "https://podcasts.apple.com/us/podcast/deep-questions-with-cal-newport/id1515786216",
    "Darknet Diaries": "https://podcasts.apple.com/us/podcast/darknet-diaries/id1296350485",
    "The Jordan B. Peterson Podcast": "https://podcasts.apple.com/us/podcast/the-jordan-b-peterson-podcast/id1184022695",
    "Jocko Podcast": "https://podcasts.apple.com/us/podcast/jocko-podcast/id1070322219",
    "The Mel Robbins Podcast": "https://podcasts.apple.com/us/podcast/the-mel-robbins-podcast/id1646609091",
    "Shawn Ryan Show": "https://podcasts.apple.com/us/podcast/shawn-ryan-show/id1492492083",
    "Naval": "https://podcasts.apple.com/us/podcast/naval/id1454097755",
    "MoneyWise": "https://podcasts.apple.com/us/podcast/moneywise/id1443691144",
    "CASE STUDIES with Casey Baugh": "https://podcasts.apple.com/us/podcast/case-studies/id1551558661"
};

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (err) {
            document.body.removeChild(textArea);
            return false;
        }
    }
}

function showToast(podcastName) {
    const toast = document.getElementById('podcast-toast');
    if (!toast) return;
    toast.querySelector('.toast-title').textContent = podcastName;
    toast.querySelector('.toast-message').textContent = 'Link copied! Ready to paste into Pod2Book';
    toast.classList.remove('translate-y-32', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-32', 'opacity-0');
    }, 3500);
}

// Drag happened flag — set true during drag, suppresses the click event
let dragHappened = false;

function attachClickHandlers(container) {
    container.querySelectorAll('img').forEach(img => {
        const podcastName = img.alt;
        const podcastURL = podcastURLs[podcastName];
        if (!podcastURL) return;

        const parent = img.parentElement;
        parent.style.cursor = 'pointer';
        parent.title = `Click to copy ${podcastName} URL`;
        parent.classList.add('hover:ring-4', 'hover:ring-indigo-300', 'hover:ring-opacity-50', 'rounded-lg');

        parent.addEventListener('click', async (e) => {
            if (dragHappened) return; // swipe — don't copy
            e.preventDefault();
            e.stopPropagation();
            const success = await copyToClipboard(podcastURL);
            if (success) {
                showToast(podcastName);
                parent.classList.add('ring-4', 'ring-green-400');
                setTimeout(() => parent.classList.remove('ring-4', 'ring-green-400'), 300);
            }
        });
    });
}

function initCarousel() {
    const track = document.querySelector('.animate-scroll');
    if (!track) return;

    // Keep only the first row, remove any HTML duplicates
    const rows = Array.from(track.children);
    rows.slice(1).forEach(r => r.remove());

    const firstRow = rows[0];
    const clone = firstRow.cloneNode(true);
    track.appendChild(clone);

    attachClickHandlers(firstRow);
    attachClickHandlers(clone);

    // Allow horizontal drag but let vertical scroll pass through to the page
    track.style.touchAction = 'pan-y';
    track.style.userSelect = 'none';

    const allImages = firstRow.querySelectorAll('img');
    let loaded = 0;
    const onLoad = () => { if (++loaded >= allImages.length) startAnimation(); };
    allImages.forEach(img => img.complete ? onLoad() : img.addEventListener('load', onLoad));
    setTimeout(startAnimation, 300);

    // Animation state
    let scrollWidth = 0;
    let animDuration = '40s';

    function startAnimation() {
        const gap = 24;
        scrollWidth = firstRow.offsetWidth + gap;

        let style = document.getElementById('carousel-keyframe');
        if (!style) {
            style = document.createElement('style');
            style.id = 'carousel-keyframe';
            document.head.appendChild(style);
        }
        style.textContent = `
            @keyframes carousel-scroll {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-${scrollWidth}px); }
            }
        `;

        const w = window.innerWidth;
        animDuration = w < 640 ? '20s' : w < 1024 ? '28s' : '40s';
        track.style.animationDuration = animDuration;
    }

    // --- Drag / swipe ---

    let isDragging = false;
    let pointerStartX = 0;
    let currentX = 0;
    let totalDragDist = 0;

    function getComputedX() {
        return new DOMMatrix(window.getComputedStyle(track).transform).m41;
    }

    function pauseForDrag() {
        currentX = getComputedX();
        animDuration = track.style.animationDuration || animDuration;
        track.style.animation = 'none';
        track.style.transform = `translateX(${currentX}px)`;
        track.style.cursor = 'grabbing';
    }

    function resumeFromDrag() {
        // Normalise position into [-scrollWidth, 0] for a seamless loop resume
        let pos = currentX % scrollWidth;
        if (pos > 0) pos -= scrollWidth;

        const duration = parseFloat(animDuration);
        const delay = -(Math.abs(pos) / scrollWidth) * duration;

        track.style.transform = '';
        track.style.cursor = '';
        track.style.animation = `carousel-scroll ${animDuration} ${delay}s linear infinite`;
    }

    track.addEventListener('pointerdown', (e) => {
        isDragging = true;
        dragHappened = false;
        totalDragDist = 0;
        pointerStartX = e.clientX;
        pauseForDrag();
        track.setPointerCapture(e.pointerId);
    });

    track.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        const delta = e.clientX - pointerStartX;
        pointerStartX = e.clientX;
        totalDragDist += Math.abs(delta);
        currentX += delta;
        track.style.transform = `translateX(${currentX}px)`;
    });

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        dragHappened = totalDragDist > 5;
        resumeFromDrag();
        // Clear dragHappened after click event has had a chance to fire
        setTimeout(() => { dragHappened = false; }, 50);
    }

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
}

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});
