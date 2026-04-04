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
    "The Bongino Report": "https://podcasts.apple.com/us/podcast/the-dan-bongino-show/id965293227",
    "Hidden Brain": "https://podcasts.apple.com/us/podcast/hidden-brain/id1028908750",
    "TED Radio Hour": "https://podcasts.apple.com/us/podcast/ted-radio-hour/id523121474",
    "Deep Questions with Cal Newport": "https://podcasts.apple.com/us/podcast/deep-questions-with-cal-newport/id1515786216",
    "Darknet Diaries": "https://podcasts.apple.com/us/podcast/darknet-diaries/id1296350485",
    "The Jordan B. Peterson Podcast": "https://podcasts.apple.com/us/podcast/the-jordan-b-peterson-podcast/id1184022695",
    "Jocko Podcast": "https://podcasts.apple.com/us/podcast/jocko-podcast/id1070322219",
    "The Mel Robbins Podcast": "https://podcasts.apple.com/us/podcast/the-mel-robbins-podcast/id1646609091",
    "Shawn Ryan Show": "https://podcasts.apple.com/us/podcast/shawn-ryan-show/id1492492083",
    "Naval": "https://podcasts.apple.com/us/podcast/naval/id1454097755",
    "MoneyWise": "https://podcasts.apple.com/us/podcast/moneywise/id1443691144"
};

// Function to copy to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
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

// Function to show toast
function showToast(podcastName) {
    const toast = document.getElementById('podcast-toast');
    if (!toast) return;
    
    const title = toast.querySelector('.toast-title');
    const message = toast.querySelector('.toast-message');
    
    title.textContent = `${podcastName}`;
    message.textContent = 'Link copied! Ready to paste into Pod2Book';
    
    // Show toast
    toast.classList.remove('translate-y-32', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    // Hide after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-32', 'opacity-0');
    }, 3500);
}

// Add click handlers to all carousel images
document.addEventListener('DOMContentLoaded', () => {
    // Find all images in the carousel
    const carouselImages = document.querySelectorAll('.animate-scroll img');
    
    carouselImages.forEach(img => {
        const podcastName = img.alt;
        const podcastURL = podcastURLs[podcastName];
        
        if (podcastURL) {
            // Make parent div clickable
            const parent = img.parentElement;
            parent.style.cursor = 'pointer';
            parent.title = `Click to copy ${podcastName} URL`;
            
            // Add visual feedback on hover
            parent.classList.add('hover:ring-4', 'hover:ring-indigo-300', 'hover:ring-opacity-50', 'rounded-lg');
            
            parent.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();
                const success = await copyToClipboard(podcastURL);
                if (success) {
                    showToast(podcastName);
                    // Add quick flash effect
                    parent.classList.add('ring-4', 'ring-green-400');
                    setTimeout(() => {
                        parent.classList.remove('ring-4', 'ring-green-400');
                    }, 300);
                }
            });
        }
    });
});
