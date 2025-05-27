
class FAQComponent {
    constructor() {
        this.faqs = {
            general: [
                {
                    question: "What makes OutSourceSU different from other SEO agencies?",
                    answer: "OutSourceSU stands out with our 15+ years of proven experience, 94% success rate, and specialized expertise across UK industries. We offer guaranteed results, transparent reporting, and no long-term contracts - you only pay for performance."
                },
                {
                    question: "How long does it take to see SEO results?",
                    answer: "Most of our clients see significant improvements within 90 days. We guarantee measurable results within this timeframe or provide a full refund. However, SEO is a long-term strategy that continues to improve over 6-12 months."
                },
                {
                    question: "Do you offer SEO services across all UK cities?",
                    answer: "Yes, we provide comprehensive SEO services across all major UK cities including London, Manchester, Birmingham, Leeds, Liverpool, Sheffield, Bristol, Newcastle, Edinburgh, Cardiff, and Belfast. Our local expertise covers over 60 UK locations."
                },
                {
                    question: "What industries do you specialize in?",
                    answer: "We specialize in construction, roofing, law firms, dental practices, real estate, financial services, healthcare, accounting, and professional services. Our industry-specific approach delivers better results than generic SEO strategies."
                },
                {
                    question: "Do you provide monthly SEO reports?",
                    answer: "Yes, we provide detailed monthly reports showing keyword rankings, traffic growth, leads generated, and ROI. You'll have a dedicated account manager and full transparency into your SEO campaign performance."
                },
                {
                    question: "What's included in your free SEO audit?",
                    answer: "Our comprehensive audit includes technical SEO analysis, keyword opportunity assessment, competitor analysis, local SEO review, and a custom strategy roadmap. It's worth £500 and comes with actionable recommendations."
                }
            ],
            industries: [
                {
                    question: "Do you understand our specific industry challenges?",
                    answer: "Absolutely. We've worked with 500+ businesses across construction, roofing, legal, medical, and professional services. We understand industry regulations, customer behavior, and competition patterns specific to your sector."
                },
                {
                    question: "Can you help with industry-specific keywords?",
                    answer: "Yes, we conduct thorough keyword research for your industry, including high-converting commercial terms, emergency services, and local search phrases that your potential customers actually use."
                },
                {
                    question: "How do you handle regulated industries like legal and medical?",
                    answer: "We're fully compliant with industry regulations including SRA guidelines for law firms and GDC requirements for dental practices. Our content strategies respect professional standards while maximizing search visibility."
                }
            ],
            local: [
                {
                    question: "Do you optimize for local search results?",
                    answer: "Local SEO is our specialty. We optimize Google My Business profiles, local citations, reviews, and location-specific landing pages to ensure you dominate local searches in your area."
                },
                {
                    question: "Can you help with multiple business locations?",
                    answer: "Yes, we manage multi-location SEO campaigns for businesses with multiple offices or service areas. Each location gets customized optimization while maintaining brand consistency."
                },
                {
                    question: "How do you improve local search rankings?",
                    answer: "We optimize your Google My Business profile, build local citations, create location-specific content, manage customer reviews, and implement local schema markup to improve your visibility in local search results."
                }
            ],
            technical: [
                {
                    question: "What technical SEO issues do you fix?",
                    answer: "We address site speed optimization, mobile responsiveness, SSL certificates, XML sitemaps, robots.txt files, schema markup, crawl errors, and technical issues that prevent search engines from properly indexing your site."
                },
                {
                    question: "Do you work with all website platforms?",
                    answer: "Yes, we work with WordPress, Wix, Squarespace, Shopify, custom HTML sites, and most major platforms. Our technical team can optimize any website regardless of the underlying technology."
                },
                {
                    question: "How do you measure SEO success?",
                    answer: "We track keyword rankings, organic traffic growth, lead generation, conversion rates, and ROI. You'll receive detailed monthly reports showing exactly how your SEO investment is performing."
                }
            ]
        };
    }

