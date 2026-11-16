// FILE: script.js

document.addEventListener("DOMContentLoaded", function () {
    
    // --- SKILLS CHART CONFIGURATION ---
    const ctx = document.getElementById('skillsChart').getContext('2d');

    // Create Gradient for the area under the line (Blue/Green fade)
    let gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill.addColorStop(0, 'rgba(14, 165, 233, 0.4)'); // Top color (Blue)
    gradientFill.addColorStop(1, 'rgba(14, 165, 233, 0.0)'); // Bottom color (Transparent)

    const skillsChart = new Chart(ctx, {
        type: 'line',
        data: {
            // Months on X-Axis
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets:, // The wavy data line
                borderColor: '#0ea5e9', // Neon Blue Line
                backgroundColor: gradientFill, // The fade effect
                borderWidth: 3,
                pointBackgroundColor: '#1e293b', // Dark dot center
                pointBorderColor: '#0ea5e9', // Blue dot border
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true, // Enable the gradient fill area
                tension: 0.4 // Smooth Bezier curves (not jagged)
            },
            {
                label: 'Target',
                data: , // Secondary Green Line
                borderColor: '#22c55e', // Neon Green
                borderWidth: 2,
                borderDash: , // Dashed line for "Target"
                pointRadius: 0, // No dots for this line
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Hide legend to match image cleanliness
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)' // Faint horizontal grid
                    },
                    ticks: {
                        color: '#64748b',
                        font: { size: 10 }
                    },
                    border: { display: false } // Remove Y-axis line
                },
                x: {
                    grid: { display: false }, // Remove vertical grid lines
                    ticks: {
                        color: '#64748b',
                        font: { size: 10 }
                    },
                    border: { display: false }
                }
            }
        }
    });

    // --- INTERACTIVITY (Optional Chat Simulation) ---
    const sendBtn = document.querySelector('.chat-input-area button');
    const inputField = document.querySelector('.chat-input-area input');
    const chatHistory = document.querySelector('.chat-history');

    sendBtn.addEventListener('click', () => {
        const text = inputField.value;
        if(text.trim() === "") return;

        // 1. Add User Message
        const userMsg = document.createElement('div');
        userMsg.className = 'msg user';
        userMsg.innerHTML = `<p>${text}</p>`;
        chatHistory.appendChild(userMsg);
        inputField.value = "";

        // Auto-scroll to bottom
        chatHistory.scrollTop = chatHistory.scrollHeight;

        // 2. Simulate AI Reply (Delayed)
        setTimeout(() => {
            const aiMsg = document.createElement('div');
            aiMsg.className = 'msg ai';
            aiMsg.innerHTML = `<p>I've updated your goals based on "${text}". Check your path!</p>`;
            chatHistory.appendChild(aiMsg);
            chatHistory.scrollTop = chatHistory.scrollHeight;
        }, 1000);
    });
});