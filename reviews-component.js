
// SEO Reviews Component with Schema Markup
class ReviewsComponent {
    constructor() {
        this.reviews = [
            {
                author: "James Henderson",
                rating: 5,
                date: "2024-12-15",
                title: "Outstanding SEO Results",
                content: "OutSourceSU transformed our construction company's online presence. We went from page 3 to position 1 for 'builders Manchester' in just 4 months. The team's expertise in construction SEO is unmatched.",
                business: "Henderson Construction Ltd",
                location: "Manchester"
            },
            {
                author: "Sarah Mitchell",
                rating: 5,
                date: "2024-11-28",
                title: "Exceptional Service and Results",
                content: "As a dental practice owner, I was struggling to attract new patients. OutSourceSU's dental SEO strategy has doubled our patient inquiries. Highly recommended for healthcare professionals.",
                business: "Smile Dental Practice",
                location: "Birmingham"
            },
            {
                author: "David Thompson",
                rating: 5,
                date: "2024-12-08",
                title: "Best ROI We've Ever Achieved",
                content: "Our law firm has worked with several SEO agencies, but OutSourceSU stands out. Their legal SEO expertise has generated over £500k in new business for us this year.",
                business: "Thompson & Associates Solicitors",
                location: "London"
            },
            {
                author: "Michael Roberts",
                rating: 5,
                date: "2024-11-20",
                title: "Roofing SEO Specialists",
                content: "OutSourceSU understands the roofing industry like no other agency. We now dominate local searches for roofing contractors in Leeds. Our calls have increased by 300%.",
                business: "Roberts Roofing Solutions",
                location: "Leeds"
            },
            {
                author: "Emma Wilson",
                rating: 5,
                date: "2024-12-02",
                title: "Transparent and Professional",
                content: "What sets OutSourceSU apart is their transparency. Monthly reports are detailed, communication is excellent, and results speak for themselves. Our estate agency is now market leader online.",
                business: "Wilson Property Group",
                location: "Bristol"
            },
            {
                author: "Richard Clarke",
                rating: 5,
                date: "2024-11-15",
                title: "Technical SEO Excellence",
                content: "The technical SEO audit revealed issues we didn't know existed. Site speed improved by 70%, and we're now ranking for competitive financial keywords. Outstanding technical expertise.",
                business: "Clarke Financial Advisors",
                location: "Edinburgh"
            }
        ];
        
        this.generateSchemaMarkup();
    }

    generateReviewsHTML() {
        return `
            <section class="reviews-section">
                <div class="container">
                    <div class="section-header">
                        <h2>What Our Clients Say</h2>
                        <p>Real reviews from real UK businesses who've achieved exceptional results with our SEO services</p>
                        <div class="overall-rating">
                            <div class="stars">
                                ${'★'.repeat(5)}
                            </div>
                            <span class="rating-text">5.0 out of 5 based on ${this.reviews.length} reviews</span>
                        </div>
                    </div>
                    
                    <div class="reviews-grid">
                        ${this.reviews.map(review => this.generateReviewCard(review)).join('')}
                    </div>
                    
                    <div class="reviews-cta">
                        <h3>Ready to Join Our Success Stories?</h3>
                        <p>Get your free SEO audit and discover how we can help your business achieve similar results.</p>
                        <a href="contact.html" class="btn-primary">Get Your Free SEO Audit</a>
                    </div>
                </div>
            </section>
        `;
    }

    generateReviewCard(review) {
        return `
            <div class="review-card" itemscope itemtype="http://schema.org/Review">
                <div class="review-header">
                    <div class="reviewer-info">
                        <h4 itemprop="author" itemscope itemtype="http://schema.org/Person">
                            <span itemprop="name">${review.author}</span>
                        </h4>
                        <span class="reviewer-business">${review.business}</span>
                        <span class="reviewer-location">${review.location}</span>
                    </div>
                    <div class="review-rating" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                        <div class="stars">
                            ${'★'.repeat(review.rating)}
                        </div>
                        <meta itemprop="ratingValue" content="${review.rating}">
                        <meta itemprop="bestRating" content="5">
                    </div>
                </div>
                
                <h5 class="review-title" itemprop="name">${review.title}</h5>
                
                <div class="review-content" itemprop="reviewBody">
                    <p>${review.content}</p>
                </div>
                
                <div class="review-date">
                    <time itemprop="datePublished" datetime="${review.date}">
                        ${new Date(review.date).toLocaleDateString('en-GB', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </time>
                </div>
            </div>
        `;
    }

    generateSchemaMarkup() {
        const aggregateRating = {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "OutSourceSU",
            "url": "https://outsourcesu.com",
            "logo": "https://outsourcesu.com/logo.png",
            "sameAs": [
                "https://www.linkedin.com/company/outsourcesu",
                "https://twitter.com/outsourcesu"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": this.reviews.length,
                "bestRating": "5",
                "worstRating": "5"
            },
            "review": this.reviews.map(review => ({
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": review.author
                },
                "datePublished": review.date,
                "description": review.content,
                "name": review.title,
                "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": review.rating.toString(),
                    "worstRating": "1"
                }
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(aggregateRating);
        document.head.appendChild(script);
    }

    init() {
        const reviewsContainer = document.getElementById('reviews-section');
        if (reviewsContainer) {
            reviewsContainer.innerHTML = this.generateReviewsHTML();
        }
    }
}

// Export for use
if (typeof window !== 'undefined') {
    window.ReviewsComponent = ReviewsComponent;
}
