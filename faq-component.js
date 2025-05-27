
class FAQComponent {
    constructor() {
        this.faqData = {
            general: [
                {
                    question: "How long does it take to see SEO results?",
                    answer: "Most clients see improvements in rankings within 30-60 days, with significant results typically visible within 90 days. Our proven strategies ensure steady progress towards page 1 rankings."
                },
                {
                    question: "Do you guarantee first page rankings?",
                    answer: "We offer a 90-day money-back guarantee. 94% of our clients achieve first page rankings within 90 days using our proven SEO strategies and ongoing optimization techniques."
                },
                {
                    question: "What makes OutSourceSU different from other SEO agencies?",
                    answer: "We're the UK's #1 rated SEO agency with 15+ years experience, 500+ successful clients, and industry-leading 94% success rate. We offer transparent reporting, no long-term contracts, and dedicated account management."
                },
                {
                    question: "How much do your SEO services cost?",
                    answer: "Our SEO packages start from £500/month for small businesses, with enterprise solutions available. We offer flexible pricing based on your business size, competition level, and growth objectives."
                },
                {
                    question: "Do you work with businesses outside the UK?",
                    answer: "While we specialize in UK SEO and have deep expertise in UK search behavior, we do work with international clients looking to target UK markets or expand their global presence."
                }
            ],
            construction: [
                {
                    question: "How can SEO help my construction business?",
                    answer: "Construction SEO helps you get found when people search for services like 'builders near me', 'construction companies', or specific services. We help you dominate local search results and attract qualified leads."
                },
                {
                    question: "What construction keywords should I target?",
                    answer: "We target high-value keywords like 'construction company [city]', 'builders near me', 'home extensions', 'commercial construction', and specific services you offer, plus long-tail keywords with buying intent."
                },
                {
                    question: "How do you handle seasonal construction SEO?",
                    answer: "We adjust strategies for seasonal patterns, focusing on indoor projects during winter months and outdoor construction in summer. Our content calendar aligns with construction industry cycles."
                }
            ],
            roofing: [
                {
                    question: "How quickly can roofing SEO generate leads?",
                    answer: "Roofing SEO can start generating leads within 30-60 days, especially for emergency services. We optimize for urgent keywords like 'roof repair near me' and 'emergency roofer' for faster results."
                },
                {
                    question: "What roofing services get the most online searches?",
                    answer: "Roof repair, roof replacement, emergency roof services, and 'roofer near me' get the highest search volumes. We optimize for these high-intent keywords to maximize your lead generation."
                },
                {
                    question: "How do you compete with large roofing companies online?",
                    answer: "We use local SEO strategies, customer reviews, and targeted content to help smaller roofing companies compete effectively against larger competitors in their service areas."
                }
            ],
            legal: [
                {
                    question: "How does SEO work for law firms?",
                    answer: "Legal SEO helps potential clients find your law firm when searching for legal services. We optimize for practice area keywords, local searches, and ensure compliance with legal advertising regulations."
                },
                {
                    question: "What legal practice areas benefit most from SEO?",
                    answer: "Personal injury, family law, criminal defense, and employment law see significant benefits from SEO. We tailor strategies to each practice area's unique search patterns and client needs."
                },
                {
                    question: "How do you handle legal industry compliance in SEO?",
                    answer: "We ensure all SEO content meets legal advertising standards, follows solicitor regulations, and maintains professional standards while maximizing search visibility and lead generation."
                }
            ]
        };
    }

    init(category = 'general') {
        this.addFAQStyles();
        this.renderFAQ(category);
    }

    addFAQStyles() {
        if (document.getElementById('faq-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'faq-styles';
        style.textContent = `
            .faq-component {
                padding: 80px 0;
                background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
            }

            .faq-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 2rem;
            }

            .faq-list {
                max-width: 900px;
                margin: 0 auto;
            }

            .faq-item {
                margin-bottom: 24px;
                border: 1px solid #e2e8f0;
                border-radius: 16px;
                overflow: hidden;
                background: white;
                box-shadow: 0 4px 16px rgba(0,0,0,0.08);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .faq-item:hover {
                box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                transform: translateY(-2px);
            }

            .faq-question {
                width: 100%;
                padding: 28px 32px;
                background: white;
                border: none;
                text-align: left;
                font-size: 18px;
                font-weight: 600;
                color: #1e293b;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
            }

            .faq-question::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 4px;
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                transform: scaleY(0);
                transition: transform 0.3s ease;
            }

            .faq-question:hover {
                background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            }

            .faq-question:hover::before {
                transform: scaleY(1);
            }

            .faq-question.active {
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                color: white;
            }

            .faq-question.active::before {
                transform: scaleY(1);
                background: #fbbf24;
            }

            .faq-question i {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                color: #3b82f6;
                font-size: 16px;
                margin-left: 16px;
            }

            .faq-question.active i {
                transform: rotate(180deg);
                color: #fbbf24;
            }

            .faq-answer {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                background: linear-gradient(135deg, #fafbfc, #ffffff);
            }

            .faq-content {
                padding: 0 32px 32px;
                border-top: 1px solid #e2e8f0;
            }

            .faq-content p {
                margin: 20px 0 0;
                color: #475569;
                line-height: 1.8;
                font-size: 16px;
            }

            .faq-component .section-header {
                text-align: center;
                margin-bottom: 60px;
            }

            .faq-component .section-header h2 {
                font-size: 2.5rem;
                color: #1e293b;
                margin-bottom: 16px;
                font-weight: 700;
            }

            .faq-component .section-header p {
                font-size: 1.1rem;
                color: #64748b;
                max-width: 600px;
                margin: 0 auto;
            }

            @media (max-width: 768px) {
                .faq-question {
                    padding: 24px 20px;
                    font-size: 16px;
                }

                .faq-content {
                    padding: 0 20px 24px;
                }

                .faq-component .section-header h2 {
                    font-size: 2rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    renderFAQ(category = 'general') {
        const faqContainer = document.getElementById('faq-section');
        if (!faqContainer) return;

        const faqs = this.faqData[category] || this.faqData.general;
        
        const faqHTML = `
            <section class="faq-component">
                <div class="faq-container">
                    <div class="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Get answers to the most common questions about our SEO services and how we can help grow your business.</p>
                    </div>
                    <div class="faq-list">
                        ${faqs.map((faq, index) => `
                            <div class="faq-item">
                                <button class="faq-question" onclick="this.parentElement.classList.toggle('active'); this.classList.toggle('active'); const answer = this.nextElementSibling; answer.style.maxHeight = answer.style.maxHeight ? '' : answer.scrollHeight + 'px';">
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
            </section>
        `;

        faqContainer.innerHTML = faqHTML;
    }

    render(container, category = 'general') {
        this.addFAQStyles();
        const faqs = this.faqData[category] || this.faqData.general;
        
        const faqHTML = `
            <section class="faq-component">
                <div class="faq-container">
                    <div class="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Get answers to the most common questions about our SEO services and how we can help grow your business.</p>
                    </div>
                    <div class="faq-list">
                        ${faqs.map((faq, index) => `
                            <div class="faq-item">
                                <button class="faq-question" onclick="this.parentElement.classList.toggle('active'); this.classList.toggle('active'); const answer = this.nextElementSibling; answer.style.maxHeight = answer.style.maxHeight ? '' : answer.scrollHeight + 'px';">
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
            </section>
        `;

        container.innerHTML = faqHTML;
    }
}

// Make it globally available
if (typeof window !== 'undefined') {
    window.FAQComponent = FAQComponent;
}
