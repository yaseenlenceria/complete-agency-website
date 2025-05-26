
// Enhanced FAQ Component with Dynamic Content and Schema Markup
class FAQComponent {
    constructor() {
        this.faqs = {
            general: [
                {
                    question: "What makes OutSourceSU the UK's #1 rated SEO agency in 2025?",
                    answer: "OutSourceSU has been recognized as the UK's leading SEO agency for 2025 due to our 16+ years of proven experience, 94% success rate, and comprehensive industry expertise. We've helped over 500 UK businesses achieve first-page rankings, with an average traffic increase of 400%. Our team combines cutting-edge SEO techniques with deep knowledge of UK market dynamics across all major cities from London to Edinburgh."
                },
                {
                    question: "How long does it take to see SEO results with OutSourceSU?",
                    answer: "Most clients see initial improvements within 30-60 days, with significant results typically appearing within 3-6 months. We guarantee measurable improvements within 90 days or provide a full refund. Our proven process includes technical audits, competitor analysis, and strategic implementation that delivers sustainable growth for UK businesses."
                },
                {
                    question: "Do you offer SEO services nationwide across all UK cities?",
                    answer: "Yes, we serve businesses across all 60+ major UK cities including London, Manchester, Birmingham, Leeds, Liverpool, Edinburgh, Cardiff, Belfast, and many more. Our local SEO expertise covers the entire United Kingdom, with dedicated account managers who understand regional market dynamics and search behavior patterns."
                },
                {
                    question: "What industries do you specialize in for SEO and web development?",
                    answer: "We specialize in construction & trade (builders, architects, plumbers), roofing specialists, professional services (law firms, dental practices, accountants), real estate & property, healthcare, and agency services. Our industry-specific approach ensures better results through targeted strategies that understand your market's unique challenges and opportunities."
                },
                {
                    question: "Do you offer white label SEO services for agencies?",
                    answer: "Yes, we provide comprehensive white label SEO services for digital agencies and web developers. Our white label solutions include full reporting, client communication support, scalable packages, and dedicated account management. We help agencies expand their service offerings without the overhead of building an in-house SEO team."
                },
                {
                    question: "What's included in your website development services?",
                    answer: "Our website development services include custom responsive design, mobile-first development, SEO optimization from the ground up, e-commerce solutions, WordPress development, and performance optimization. Every website is built with Core Web Vitals in mind and includes comprehensive SEO architecture for maximum search visibility."
                },
                {
                    question: "How do you guarantee SEO results?",
                    answer: "We offer a 90-day money-back guarantee. If you don't see measurable improvements in your search rankings, organic traffic, or lead generation within 90 days, we'll continue working for free until you do, or provide a full refund. Our confidence comes from our 94% success rate and proven methodologies."
                },
                {
                    question: "What makes your pricing competitive compared to other UK SEO agencies?",
                    answer: "Our pricing is transparent and results-focused. We offer flexible packages without long-term contracts, allowing you to start or stop anytime. Our ROI-driven approach means you only continue if you're seeing real business growth. We provide more value through our comprehensive service range and proven track record."
                }
            ],
            technical: [
                {
                    question: "What technical SEO services does OutSourceSU provide?",
                    answer: "Our technical SEO includes Core Web Vitals optimization, mobile-first indexing preparation, advanced schema markup implementation, XML sitemap optimization, robots.txt configuration, site architecture improvement, page speed enhancement, SSL implementation, and comprehensive technical audits. We ensure your website meets all Google's technical requirements for optimal rankings."
                },
                {
                    question: "How do you handle website speed optimization?",
                    answer: "We optimize website speed through image compression, code minification, CDN implementation, server optimization, caching strategies, and database optimization. Our goal is to achieve loading speeds under 3 seconds and excellent Core Web Vitals scores, which are crucial ranking factors for Google in 2025."
                },
                {
                    question: "Do you implement schema markup and structured data?",
                    answer: "Yes, we implement comprehensive schema markup including Organization, LocalBusiness, Service, Review, FAQ, and industry-specific schemas. This helps search engines better understand your content and can result in rich snippets, enhanced search appearances, and improved click-through rates."
                },
                {
                    question: "How do you ensure websites are mobile-optimized?",
                    answer: "We follow Google's mobile-first indexing standards with responsive design, touch-friendly navigation, optimized images for mobile, fast loading on mobile networks, and comprehensive mobile usability testing. Mobile optimization is crucial as over 60% of UK searches now happen on mobile devices."
                }
            ],
            local: [
                {
                    question: "How does local SEO work for UK businesses?",
                    answer: "Local SEO optimizes your business for location-based searches across UK cities. We optimize Google Business Profiles, build high-quality local citations, target location-specific keywords, ensure NAP (Name, Address, Phone) consistency, and implement local schema markup. This helps you appear in local search results and Google's Local Pack."
                },
                {
                    question: "Can you help optimize Google Business Profiles for multiple locations?",
                    answer: "Absolutely. We optimize Google Business Profiles with proper categories, compelling descriptions, high-quality photos, regular posts, review management, Q&A optimization, and local keyword integration. For multi-location businesses, we create location-specific strategies that maintain brand consistency while targeting local markets."
                },
                {
                    question: "How important are online reviews for local SEO in the UK?",
                    answer: "Online reviews are crucial for local SEO success. We help implement review generation strategies, respond to reviews professionally, monitor your online reputation, and use positive reviews to enhance your local search visibility. Reviews influence both rankings and customer trust."
                },
                {
                    question: "Do you provide citation building services across UK directories?",
                    answer: "Yes, we build high-quality local citations on relevant UK business directories, industry-specific platforms, and local websites. We ensure consistent NAP information across all platforms and focus on authoritative directories that improve your local search authority and rankings."
                }
            ],
            industry: [
                {
                    question: "How do you approach SEO for construction companies in the UK?",
                    answer: "For construction companies, we focus on local search dominance, project showcase optimization, service-specific landing pages, and reputation management. We target keywords like 'builders near me', 'construction companies [city]', and service-specific terms. Our strategies help construction businesses attract more qualified leads in their service areas."
                },
                {
                    question: "What makes your roofing SEO services unique?",
                    answer: "Our roofing SEO targets emergency repair searches, seasonal demand patterns, and location-based queries. We optimize for terms like 'emergency roof repair', 'roofing contractors [city]', and material-specific searches. Our strategies help roofing companies capture high-intent customers when they need services most urgently."
                },
                {
                    question: "How do you help law firms with SEO and online marketing?",
                    answer: "For law firms, we focus on practice area optimization, local authority building, content marketing for legal topics, and reputation management. We ensure compliance with legal advertising guidelines while maximizing visibility for searches like 'solicitors near me', '[practice area] lawyer [city]', and legal service queries."
                },
                {
                    question: "What's your approach to healthcare and dental practice SEO?",
                    answer: "Healthcare SEO requires special attention to medical accuracy, patient privacy, and local search optimization. We create content that builds trust, optimizes for appointment-booking searches, and ensures compliance with healthcare advertising regulations while helping practices attract new patients."
                }
            ]
        };
        
        this.generateFAQSchema();
    }

