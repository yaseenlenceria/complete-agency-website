
// FAQ Component with Schema Markup for SEO
class FAQComponent {
    constructor() {
        this.faqs = {
            general: [
                {
                    question: "Why is OutSourceSU the UK's #1 Rated SEO Agency 2025?",
                    answer: "OutSourceSU has earned the title of UK's #1 Rated SEO Agency 2025 through our proven track record of delivering exceptional results for over 500+ UK businesses. With 15+ years of experience, 94% success rate, and industry-leading expertise across all major UK cities, we consistently outperform competitors in rankings, traffic growth, and client satisfaction."
                },
                {
                    question: "What makes OutSourceSU different from other SEO agencies?",
                    answer: "As the UK's leading SEO and Website Development Agency, OutSourceSU specializes in industry-specific strategies with deep UK market knowledge. We offer transparent reporting, guaranteed results within 90 days, and personalized service with direct access to certified SEO specialists."
                },
                {
                    question: "How quickly can I expect to see SEO results?",
                    answer: "Most clients see initial improvements within 30-60 days, with significant results typically appearing within 3-6 months. As the UK's #1 rated agency, we guarantee measurable improvements within 90 days or provide a full refund."
                },
                {
                    question: "Do you provide SEO services across all UK cities?",
                    answer: "Yes, we serve businesses across all major UK cities including London, Manchester, Birmingham, Leeds, Liverpool, Edinburgh, Cardiff, Belfast, and 50+ additional cities. Our nationwide coverage ensures local expertise wherever your business is located."
                },
                {
                    question: "What industries do you specialize in?",
                    answer: "We specialize in construction, roofing, law firms, healthcare, dental practices, real estate, financial services, accountants, architects, plumbers, and professional services. Our industry-specific approach ensures better results and higher ROI."
                },
                {
                    question: "Do you offer white label SEO services for agencies?",
                    answer: "Yes, we provide comprehensive white label SEO services for digital agencies and web developers. Our white label solutions include full reporting, client communication support, scalable packages, and the expertise that made us the UK's #1 rated agency."
                },
                {
                    question: "What's included in your SEO packages?",
                    answer: "Our comprehensive SEO packages include technical SEO audits, keyword research, on-page optimization, content creation, link building, local SEO, Google Business Profile optimization, monthly reporting, and ongoing strategy refinements."
                },
                {
                    question: "Do you offer website development alongside SEO?",
                    answer: "Yes, as the Best SEO Agency and Website Development Agency for UK Industries, we offer complete website development services including responsive design, e-commerce development, WordPress development, and mobile-first design - all optimized for SEO from the ground up."
                },
                {
                    question: "How do you guarantee results?",
                    answer: "We offer a 90-day money-back guarantee. If you don't see measurable improvements in your search rankings, organic traffic, or lead generation within 90 days, we'll continue working for free until you do, or provide a full refund."
                },
                {
                    question: "What makes your pricing competitive?",
                    answer: "Our pricing reflects our position as the UK's #1 rated agency while remaining competitive. We offer flexible packages, no long-term contracts, and transparent pricing with no hidden fees. You're paying for proven expertise and guaranteed results."
                }
            ],
            technical: [
                {
                    question: "What technical SEO services do you provide?",
                    answer: "Our comprehensive technical SEO includes Core Web Vitals optimization, site speed enhancement, mobile-first indexing preparation, schema markup implementation, XML sitemaps, robots.txt optimization, crawl error fixes, and technical audits that identify and resolve all technical barriers to ranking success."
                },
                {
                    question: "How do you handle website development for SEO?",
                    answer: "As the Best SEO Agency and Website Development Agency for UK Industries, we build websites optimized for SEO from the ground up. This includes responsive design, fast loading speeds, proper URL structure, optimized images, clean code, and SEO-friendly architecture."
                },
                {
                    question: "Do you ensure websites comply with Google guidelines?",
                    answer: "Absolutely. We strictly follow Google's Webmaster Guidelines, use only white-hat SEO techniques, implement proper schema markup, ensure mobile-first indexing compatibility, maintain high-quality content standards, and stay updated with all Google algorithm changes."
                },
                {
                    question: "How do you optimize for Core Web Vitals?",
                    answer: "We optimize Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) through image optimization, code minification, server optimization, and implementing best practices that Google uses to rank websites."
                },
                {
                    question: "What's your approach to mobile optimization?",
                    answer: "We implement mobile-first design, ensure responsive layouts work perfectly across all devices, optimize touch elements, improve mobile page speed, and test extensively on various mobile devices to ensure optimal user experience."
                }
            ],
            local: [
                {
                    question: "How does local SEO work for UK businesses?",
                    answer: "Local SEO optimizes your business for location-based searches across the UK. We optimize Google Business Profile, build local citations, target location-specific keywords, ensure NAP consistency, and implement local schema markup to dominate local search results in your area."
                },
                {
                    question: "Can you help with Google Business Profile optimization?",
                    answer: "Yes, we provide complete Google Business Profile optimization including proper categories, compelling descriptions, high-quality photos, regular posts, review management, Q&A optimization, and local keyword integration to maximize local visibility."
                },
                {
                    question: "Do you provide citation building services across the UK?",
                    answer: "Yes, we build high-quality local citations on relevant UK business directories, industry-specific platforms, local chamber of commerce sites, and regional websites to improve your local search authority and rankings in your specific UK location."
                },
                {
                    question: "How do you handle multi-location businesses?",
                    answer: "For businesses with multiple UK locations, we create individual Google Business Profiles for each location, develop location-specific landing pages, implement local schema markup, and create targeted local content strategies for each area you serve."
                },
                {
                    question: "What local ranking factors do you focus on?",
                    answer: "We optimize proximity, relevance, and prominence factors including Google Business Profile completion, customer reviews, local citations, on-page local optimization, local content creation, and building local backlinks from UK websites."
                }
            ],
            industries: [
                {
                    question: "Which industries do you specialize in across the UK?",
                    answer: "We specialize in construction, roofing, law firms, healthcare, dental practices, real estate, financial services, accountants, architects, plumbers, electricians, builders merchants, insurance, travel, hotels, restaurants, and professional services across all UK cities."
                },
                {
                    question: "Do you have experience with construction and trade businesses?",
                    answer: "Yes, we're experts in construction SEO, helping builders, contractors, roofers, plumbers, electricians, and architects dominate local searches. We understand the unique challenges and opportunities in the construction industry across the UK."
                },
                {
                    question: "How do you help professional services firms?",
                    answer: "We help law firms, accountants, financial advisors, consultants, and other professional services establish thought leadership, attract high-value clients, and dominate search results for professional services in their local markets."
                },
                {
                    question: "Can you help with healthcare and medical SEO?",
                    answer: "Absolutely. We specialize in healthcare SEO for dental practices, medical clinics, private healthcare providers, and healthcare services, ensuring compliance with medical advertising guidelines while maximizing patient acquisition."
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
                <h3 class="faq-question" itemprop="name">
                    ${faq.question}
                    <i class="fas fa-chevron-down faq-icon"></i>
                </h3>
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
                const icon = this.querySelector('.faq-icon');
                
                // Close all other answers
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                    const otherIcon = item.querySelector('.faq-icon');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                });
                
                // Toggle current answer
                if (!isActive) {
                    faqItem.classList.add('active');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                } else {
                    faqItem.classList.remove('active');
                    if (icon) icon.style.transform = 'rotate(0deg)';
                }
            });
        });
    }
}

// Export for use
if (typeof window !== 'undefined') {
    window.FAQComponent = FAQComponent;
}
