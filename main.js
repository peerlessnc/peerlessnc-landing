// Main JavaScript for PeerlessNC Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Stripe with live key
    const stripePublishableKey = 'pk_live_51RIxh2HQ3W7YP7hqPm8FpPxIvK6RX8NiisBncKOiCZoExWgIeLmLkHseyhBEYkPSPgHow6QdlV6enxDy0J9aKxte00xMfBSy7Y';
    
    // Load Stripe.js dynamically
    const stripeScript = document.createElement('script');
    stripeScript.src = 'https://js.stripe.com/v3/';
    stripeScript.onload = function() {
        // Initialize Stripe after script loads
        if (window.Stripe) {
            const stripe = Stripe(stripePublishableKey);
            console.log('Stripe initialized with live key');
        }
    };
    document.head.appendChild(stripeScript);
    
    // Form submission handler
    const inquiryForm = document.getElementById('inquiry-form');
    
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(inquiryForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Show submission confirmation
            alert('Thank you for your inquiry! We will contact you shortly.');
            
            // In production, this would send data to the server
            console.log('Form submission:', formDataObj);
            
            // Reset form
            inquiryForm.reset();
        });
    }
    
    // Payment button placeholders
    const paymentButtons = document.querySelectorAll('.payment-placeholder button');
    
    paymentButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show payment integration message
            alert('PayPal integration is coming soon. Please use Stripe checkout for now.');
        });
    });
    
    // Mobile responsive navigation (if needed in the future)
    setupMobileResponsiveness();
});

// Function to handle mobile responsiveness
function setupMobileResponsiveness() {
    // This function can be expanded if navigation or other mobile-specific features are added
    
    // Check if we're on a mobile device
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    
    if (isMobile) {
        // Mobile-specific adjustments can be added here
        console.log('Mobile view detected');
    }
    
    // Listen for window resize events
    window.addEventListener('resize', function() {
        // Adjust layout if needed on resize
    });
}

// Note: We're using direct payment links for Stripe rather than client-side checkout
// The links will be configured in the Stripe dashboard and added to the HTML
