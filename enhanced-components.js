
// Enhanced Components for Rich Content Display
class EnhancedComponents {
    constructor() {
        this.init();
    }

    init() {
        this.addComponentStyles();
        this.enhanceExistingContent();
        this.addInteractiveElements();
    }

    addComponentStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Enhanced Content Components */
            .content-section {
                padding: 60px 0;
                position: relative;
                overflow: hidden;
            }

            .content-section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, rgba(59, 130, 246, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%);
                z-index: 1;
            }

            .content-section .container {
                position: relative;
                z-index: 2;
            }

            /* Enhanced List Styles */
            .enhanced-list {
                list-style: none;
                padding: 0;
                margin: 20px 0;
            }

            .enhanced-list li {
                position: relative;
                padding: 12px 0 12px 40px;
                margin-bottom: 8px;
                border-radius: 8px;
                transition: all 0.3s ease;
                background: rgba(255, 255, 255, 0.5);
                border-left: 3px solid transparent;
            }

            .enhanced-list li:hover {
                background: rgba(59, 130, 246, 0.05);
                border-left: 3px solid #3b82f6;
                transform: translateX(5px);
            }

            .enhanced-list li::before {
                content: '';
                position: absolute;
                left: 12px;
                top: 50%;
                transform: translateY(-50%);
                width: 8px;
                height: 8px;
                background: #10b981;
                border-radius: 50%;
                box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
                animation: pulse 2s infinite;
            }

            .enhanced-list li.feature-item::before {
                content: '✓';
                width: auto;
                height: auto;
                background: none;
                color: #10b981;
                font-weight: bold;
                font-size: 14px;
                box-shadow: none;
                animation: none;
            }

            .enhanced-list li.benefit-item::before {
                content: '★';
                width: auto;
                height: auto;
                background: none;
                color: #f59e0b;
                font-weight: bold;
                font-size: 14px;
                box-shadow: none;
                animation: none;
            }

            .enhanced-list li.process-item::before {
                content: counter(process-counter);
                counter-increment: process-counter;
                width: 20px;
                height: 20px;
                background: #3b82f6;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: bold;
                box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
                animation: none;
            }

            .process-list {
                counter-reset: process-counter;
            }

            /* Info Cards */
            .info-card {
                background: white;
                border-radius: 16px;
                padding: 30px;
                margin: 20px 0;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                border: 1px solid #e2e8f0;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .info-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                background: linear-gradient(135deg, #3b82f6, #10b981);
                transition: width 0.3s ease;
            }

            .info-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            }

            .info-card:hover::before {
                width: 8px;
            }

            .info-card h3 {
                color: #1e293b;
                margin-bottom: 15px;
                font-size: 1.3rem;
                font-weight: 700;
            }

            .info-card p {
                color: #64748b;
                line-height: 1.6;
                margin-bottom: 15px;
            }

            /* Highlight Boxes */
            .highlight-box {
                background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                border: 2px solid #0ea5e9;
                border-radius: 12px;
                padding: 25px;
                margin: 25px 0;
                position: relative;
            }

            .highlight-box::before {
                content: 'ℹ️';
                position: absolute;
                top: -10px;
                left: 20px;
                background: #0ea5e9;
                color: white;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
            }

            .highlight-box.success {
                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                border-color: #10b981;
            }

            .highlight-box.success::before {
                content: '✓';
                background: #10b981;
            }

            .highlight-box.warning {
                background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
                border-color: #f59e0b;
            }

            .highlight-box.warning::before {
                content: '⚠️';
                background: #f59e0b;
            }

            /* Interactive Tabs */
            .tabs-container {
                margin: 30px 0;
            }

            .tabs-nav {
                display: flex;
                background: #f8fafc;
                border-radius: 12px;
                padding: 4px;
                margin-bottom: 20px;
                overflow-x: auto;
            }

            .tab-button {
                flex: 1;
                padding: 12px 20px;
                background: transparent;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                color: #64748b;
                cursor: pointer;
                transition: all 0.3s ease;
                white-space: nowrap;
            }

            .tab-button.active {
                background: white;
                color: #3b82f6;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            .tab-content {
                display: none;
                animation: fadeIn 0.3s ease;
            }

            .tab-content.active {
                display: block;
            }

            /* Progress Indicators */
            .progress-indicator {
                background: #f1f5f9;
                border-radius: 12px;
                padding: 20px;
                margin: 20px 0;
            }

            .progress-bar {
                background: #e2e8f0;
                border-radius: 8px;
                height: 8px;
                overflow: hidden;
                margin: 10px 0;
            }

            .progress-fill {
                background: linear-gradient(135deg, #3b82f6, #10b981);
                height: 100%;
                border-radius: 8px;
                transition: width 2s ease;
                animation: progressFill 2s ease;
            }

            /* Animations */
            @keyframes pulse {
                0%, 100% { transform: translateY(-50%) scale(1); }
                50% { transform: translateY(-50%) scale(1.2); }
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @keyframes progressFill {
                from { width: 0; }
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

                .tabs-nav {
                    flex-direction: column;
                }

                .tab-button {
                    flex: none;
                    text-align: left;
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
        const serviceLists = document.querySelectorAll('.service-item ul, .services-list ul');
        serviceLists.forEach(list => {
            if (!list.classList.contains('enhanced-list')) {
                list.classList.add('enhanced-list');
                const items = list.querySelectorAll('li');
                items.forEach(item => {
                    item.classList.add('feature-item');
                });
            }
        });

        // Enhance benefits lists
        const benefitsLists = document.querySelectorAll('.benefit-card ul, .benefits-grid ul');
        benefitsLists.forEach(list => {
            if (!list.classList.contains('enhanced-list')) {
                list.classList.add('enhanced-list');
                const items = list.querySelectorAll('li');
                items.forEach(item => {
                    item.classList.add('benefit-item');
                });
            }
        });
    }

    addInfoCards() {
        const servicesSection = document.querySelector('#services .services-grid');
        if (servicesSection && !document.querySelector('.services-info-card')) {
            const infoCard = document.createElement('div');
            infoCard.className = 'info-card services-info-card';
            infoCard.innerHTML = `
                <h3>🚀 Why Our SEO Services Stand Out</h3>
                <p>Our comprehensive approach combines technical expertise with creative strategy to deliver exceptional results. We don't just improve rankings - we drive real business growth.</p>
                <div class="enhanced-list">
                    <ul>
                        <li class="benefit-item">15+ years of proven industry experience</li>
                        <li class="benefit-item">500+ successful UK businesses served</li>
                        <li class="benefit-item">94% client satisfaction rate</li>
                        <li class="benefit-item">No long-term contracts required</li>
                    </ul>
                </div>
            `;
            servicesSection.parentNode.insertBefore(infoCard, servicesSection);
        }
    }

    addHighlightBoxes() {
        const heroSections = document.querySelectorAll('.hero, .service-hero');
        heroSections.forEach(hero => {
            if (!hero.querySelector('.highlight-box')) {
                const highlightBox = document.createElement('div');
                highlightBox.className = 'highlight-box success';
                highlightBox.innerHTML = `
                    <strong>Free SEO Audit Available!</strong> Get a comprehensive analysis of your website's SEO performance worth £500 - completely free with no obligations.
                `;
                
                const heroContent = hero.querySelector('.hero-content, .container');
                if (heroContent) {
                    heroContent.appendChild(highlightBox);
                }
            }
        });
    }

    addProgressIndicators() {
        const statsSection = document.querySelector('.trust-section, .results-section');
        if (statsSection && !document.querySelector('.progress-indicator')) {
            const progressIndicator = document.createElement('div');
            progressIndicator.className = 'progress-indicator';
            progressIndicator.innerHTML = `
                <h4>Our Success Metrics</h4>
                <div style="margin: 15px 0;">
                    <span>Client Satisfaction</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 94%;"></div>
                    </div>
                    <small>94% satisfaction rate</small>
                </div>
                <div style="margin: 15px 0;">
                    <span>Average Traffic Increase</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 85%;"></div>
                    </div>
                    <small>425% average improvement</small>
                </div>
                <div style="margin: 15px 0;">
                    <span>Success Rate</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 95%;"></div>
                    </div>
                    <small>95% of clients achieve page 1 rankings</small>
                </div>
            `;
            
            statsSection.appendChild(progressIndicator);
        }
    }

    addInteractiveElements() {
        // Add interactive tabs for service details
        this.addServiceTabs();
        
        // Add collapsible content sections
        this.addCollapsibleSections();
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
}

// Initialize enhanced components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new EnhancedComponents();
});