    generateFAQHTML(category = 'general', pageTitle = 'Our SEO Services') {
        const categoryFAQs = this.faqs[category] || this.faqs.general;
        
        return `
            <section class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
                <div class="container">
                    <div class="section-header">
                        <h2>Frequently Asked Questions About ${pageTitle}</h2>
                        <p>Get answers to common questions about our SEO services and how OutSourceSU can help your business dominate search results across the UK.</p>
                    </div>
                    
                    <div class="faq-container">
                        ${categoryFAQs.map((faq, index) => this.generateFAQItem(faq, index, category)).join('')}
                    </div>
                    
                    <div class="faq-cta">
                        <h3>Still Have Questions About Our ${pageTitle}?</h3>
                        <p>Our SEO experts are here to help. Get in touch for a free consultation and personalized advice for your business.</p>
                        <div class="faq-cta-buttons">
                            <a href="contact.html" class="btn-primary">
                                <i class="fas fa-comments"></i>
                                Ask Our SEO Experts
                            </a>
                            <a href="tel:07411575188" class="btn-secondary">
                                <i class="fas fa-phone"></i>
                                Call 07411575188
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    generateFAQItem(faq, index, category) {
        return `
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('active')" itemprop="name">
                    <span>${faq.question}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            </div>
        `;
    }

    generateFAQSchema() {
        const allFAQs = [...this.faqs.general, ...this.faqs.technical, ...this.faqs.local, ...this.faqs.industry];
        
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

    // Dynamic FAQ generation based on page context
    generateCityFAQs(cityName) {
        return [
            {
                question: `How long does SEO take to work for businesses in ${cityName}?`,
                answer: `For ${cityName} businesses, we typically see initial improvements within 30-60 days, with significant results in 3-6 months. The timeline depends on your current website status, competition level in ${cityName}, and the specific keywords you're targeting. Our local ${cityName} expertise helps accelerate results.`
            },
            {
                question: `What makes OutSourceSU the best SEO agency in ${cityName}?`,
                answer: `Our deep understanding of the ${cityName} market, combined with 16+ years of experience, sets us apart. We have helped dozens of ${cityName} businesses achieve first-page rankings and understand the local competition, search patterns, and customer behavior specific to ${cityName}.`
            },
            {
                question: `Do you guarantee SEO results for ${cityName} businesses?`,
                answer: `Yes, we offer a 90-day guarantee for all ${cityName} businesses. If you don't see measurable improvements in your search rankings, organic traffic, or local visibility within 90 days, we'll continue working for free until you do, or provide a full refund.`
            }
        ];
    }

    generateIndustryFAQs(industry) {
        const industrySpecific = {
            construction: [
                {
                    question: `How can SEO help my construction business get more projects?`,
                    answer: `SEO helps construction businesses by improving visibility for searches like "builders near me", "construction companies [location]", and specific service queries. We optimize your website to appear when potential clients search for construction services, helping you attract qualified leads and win more projects.`
                }
            ],
            roofing: [
                {
                    question: `Why is SEO important for roofing contractors?`,
                    answer: `Roofing SEO is crucial because customers often search urgently for "emergency roof repair", "roofing contractors near me", or "roof replacement [city]". Our SEO strategies ensure your roofing business appears first when customers need your services most, often during weather emergencies or urgent repairs.`
                }
            ]
        };
        
        return industrySpecific[industry] || [];
    }

    init(category = 'general', pageTitle = 'Our SEO Services') {
        const faqContainer = document.getElementById('faq-section');
        if (faqContainer) {
            faqContainer.innerHTML = this.generateFAQHTML(category, pageTitle);
        }
    }

    // Method to add dynamic FAQs to any page
    addDynamicFAQs(container, faqs, title = 'Frequently Asked Questions') {
        const faqHTML = `
            <div class="dynamic-faq-section">
                <h3>${title}</h3>
                <div class="faq-list">
                    ${faqs.map((faq, index) => this.generateFAQItem(faq, index, 'dynamic')).join('')}
                </div>
            </div>
        `;
        
        if (container) {
            container.innerHTML += faqHTML;
        }
    }
}

// Export for use
if (typeof window !== 'undefined') {
    window.FAQComponent = FAQComponent;
}
