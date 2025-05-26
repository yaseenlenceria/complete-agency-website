
// Dynamic Components for SEO Optimization

// Live statistics component
class LiveStatsComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.stats = [
            { label: 'Active Campaigns', value: 247, increment: 1, max: 300 },
            { label: 'Keywords Ranked #1', value: 1843, increment: 3, max: 2000 },
            { label: 'Client ROI Increase', value: 285, increment: 2, max: 350, suffix: '%' },
            { label: 'Websites Optimized', value: 456, increment: 1, max: 500 }
        ];
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.render();
        this.startLiveUpdates();
    }

    render() {
        this.container.innerHTML = `
            <div class="live-stats-wrapper">
                <div class="section-header">
                    <h2>Live Performance Dashboard</h2>
                    <p class="live-indicator"><span class="live-dot"></span> Updated in real-time</p>
                </div>
                <div class="live-stats-grid">
                    ${this.stats.map((stat, index) => `
                        <div class="live-stat-card" data-index="${index}">
                            <div class="stat-icon">
                                <i class="fas ${this.getStatIcon(index)}"></i>
                            </div>
                            <div class="stat-content">
                                <h3 class="stat-number" id="stat-${index}">${stat.value}${stat.suffix || ''}</h3>
                                <p class="stat-label">${stat.label}</p>
                                <div class="stat-trend">
                                    <i class="fas fa-arrow-up"></i>
                                    <span>+${stat.increment} this hour</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    getStatIcon(index) {
        const icons = ['fa-rocket', 'fa-trophy', 'fa-chart-line', 'fa-globe'];
        return icons[index] || 'fa-star';
    }

    startLiveUpdates() {
        setInterval(() => {
            this.stats.forEach((stat, index) => {
                if (stat.value < stat.max && Math.random() > 0.7) {
                    stat.value += stat.increment;
                    const element = document.getElementById(`stat-${index}`);
                    if (element) {
                        element.textContent = `${stat.value}${stat.suffix || ''}`;
                        element.parentElement.parentElement.classList.add('updated');
                        setTimeout(() => {
                            element.parentElement.parentElement.classList.remove('updated');
                        }, 1000);
                    }
                }
            });
        }, 5000);
    }
}

// Currently working with component
class CurrentlyWorkingComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.clients = [
            { name: 'Premier Construction Ltd', industry: 'Construction', location: 'Manchester', status: 'SEO Audit' },
            { name: 'Legal Partners UK', industry: 'Legal Services', location: 'London', status: 'Link Building' },
            { name: 'Dental Care Plus', industry: 'Healthcare', location: 'Birmingham', status: 'Local SEO' },
            { name: 'Tech Solutions Pro', industry: 'Technology', location: 'Leeds', status: 'Content Strategy' },
            { name: 'Royal Estate Agents', industry: 'Real Estate', location: 'Liverpool', status: 'Technical SEO' }
        ];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.render();
        this.startRotation();
    }

    render() {
        this.container.innerHTML = `
            <div class="currently-working-wrapper">
                <div class="section-header">
                    <h2>Currently Working With</h2>
                    <p>Real projects happening right now</p>
                </div>
                <div class="working-carousel">
                    <div class="working-cards" id="working-cards">
                        ${this.clients.map((client, index) => `
                            <div class="working-card ${index === 0 ? 'active' : ''}" data-index="${index}">
                                <div class="working-status">
                                    <span class="status-indicator"></span>
                                    <span class="status-text">In Progress</span>
                                </div>
                                <h3>${client.name}</h3>
                                <div class="client-details">
                                    <span class="industry">${client.industry}</span>
                                    <span class="location">${client.location}</span>
                                </div>
                                <div class="current-work">
                                    <i class="fas fa-cog fa-spin"></i>
                                    <span>${client.status}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    startRotation() {
        setInterval(() => {
            const cards = document.querySelectorAll('.working-card');
            cards.forEach(card => card.classList.remove('active'));
            
            this.currentIndex = (this.currentIndex + 1) % this.clients.length;
            const activeCard = document.querySelector(`[data-index="${this.currentIndex}"]`);
            if (activeCard) {
                activeCard.classList.add('active');
            }
        }, 3000);
    }
}

