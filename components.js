
// Reusable Components for OutSourceSU Website

// Component: Stats Section
function createStatsSection(title, subtitle, stats) {
    return `
    <section class="stats-component">
        <div class="container">
            <div class="section-header">
                <h2>${title}</h2>
                <p>${subtitle}</p>
            </div>
            <div class="stats-grid">
                ${stats.map(stat => `
                    <div class="stat-item">
                        <div class="stat-icon">
                            <i class="${stat.icon}"></i>
                        </div>
                        <h3 class="stat-number">${stat.number}</h3>
                        <p class="stat-label">${stat.label}</p>
                        <span class="stat-description">${stat.description}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

// Component: Benefits Grid
function createBenefitsGrid(title, benefits) {
    return `
    <section class="benefits-component">
        <div class="container">
            <h2>${title}</h2>
            <div class="benefits-grid">
                ${benefits.map(benefit => `
                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="${benefit.icon}"></i>
                        </div>
                        <h3>${benefit.title}</h3>
                        <p>${benefit.description}</p>
                        <ul class="benefit-features">
                            ${benefit.features ? benefit.features.map(feature => `<li>${feature}</li>`).join('') : ''}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

// Component: Service Cards
function createServiceCards(services) {
    return `
    <div class="services-grid">
        ${services.map(service => `
            <div class="service-card">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <ul class="service-features">
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="service-card-footer">
                    <a href="${service.link}" class="service-cta">
                        <i class="fas fa-arrow-right"></i>
                        ${service.cta}
                    </a>
                </div>
            </div>
        `).join('')}
    </div>
    `;
}

// Component: Testimonials
function createTestimonials(testimonials) {
    return `
    <section class="testimonials-component">
        <div class="container">
            <div class="section-header">
                <h2>What Our Clients Say</h2>
                <p>Real results from real UK businesses we've helped grow</p>
            </div>
            <div class="testimonials-grid">
                ${testimonials.map(testimonial => `
                    <div class="testimonial-card">
                        <div class="testimonial-rating">
                            ${'★'.repeat(5)}
                        </div>
                        <p>"${testimonial.quote}"</p>
                        <div class="testimonial-author">
                            <img src="${testimonial.avatar}" alt="${testimonial.name}">
                            <div class="author-info">
                                <h4>${testimonial.name}</h4>
                                <span>${testimonial.position}, ${testimonial.company}</span>
                                <div class="testimonial-results">
                                    <span class="result-metric">${testimonial.result}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

// Component: Industry Table
function createIndustryTable(industries) {
    return `
    <section class="industry-table-component">
        <div class="container">
            <h2>Industries We Serve Across the UK</h2>
            <div class="industry-table-wrapper">
                <table class="industry-table">
                    <thead>
                        <tr>
                            <th>Industry</th>
                            <th>Average Traffic Increase</th>
                            <th>Lead Generation Boost</th>
                            <th>Revenue Growth</th>
                            <th>Time to Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${industries.map(industry => `
                            <tr>
                                <td>
                                    <div class="industry-cell">
                                        <i class="${industry.icon}"></i>
                                        <span>${industry.name}</span>
                                    </div>
                                </td>
                                <td><span class="metric-good">${industry.traffic}</span></td>
                                <td><span class="metric-excellent">${industry.leads}</span></td>
                                <td><span class="metric-outstanding">${industry.revenue}</span></td>
                                <td><span class="metric-timeframe">${industry.timeframe}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    `;
}

// Component: Process Steps
function createProcessSteps(steps) {
    return `
    <section class="process-component">
        <div class="container">
            <div class="section-header">
                <h2>Our Proven SEO Process</h2>
                <p>How we deliver exceptional results for UK businesses</p>
            </div>
            <div class="process-steps">
                ${steps.map((step, index) => `
                    <div class="process-step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <div class="step-icon">
                                <i class="${step.icon}"></i>
                            </div>
                            <h3>${step.title}</h3>
                            <p>${step.description}</p>
                            <ul class="step-details">
                                ${step.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}

// Component: FAQ Section
function createFAQSection(faqs) {
    return `
    <section class="faq-component">
        <div class="container">
            <div class="section-header">
                <h2>Frequently Asked Questions</h2>
                <p>Get answers to common questions about our SEO services</p>
            </div>
            <div class="faq-list">
                ${faqs.map((faq, index) => `
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(${index})">
                            <span>${faq.question}</span>
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

// Helper function for FAQ toggle
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-${index}`);
    const question = answer.previousElementSibling;
    const icon = question.querySelector('i');
    
    answer.classList.toggle('active');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createStatsSection,
        createBenefitsGrid,
        createServiceCards,
        createTestimonials,
        createIndustryTable,
        createProcessSteps,
        createFAQSection,
        toggleFAQ
    };
}
