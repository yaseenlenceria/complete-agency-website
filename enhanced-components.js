class EnhancedComponents {
    constructor() {
        this.init();
    }

    init() {
        this.addEnhancedStyles();
        this.enhanceExistingContent();
        this.addInteractiveElements();
    }

    addEnhancedStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Enhanced List Styles */
            .enhanced-list {
                list-style: none;
                padding: 0;
                margin: 20px 0;
            }

            .enhanced-list li {
                padding: 12px 0 12px 40px;
                position: relative;
                border-bottom: 1px solid #f1f5f9;
                transition: all 0.3s ease;
            }

            .enhanced-list li:last-child {
                border-bottom: none;
            }

            .enhanced-list li::before {
                content: "✓";
                position: absolute;
                left: 0;
                top: 12px;
                color: #10b981;
                font-weight: bold;
                font-size: 16px;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: rgba(16, 185, 129, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
            }

            .enhanced-list li:hover {
                background: #f8fafc;
                padding-left: 45px;
            }

            /* Info Cards */
            .info-card {
                background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 30px;
                margin: 30px 0;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                transition: all 0.3s ease;
            }

            .info-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            }

            .info-card h3 {
                color: #1e293b;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .info-card p {
                color: #64748b;
                line-height: 1.7;
                margin-bottom: 20px;
            }

            /* Highlight Boxes */
            .highlight-box {
                padding: 25px;
                border-radius: 10px;
                margin: 25px 0;
                border-left: 4px solid #3b82f6;
                background: white;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                transition: all 0.3s ease;
            }

            .highlight-box:hover {
                transform: translateX(5px);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }

            .highlight-box.success {
                border-left-color: #10b981;
                background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02));
            }

            .highlight-box.warning {
                border-left-color: #f59e0b;
                background: linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(245, 158, 11, 0.02));
            }

            .highlight-box.error {
                border-left-color: #ef4444;
                background: linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, 0.02));
            }

            /* Progress Indicators */
            .progress-indicator {
                background: white;
                border-radius: 12px;
                padding: 25px;
                margin: 25px 0;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            }

            .progress-indicator h4 {
                color: #1e293b;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .progress-bar {
                width: 100%;
                height: 8px;
                background: #e2e8f0;
                border-radius: 4px;
                overflow: hidden;
                margin: 8px 0;
            }

            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #3b82f6, #10b981);
                border-radius: 4px;
                transition: width 1s ease;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                .enhanced-list li {
                    padding: 10px 0 10px 35px;
                }

                .info-card {
                    padding: 20px;
                    margin: 15px 0;
                }

                .highlight-box {
                    padding: 20px;
                    margin: 20px 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    enhanceExistingContent() {
        // Enhance existing service lists
        this.enhanceServiceLists();

        // Add info cards for important sections
        this.addInfoCards();

        // Create highlight boxes for key information
        this.addHighlightBoxes();

        // Add progress indicators
        this.addProgressIndicators();
    }

    enhanceServiceLists() {
        const serviceLists = document.querySelectorAll('.service-card ul, .benefit-card ul');
        serviceLists.forEach(list => {
            if (!list.classList.contains('enhanced-list')) {
                list.classList.add('enhanced-list');
            }
        });
    }

    addInfoCards() {
        const sections = document.querySelectorAll('.services-section, .about-section');
        sections.forEach(section => {
            if (!section.querySelector('.info-card')) {
                const infoCard = document.createElement('div');
                infoCard.className = 'info-card';
                infoCard.innerHTML = `
                    <h3>💡 Why This Matters</h3>
                    <p>Our proven approach delivers measurable results that directly impact your business growth and success.</p>
                `;
                section.appendChild(infoCard);
            }
        });
    }

    addHighlightBoxes() {
        const ctaSections = document.querySelectorAll('.cta-section');
        ctaSections.forEach(section => {
            if (!section.querySelector('.highlight-box')) {
                const highlightBox = document.createElement('div');
                highlightBox.className = 'highlight-box success';
                highlightBox.innerHTML = `
                    <strong>Ready to Get Started?</strong> Join hundreds of successful UK businesses who trust our expertise to grow their online presence.
                `;
                section.querySelector('.container').appendChild(highlightBox);
            }
        });
    }

    addProgressIndicators() {
        // This method can be called to add progress indicators where needed
        console.log('Progress indicators ready to be added');
    }

    addInteractiveElements() {
        // Add hover effects and animations
        const cards = document.querySelectorAll('.info-card, .highlight-box');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    addServiceTabs() {
        const servicesDetailed = document.querySelector('.services-detailed');
        if (servicesDetailed && !document.querySelector('.tabs-container')) {
            const tabsContainer = document.createElement('div');
            tabsContainer.className = 'tabs-container';
            tabsContainer.innerHTML = `
                <div class="tabs-nav">
                    <button class="tab-button active" data-tab="local">Local SEO</button>
                    <button class="tab-button" data-tab="technical">Technical SEO</button>
                    <button class="tab-button" data-tab="content">Content Marketing</button>
                    <button class="tab-button" data-tab="links">Link Building</button>
                </div>
                <div class="tab-content active" id="local">
                    <div class="info-card">
                        <h3>Local SEO Mastery</h3>
                        <p>Dominate local search results and attract customers in your area with our proven local SEO strategies.</p>
                        <ul class="enhanced-list">
                            <li class="feature-item">Google Business Profile optimization</li>
                            <li class="feature-item">Local citation building and management</li>
                            <li class="feature-item">Review generation and management</li>
                            <li class="feature-item">Local keyword research and targeting</li>
                            <li class="feature-item">Location-based content creation</li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content" id="technical">
                    <div class="info-card">
                        <h3>Technical SEO Excellence</h3>
                        <p>Ensure your website meets all technical requirements for optimal search engine performance.</p>
                        <ul class="enhanced-list">
                            <li class="feature-item">Core Web Vitals optimization</li>
                            <li class="feature-item">Mobile-first indexing preparation</li>
                            <li class="feature-item">Schema markup implementation</li>
                            <li class="feature-item">Site architecture optimization</li>
                            <li class="feature-item">Technical audit and fixes</li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content" id="content">
                    <div class="info-card">
                        <h3>Content Marketing Strategy</h3>
                        <p>Create valuable, SEO-optimized content that engages your audience and drives conversions.</p>
                        <ul class="enhanced-list">
                            <li class="feature-item">Keyword research and strategy</li>
                            <li class="feature-item">Content creation and optimization</li>
                            <li class="feature-item">Blog management and planning</li>
                            <li class="feature-item">Content performance analysis</li>
                            <li class="feature-item">Topic cluster development</li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content" id="links">
                    <div class="info-card">
                        <h3>Authority Link Building</h3>
                        <p>Build high-quality backlinks that increase your domain authority and search rankings.</p>
                        <ul class="enhanced-list">
                            <li class="feature-item">High-authority backlink acquisition</li>
                            <li class="feature-item">Digital PR campaigns</li>
                            <li class="feature-item">Industry-relevant guest posting</li>
                            <li class="feature-item">Broken link building</li>
                            <li class="feature-item">Competitor backlink analysis</li>
                        </ul>
                    </div>
                </div>
            `;

            // Insert before existing services content
            const servicesContent = servicesDetailed.querySelector('.container');
            if (servicesContent) {
                servicesContent.appendChild(tabsContainer);
            }

            // Add tab functionality
            this.initializeTabs();
        }
    }

    addCollapsibleSections() {
        const processSteps = document.querySelectorAll('.process-step, .seo-process-step');
        processSteps.forEach((step, index) => {
            if (!step.querySelector('.collapsible-content')) {
                const content = step.querySelector('ul, .step-details');
                if (content) {
                    content.classList.add('collapsible-content');
                    content.style.display = index === 0 ? 'block' : 'none';
                    
                    const header = step.querySelector('h3');
                    if (header) {
                        header.style.cursor = 'pointer';
                        header.addEventListener('click', () => {
                            const isVisible = content.style.display === 'block';
                            content.style.display = isVisible ? 'none' : 'block';
                            header.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(5deg)';
                        });
                    }
                }
            }
        });
    }

    initializeTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });
    }

    
    addInteractiveElements() {
        // Add interactive tabs for service details
        this.addServiceTabs();
        
        // Add collapsible content sections
        this.addCollapsibleSections();
    }
}

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new EnhancedComponents();
    });
} else {
    new EnhancedComponents();
}