// Performance graph component
class PerformanceGraphComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.data = [
            { month: 'Jan', traffic: 45, leads: 23, revenue: 15 },
            { month: 'Feb', traffic: 62, leads: 34, revenue: 28 },
            { month: 'Mar', traffic: 78, leads: 45, revenue: 42 },
            { month: 'Apr', traffic: 89, leads: 56, revenue: 58 },
            { month: 'May', traffic: 95, leads: 67, revenue: 73 },
            { month: 'Jun', traffic: 100, leads: 78, revenue: 85 }
        ];
        this.init();
    }

    init() {
        if (!this.container) return;
        this.render();
        this.animateGraph();
    }

    render() {
        this.container.innerHTML = `
            <div class="performance-graph-wrapper">
                <div class="section-header">
                    <h2>Average Client Performance Growth</h2>
                    <p>6-month results across all industries</p>
                </div>
                <div class="graph-container">
                    <div class="graph-legend">
                        <div class="legend-item">
                            <span class="legend-color traffic"></span>
                            <span>Organic Traffic</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-color leads"></span>
                            <span>Lead Generation</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-color revenue"></span>
                            <span>Revenue Growth</span>
                        </div>
                    </div>
                    <div class="graph-chart">
                        ${this.data.map((item, index) => `
                            <div class="graph-bar-group" data-month="${item.month}">
                                <div class="graph-bars">
                                    <div class="graph-bar traffic" style="height: 0%" data-height="${item.traffic}%"></div>
                                    <div class="graph-bar leads" style="height: 0%" data-height="${item.leads}%"></div>
                                    <div class="graph-bar revenue" style="height: 0%" data-height="${item.revenue}%"></div>
                                </div>
                                <span class="month-label">${item.month}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    animateGraph() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = entry.target.querySelectorAll('.graph-bar');
                    bars.forEach((bar, index) => {
                        setTimeout(() => {
                            const height = bar.dataset.height;
                            bar.style.height = height;
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(this.container);
    }
}

// Case studies component
class CaseStudiesComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.caseStudies = [
            {
                client: 'Manchester Construction Co.',
                industry: 'Construction',
                challenge: 'Low online visibility',
                solution: 'Local SEO + Content Marketing',
                results: {
                    traffic: '+285%',
                    leads: '+156%',
                    revenue: '+£180k'
                },
                timeframe: '8 months'
            },
            {
                client: 'London Legal Partners',
                industry: 'Legal Services',
                challenge: 'High competition keywords',
                solution: 'Technical SEO + Link Building',
                results: {
                    traffic: '+340%',
                    leads: '+290%',
                    revenue: '+£420k'
                },
                timeframe: '12 months'
            },
            {
                client: 'Birmingham Dental Group',
                industry: 'Healthcare',
                challenge: 'Multiple location optimization',
                solution: 'Multi-location SEO Strategy',
                results: {
                    traffic: '+198%',
                    leads: '+167%',
                    revenue: '+£95k'
                },
                timeframe: '6 months'
            }
        ];
        this.init();
    }

    init() {
        if (!this.container) return;
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <div class="case-studies-wrapper">
                <div class="section-header">
                    <h2>Recent Success Stories</h2>
                    <p>Real results from real UK businesses</p>
                </div>
                <div class="case-studies-grid">
                    ${this.caseStudies.map(study => `
                        <div class="case-study-card">
                            <div class="case-study-header">
                                <h3>${study.client}</h3>
                                <span class="industry-tag">${study.industry}</span>
                            </div>
                            <div class="case-study-content">
                                <div class="challenge">
                                    <h4>Challenge</h4>
                                    <p>${study.challenge}</p>
                                </div>
                                <div class="solution">
                                    <h4>Solution</h4>
                                    <p>${study.solution}</p>
                                </div>
                                <div class="results">
                                    <h4>Results in ${study.timeframe}</h4>
                                    <div class="results-grid">
                                        <div class="result-item">
                                            <span class="result-value">${study.results.traffic}</span>
                                            <span class="result-label">Traffic Increase</span>
                                        </div>
                                        <div class="result-item">
                                            <span class="result-value">${study.results.leads}</span>
                                            <span class="result-label">More Leads</span>
                                        </div>
                                        <div class="result-item">
                                            <span class="result-value">${study.results.revenue}</span>
                                            <span class="result-label">Revenue Growth</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components if containers exist
    if (document.getElementById('live-stats')) {
        new LiveStatsComponent('live-stats');
    }
    
    if (document.getElementById('currently-working')) {
        new CurrentlyWorkingComponent('currently-working');
    }
    
    if (document.getElementById('performance-graph')) {
        new PerformanceGraphComponent('performance-graph');
    }
    
    if (document.getElementById('case-studies')) {
        new CaseStudiesComponent('case-studies');
    }
});

// Export for use in other files
if (typeof window !== 'undefined') {
    window.LiveStatsComponent = LiveStatsComponent;
    window.CurrentlyWorkingComponent = CurrentlyWorkingComponent;
    window.PerformanceGraphComponent = PerformanceGraphComponent;
    window.CaseStudiesComponent = CaseStudiesComponent;
}
