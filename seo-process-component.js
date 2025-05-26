
class SEOProcessComponent {
    constructor() {
        this.processSteps = [
            {
                number: 1,
                icon: 'fas fa-search',
                title: 'Website Audit & Analysis',
                description: 'We start by analyzing your current website using advanced SEO tools to check technical issues, on-page SEO, backlinks, content structure, and speed.',
                features: [
                    'Technical SEO Audit',
                    'On-Page SEO Review',
                    'Mobile & Speed Analysis',
                    'Competitor Benchmarking',
                    'Content Gap Analysis'
                ],
                timeline: '1-2 Days',
                deliverable: 'Comprehensive 50+ Point Audit Report'
            },
            {
                number: 2,
                icon: 'fas fa-chart-line',
                title: 'Google Search Console & Analytics Setup',
                description: 'We connect your website with Google tools to track your traffic, impressions, and search engine visibility.',
                features: [
                    'Setup Google Search Console',
                    'Add Google Analytics 4',
                    'Verify Website Ownership',
                    'Monitor Errors & Performance',
                    'Set Up Conversion Tracking'
                ],
                timeline: '1 Day',
                deliverable: 'Complete Analytics Dashboard Setup'
            },
            {
                number: 3,
                icon: 'fas fa-key',
                title: 'Keyword Research & Strategy',
                description: 'We research the most relevant and high-converting keywords for your business based on your niche, target city, and competitors.',
                features: [
                    'Local & Global Keyword Research',
                    'User Intent Mapping',
                    'Competitor Keyword Gap Analysis',
                    'Keyword Clustering',
                    'Search Volume & Difficulty Analysis'
                ],
                timeline: '3-5 Days',
                deliverable: 'Strategic Keyword Plan (100+ Keywords)'
            },
            {
                number: 4,
                icon: 'fas fa-edit',
                title: 'Content Planning & Creation',
                description: 'We create SEO-optimized content around your target keywords and audience needs — blog posts, landing pages, product/service descriptions.',
                features: [
                    'SEO-Friendly Content Writing',
                    'Topic Clustering',
                    'Internal Linking Strategy',
                    'Content Calendar Planning',
                    'E-A-T Optimization'
                ],
                timeline: 'Ongoing',
                deliverable: 'Monthly Content Calendar & Articles'
            },
            {
                number: 5,
                icon: 'fas fa-cogs',
                title: 'On-Page Optimization',
                description: 'We optimize your site\'s meta tags, headings, images, internal links, and more to boost search engine rankings.',
                features: [
                    'Title Tags & Meta Descriptions',
                    'Image ALT Text & Compression',
                    'URL Structure Optimization',
                    'Schema Markup Implementation',
                    'Core Web Vitals Optimization'
                ],
                timeline: '1-2 Weeks',
                deliverable: 'Complete On-Page Optimization'
            },
            {
                number: 6,
                icon: 'fas fa-link',
                title: 'Off-Page SEO & Link Building',
                description: 'We help build your website\'s authority through ethical link-building and citations.',
                features: [
                    'Quality Backlinks from Niche Sites',
                    'Business Listings & Citations',
                    'Social Signals',
                    'Guest Posting Opportunities',
                    'Digital PR Campaigns'
                ],
                timeline: 'Ongoing',
                deliverable: 'Monthly Link Building Report'
            },
            {
                number: 7,
                icon: 'fas fa-chart-bar',
                title: 'Tracking & Reporting',
                description: 'You\'ll get regular reports showing keyword rankings, organic traffic, and leads.',
                features: [
                    'Monthly SEO Reports',
                    'Google Analytics & Search Console Insights',
                    'Keyword Rank Tracker',
                    'ROI & Goal Tracking',
                    'Performance Dashboard Access'
                ],
                timeline: 'Monthly',
                deliverable: 'Detailed Performance Reports'
            }
        ];

        this.faqs = [
            {
                question: 'How long does SEO take to show results?',
                answer: 'SEO typically takes 3-6 months to show significant results. However, some improvements like technical fixes can have immediate impact. We provide monthly reports to track progress and typically see ranking improvements within 90 days.'
            },
            {
                question: 'What results should I expect from your SEO services?',
                answer: 'Based on our track record, clients typically see a 300-400% increase in organic traffic, 250% more qualified leads, and 200% revenue growth within 12 months. Results vary by industry and competition level.'
            },
            {
                question: 'Is SEO a one-time service or ongoing?',
                answer: 'SEO is an ongoing process. While initial optimization provides a foundation, continuous work is needed to maintain and improve rankings as search algorithms evolve and competitors adapt. We offer flexible monthly packages.'
            },
            {
                question: 'Do you provide regular reports?',
                answer: 'Yes, we provide comprehensive monthly reports including keyword rankings, traffic analysis, conversion tracking, and ROI metrics. You also get 24/7 access to our client dashboard for real-time insights.'
            },
            {
                question: 'Do you guarantee first page rankings?',
                answer: 'While we cannot guarantee specific rankings due to Google\'s algorithm changes, we offer a 90-day money-back guarantee. 94% of our clients achieve first-page rankings for their target keywords within 6 months.'
            }
        ];
    }

