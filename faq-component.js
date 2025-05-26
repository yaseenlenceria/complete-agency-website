
// FAQ Component with Schema Markup for SEO
class FAQComponent {
    constructor() {
        this.faqs = {
            general: [
                {
                    question: "What makes OutSourceSU different from other SEO agencies?",
                    answer: "OutSourceSU specializes in UK market SEO with 15+ years experience. We focus on industry-specific strategies, have a 94% success rate, and offer transparent reporting. Our team understands local UK search behavior and competition."
                },
                {
                    question: "How long does it take to see SEO results?",
                    answer: "Most clients see initial improvements within 30-60 days, with significant results typically appearing within 3-6 months. We guarantee improvements within 90 days or provide a full refund."
                },
                {
                    question: "Do you offer SEO services nationwide across the UK?",
                    answer: "Yes, we serve businesses across all major UK cities including London, Manchester, Birmingham, Leeds, Liverpool, Edinburgh, Cardiff, and Belfast. Our local SEO expertise covers the entire United Kingdom."
                },
                {
                    question: "What industries do you specialize in?",
                    answer: "We specialize in construction, roofing, law firms, healthcare, dental practices, real estate, financial services, and professional services. Our industry-specific approach ensures better results."
                },
                {
                    question: "Do you offer white label SEO services?",
                    answer: "Yes, we provide white label SEO services for digital agencies and web developers. Our white label solutions include full reporting, client communication support, and scalable packages."
                }
            ],
            technical: [
                {
                    question: "What technical SEO services do you provide?",
                    answer: "Our technical SEO includes site speed optimization, mobile optimization, schema markup implementation, XML sitemaps, robots.txt optimization, Core Web Vitals improvement, and technical audits."
                },
                {
                    question: "Do you handle website development alongside SEO?",
                    answer: "Yes, we offer complete website development services optimized for SEO from the ground up. This includes responsive design, fast loading speeds, and proper SEO architecture."
                },
                {
                    question: "How do you ensure websites comply with Google guidelines?",
                    answer: "We strictly follow Google's Webmaster Guidelines, use only white-hat SEO techniques, implement proper schema markup, ensure mobile-first indexing compatibility, and maintain high-quality content standards."
                }
            ],
            local: [
                {
                    question: "How does local SEO work for UK businesses?",
                    answer: "Local SEO optimizes your business for location-based searches. We optimize Google Business Profile, build local citations, target location-specific keywords, and ensure NAP consistency across all platforms."
                },
                {
                    question: "Can you help with Google Business Profile optimization?",
                    answer: "Absolutely. We optimize Google Business Profiles with proper categories, descriptions, photos, regular posts, review management, and local keyword optimization to improve local search visibility."
                },
                {
                    question: "Do you provide citation building services?",
                    answer: "Yes, we build high-quality local citations on relevant UK business directories, industry-specific platforms, and local websites to improve your local search authority and rankings."
                }
            ]
        };
        
        this.generateFAQSchema();
    }

    generateFAQHTML(category = 'general') {
        const categoryFAQs = this.faqs[category] || this.faqs.general;
        
        return `
            <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
                <div class="container">
                    <div class="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Get answers to common questions about our SEO services and how we can help your business grow online.</p>
                    </div>
                    
                    <div class="faq-container">
                        ${categoryFAQs.map((faq, index) => this.generateFAQItem(faq, index)).join('')}
                    </div>
                    
                    <div class="faq-cta">
                        <h3>Still Have Questions?</h3>
                        <p>Our SEO experts are here to help. Get in touch for a free consultation and personalized advice for your business.</p>
                        <a href="contact.html" class="btn-primary">
                            <i class="fas fa-comments"></i>
                            Ask Our SEO Experts
                        </a>
                    </div>
                </div>
            </section>
        `;
    }

    generateFAQItem(faq, index) {
        return `
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 class="faq-question" itemprop="name">${faq.question}</h3>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            </div>
        `;
    }

    generateFAQSchema() {
        const allFAQs = [...this.faqs.general, ...this.faqs.technical, ...this.faqs.local];
        
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(script);
    }

    init(category = 'general') {
        const faqContainer = document.getElementById('faq-section');
        if (faqContainer) {
            faqContainer.innerHTML = this.generateFAQHTML(category);
            this.initializeFAQInteraction();
        }
    }

    initializeFAQInteraction() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const answer = faqItem.querySelector('.faq-answer');
                const isActive = faqItem.classList.contains('active');
                
                // Close all other answers
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Toggle current answer
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }
}

// Export for use
if (typeof window !== 'undefined') {
    window.FAQComponent = FAQComponent;
}
