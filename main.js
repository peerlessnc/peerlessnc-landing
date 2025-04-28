// Main JavaScript for PeerlessNC Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize time and date display
    initTimeDate();
    
    // Initialize chat functionality
    initChat();
    
    // Initialize any other general functionality
    initGeneralFunctionality();
});

// Time and Date Display
function initTimeDate() {
    function updateDateTime() {
        const now = new Date();
        
        // Format time (HH:MM)
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        
        // Format date (Day, Month DD, YYYY)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('en-US', options);
        
        // Update the DOM
        document.getElementById('current-time').textContent = timeString;
        document.getElementById('current-date').textContent = dateString;
    }
    
    // Update immediately and then every minute
    updateDateTime();
    setInterval(updateDateTime, 60000);
}

// Chat Functionality
function initChat() {
    const chatBubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');
    const openChatBtn = document.getElementById('open-chat-btn');
    
    // Toggle chat window
    function toggleChat() {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            chatInput.focus();
        }
    }
    
    // Open chat from bubble
    chatBubble.addEventListener('click', toggleChat);
    
    // Open chat from support section button
    if (openChatBtn) {
        openChatBtn.addEventListener('click', function() {
            chatWindow.classList.add('active');
            chatInput.focus();
        });
    }
    
    // Close chat
    chatClose.addEventListener('click', function() {
        chatWindow.classList.remove('active');
    });
    
    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message to chat
            addMessage(message, 'user');
            
            // Clear input
            chatInput.value = '';
            
            // Get bot response (will be replaced with actual AI in the future)
            setTimeout(() => {
                getBotResponse(message);
            }, 500);
        }
    }
    
    // Send message on button click
    chatSend.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.classList.add(sender);
        messageElement.textContent = text;
        
        chatMessages.appendChild(messageElement);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Get bot response (simple responses for now)
    function getBotResponse(message) {
        let response;
        
        // Convert message to lowercase for easier matching
        const lowerMessage = message.toLowerCase();
        
        // Check for keywords and provide appropriate responses
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            response = "Hello! How are you feeling today?";
        } 
        else if (lowerMessage.includes('how are you')) {
            response = "I'm here and ready to support you. What's on your mind?";
        }
        else if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('unhappy')) {
            response = "I'm sorry to hear you're feeling down. Remember that it's okay to feel this way sometimes. Would you like to talk about what's causing these feelings?";
        }
        else if (lowerMessage.includes('anxious') || lowerMessage.includes('worried') || lowerMessage.includes('stress')) {
            response = "Anxiety can be challenging. Taking deep breaths can help in the moment. Would you like me to suggest some calming music from our playlist?";
        }
        else if (lowerMessage.includes('happy') || lowerMessage.includes('good') || lowerMessage.includes('great')) {
            response = "I'm glad to hear you're doing well! What's bringing you joy today?";
        }
        else if (lowerMessage.includes('music') || lowerMessage.includes('play') || lowerMessage.includes('song')) {
            response = "Music can be very therapeutic. Try our music player with different emotional soundtracks that match your current mood.";
        }
        else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
            response = "I'm here to support you. You can talk about your feelings, listen to music, or just chat. What would help you most right now?";
        }
        else if (lowerMessage.includes('thank')) {
            response = "You're welcome. I'm always here when you need someone to talk to.";
        }
        else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
            response = "Take care of yourself. Remember, I'm here whenever you need to talk.";
        }
        else {
            response = "I hear you. Would you like to tell me more about that?";
        }
        
        // Add bot response to chat
        addMessage(response, 'bot');
    }
}

// General Functionality
function initGeneralFunctionality() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add any other general functionality here
}