    generateHTML(includeTimeline = true, includeFAQ = true) {
        return `
            <section class="seo-process-component">
                <div class="container">
                    <div class="section-header">
                        <h2>Our Proven SEO Process – From Audit to Results</h2>
                        <p>Our systematic 7-step approach ensures your business achieves sustainable growth and dominates search results across the UK.</p>
                    </div>

                    ${includeTimeline ? this.generateTimelineHTML() : ''}
                    ${this.generateStepsHTML()}
                    ${this.generateGuaranteesHTML()}
                    ${includeFAQ ? this.generateFAQHTML() : ''}
                    ${this.generateCTAHTML()}
                </div>
            </section>
        `;
    }

    generateTimelineHTML() {
        return `
            <div class="process-timeline">
                <h3>Expected Timeline to Results</h3>
                <div class="timeline-grid">
                    <div class="timeline-item">
                        <div class="timeline-period">Week 1-2</div>
                        <div class="timeline-milestone">Audit & Setup Complete</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-period">Month 1-2</div>
                        <div class="timeline-milestone">Technical & On-Page Optimization</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-period">Month 3-4</div>
                        <div class="timeline-milestone">Content & Link Building</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-period">Month 4-6</div>
                        <div class="timeline-milestone">Significant Ranking Improvements</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-period">Month 6+</div>
                        <div class="timeline-milestone">Sustained Growth & ROI</div>
                    </div>
                </div>
            </div>
        `;
    }

    generateStepsHTML() {
        return `
            <div class="process-steps">
                ${this.processSteps.map(step => `
                    <div class="process-step" data-step="${step.number}">
                        <div class="step-header">
                            <div class="step-number">${step.number}</div>
                            <div class="step-icon">
                                <i class="${step.icon}"></i>
                            </div>
                            <div class="step-title-section">
                                <h3>${step.title}</h3>
                                <div class="step-timeline">
                                    <i class="fas fa-clock"></i>
                                    <span>${step.timeline}</span>
                                </div>
                            </div>
                        </div>
                        <div class="step-content">
                            <p class="step-description">${step.description}</p>
                            <div class="step-features">
                                ${step.features.map(feature => `
                                    <div class="feature-item">
                                        <i class="fas fa-check"></i>
                                        <span>${feature}</span>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="step-deliverable">
                                <strong>Deliverable:</strong> ${step.deliverable}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    generateGuaranteesHTML() {
        return `
            <div class="process-guarantees">
                <h3>Our Process Guarantees</h3>
                <div class="guarantees-grid">
                    <div class="guarantee-item">
                        <i class="fas fa-shield-alt"></i>
                        <h4>90-Day Money-Back Guarantee</h4>
                        <p>If you don't see measurable improvements in 90 days, we'll refund your investment</p>
                    </div>
                    <div class="guarantee-item">
                        <i class="fas fa-chart-line"></i>
                        <h4>Transparent Reporting</h4>
                        <p>Monthly detailed reports showing exactly what we've done and the results achieved</p>
                    </div>
                    <div class="guarantee-item">
                        <i class="fas fa-users"></i>
                        <h4>Dedicated Account Manager</h4>
                        <p>Direct access to your SEO specialist and strategic guidance every step of the way</p>
                    </div>
                    <div class="guarantee-item">
                        <i class="fas fa-tools"></i>
                        <h4>White-Hat Methods Only</h4>
                        <p>Ethical SEO practices that protect your business from Google penalties</p>
                    </div>
                </div>
            </div>
        `;
    }

    generateFAQHTML() {
        return `
            <div class="process-faq">
                <h3>Frequently Asked Questions About Our Process</h3>
                <div class="faq-list">
                    ${this.faqs.map((faq, index) => `
                        <div class="faq-item">
                            <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                                <span>${faq.question}</span>
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="faq-answer">
                                <div class="faq-content">
                                    <p>${faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generateCTAHTML() {
        return `
            <div class="process-cta">
                <h3>Ready to Start Your SEO Journey?</h3>
                <p>Get a comprehensive SEO audit and strategic plan tailored to your business. We'll show you exactly what's possible and how we'll help you dominate Google search results.</p>
                <div class="cta-buttons">
                    <a href="contact.html" class="btn-primary large">
                        <i class="fas fa-rocket"></i>
                        Get Your Free SEO Audit (Worth £500)
                    </a>
                    <div class="cta-guarantee">
                        <i class="fas fa-shield-alt"></i>
                        <span>90-day results guarantee • No long-term contracts</span>
                    </div>
                </div>
            </div>
        `;
    }

    init(container, options = {}) {
        if (!container) {
            console.error('SEO Process container not found');
            return;
        }

        const {
            includeTimeline = true,
            includeFAQ = true
        } = options;

        container.innerHTML = this.generateHTML(includeTimeline, includeFAQ);
        this.initializeAnimations();
    }

    initializeAnimations() {
        // Add scroll animations for process steps
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.process-step').forEach(step => {
            observer.observe(step);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Auto-initialize on pages with seo-process-section
    const processContainer = document.getElementById('seo-process-section');
    if (processContainer) {
        const seoProcess = new SEOProcessComponent();
        seoProcess.init(processContainer);
    }
});

// Export for use in other files
if (typeof window !== 'undefined') {
    window.SEOProcessComponent = SEOProcessComponent;
}