    render(container, category = 'general') {
        const faqs = this.faqData[category] || this.faqData.general;
        
        container.innerHTML = `
            <section class="faq-section">
                <div class="container">
                    <h2>Frequently Asked Questions</h2>
                    <div class="faq-list">
                        ${faqs.map((faq, index) => `
                            <div class="faq-item">
                                <button class="faq-question" onclick="toggleFAQ(${index})">
                                    ${faq.question}
                                    <i class="fas fa-chevron-down"></i>
                                </button>
                                <div class="faq-answer" id="faq-${index}">
                                    <p>${faq.answer}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
}

// Initialize FAQ Component
if (typeof window !== 'undefined') {
    window.FAQComponent = FAQComponent;
},
                    answer: "We use proven local SEO strategies including Google My Business optimization, local citation building, review management, location-specific content, and schema markup to improve local search visibility."
                }
            ],
            technical: [
                {
                    question: "Do you offer website development services?",
                    answer: "Yes, we provide full website development and design services including mobile-responsive sites, e-commerce platforms, WordPress development, and landing page optimization - all built with SEO in mind."
                },
                {
                    question: "Will you fix technical SEO issues on my website?",
                    answer: "Absolutely. We address all technical issues including site speed optimization, mobile responsiveness, Core Web Vitals, SSL certificates, structured data, and crawl errors to ensure search engines can properly index your site."
                },
                {
                    question: "Do you provide website maintenance?",
                    answer: "Yes, our ongoing SEO service includes regular website maintenance, security updates, performance monitoring, and technical optimizations to keep your site running smoothly and ranking well."
                }
            ]
        };
    }

    getFAQsByCategory(category) {
        return this.faqs[category] || this.faqs.general;
    }

    createFAQSection(category = 'general') {
        const faqs = this.getFAQsByCategory(category);
        
        return `
            <section class="faq-component">
                <div class="container">
                    <div class="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Find answers to common questions about our SEO services and how we can help grow your business.</p>
                    </div>
                    <div class="faq-list">
                        ${faqs.map((faq, index) => this.generateFAQHTML(faq, index, category)).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    generateFAQHTML(faq, index, category) {
        return `
            <div class="faq-item" data-category="${category}" data-index="${index}">
                <button class="faq-question" onclick="toggleFAQ('${category}', ${index})">
                    ${faq.question}
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer" id="faq-${category}-${index}">
                    <div class="faq-content">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            </div>
        `;
    }

    init(category = 'general') {
        // Find or create FAQ container
        let faqContainer = document.getElementById('faq-section');
        
        if (!faqContainer) {
            faqContainer = document.createElement('div');
            faqContainer.id = 'faq-section';
            
            // Insert before footer
            const footer = document.querySelector('.footer');
            if (footer && footer.parentNode) {
                footer.parentNode.insertBefore(faqContainer, footer);
            } else {
                document.body.appendChild(faqContainer);
            }
        }

        // Render FAQ content
        faqContainer.innerHTML = this.createFAQSection(category);

        // Initialize FAQ functionality
        this.attachEventListeners();
    }

    attachEventListeners() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', (e) => {
                e.preventDefault();
                
                const faqItem = question.closest('.faq-item');
                const answer = faqItem.querySelector('.faq-answer');
                const isActive = faqItem.classList.contains('active');

                // Close all other FAQs
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                        const otherAnswer = item.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0';
                        }
                    }
                });

                // Toggle current FAQ
                if (isActive) {
                    faqItem.classList.remove('active');
                    answer.style.maxHeight = '0';
                } else {
                    faqItem.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 20 + 'px';
                }
            });
        });
    }

    render(container, category = 'general') {
        if (container) {
            container.innerHTML = this.createFAQSection(category);
            this.attachEventListeners();
        }
    }
}

// Global FAQ toggle function
function toggleFAQ(category, index) {
    const faqAnswer = document.getElementById(`faq-${category}-${index}`);
    const faqItem = faqAnswer ? faqAnswer.closest('.faq-item') : null;

    if (faqAnswer && faqItem) {
        const isActive = faqItem.classList.contains('active');

        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                const otherAnswer = item.querySelector('.faq-answer');
                if (otherAnswer) {
                    otherAnswer.style.maxHeight = '0';
                }
            }
        });

        // Toggle current FAQ
        if (isActive) {
            faqItem.classList.remove('active');
            faqAnswer.style.maxHeight = '0';
        } else {
            faqItem.classList.add('active');
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 20 + 'px';
        }
    }
}

// Initialize FAQ component when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof FAQComponent !== 'undefined') {
        try {
            const faq = new FAQComponent();
            
            // Determine category based on page
            let category = 'general';
            const pathname = window.location.pathname.toLowerCase();
            
            if (pathname.includes('construction') || pathname.includes('roofing') || pathname.includes('plumber') || pathname.includes('architect')) {
                category = 'industries';
            } else if (pathname.includes('cities') || pathname.includes('manchester') || pathname.includes('birmingham') || pathname.includes('london')) {
                category = 'local';
            } else if (pathname.includes('technical') || pathname.includes('development') || pathname.includes('website')) {
                category = 'technical';
            }
            
            faq.init(category);
        } catch (error) {
            console.error('Error initializing FAQ component:', error);
        }
    }
});

// Export for use in other files
if (typeof window !== 'undefined') {
    window.FAQComponent = FAQComponent;
    window.toggleFAQ = toggleFAQ;
}
