
// UK SEO Ranking Charts and Tables Component
class UKRankingCharts {
    constructor() {
        this.industryData = {
            construction: {
                averageIncrease: 425,
                clientCount: 150,
                avgPosition: 2.3,
                leadIncrease: 340
            },
            legal: {
                averageIncrease: 380,
                clientCount: 85,
                avgPosition: 1.8,
                leadIncrease: 290
            },
            healthcare: {
                averageIncrease: 295,
                clientCount: 120,
                avgPosition: 2.1,
                leadIncrease: 245
            },
            realestate: {
                averageIncrease: 365,
                clientCount: 95,
                avgPosition: 1.9,
                leadIncrease: 315
            },
            roofing: {
                averageIncrease: 450,
                clientCount: 180,
                avgPosition: 1.7,
                leadIncrease: 385
            }
        };

        this.ukCitiesRankings = [
            { city: 'London', clients: 85, avgRanking: 1.2, trafficIncrease: 420 },
            { city: 'Manchester', clients: 45, avgRanking: 1.4, trafficIncrease: 380 },
            { city: 'Birmingham', clients: 38, avgRanking: 1.6, trafficIncrease: 365 },
            { city: 'Leeds', clients: 32, avgRanking: 1.8, trafficIncrease: 340 },
            { city: 'Liverpool', clients: 28, avgRanking: 2.1, trafficIncrease: 325 },
            { city: 'Sheffield', clients: 25, avgRanking: 2.3, trafficIncrease: 310 },
            { city: 'Bristol', clients: 30, avgRanking: 1.9, trafficIncrease: 355 },
            { city: 'Newcastle', clients: 22, avgRanking: 2.4, trafficIncrease: 295 },
            { city: 'Edinburgh', clients: 35, avgRanking: 1.7, trafficIncrease: 375 },
            { city: 'Cardiff', clients: 20, avgRanking: 2.2, trafficIncrease: 320 }
        ];
    }

    createIndustryPerformanceTable() {
        return `
        <section class="industry-performance-table">
            <div class="container">
                <div class="section-header">
                    <h2>UK Industry SEO Performance Rankings</h2>
                    <p>Comprehensive performance data across major UK industries we serve</p>
                </div>
                <div class="table-container">
                    <table class="performance-table">
                        <thead>
                            <tr>
                                <th>Industry</th>
                                <th>Avg Traffic Increase</th>
                                <th>Clients Served</th>
                                <th>Avg Position</th>
                                <th>Lead Generation Boost</th>
                                <th>Success Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="highlight-row">
                                <td class="industry-cell">
                                    <i class="fas fa-home"></i>
                                    <span>Roofing & Construction</span>
                                </td>
                                <td class="metric excellent">+450%</td>
                                <td class="metric good">180+</td>
                                <td class="metric outstanding">1.7</td>
                                <td class="metric excellent">+385%</td>
                                <td class="metric perfect">98%</td>
                            </tr>
                            <tr>
                                <td class="industry-cell">
                                    <i class="fas fa-hard-hat"></i>
                                    <span>General Construction</span>
                                </td>
                                <td class="metric excellent">+425%</td>
                                <td class="metric good">150+</td>
                                <td class="metric outstanding">2.3</td>
                                <td class="metric good">+340%</td>
                                <td class="metric excellent">96%</td>
                            </tr>
                            <tr>
                                <td class="industry-cell">
                                    <i class="fas fa-balance-scale"></i>
                                    <span>Legal Services</span>
                                </td>
                                <td class="metric good">+380%</td>
                                <td class="metric good">85+</td>
                                <td class="metric excellent">1.8</td>
                                <td class="metric good">+290%</td>
                                <td class="metric good">94%</td>
                            </tr>
                            <tr>
                                <td class="industry-cell">
                                    <i class="fas fa-building"></i>
                                    <span>Real Estate</span>
                                </td>
                                <td class="metric good">+365%</td>
                                <td class="metric average">95+</td>
                                <td class="metric good">1.9</td>
                                <td class="metric good">+315%</td>
                                <td class="metric good">93%</td>
                            </tr>
                            <tr>
                                <td class="industry-cell">
                                    <i class="fas fa-heartbeat"></i>
                                    <span>Healthcare</span>
                                </td>
                                <td class="metric average">+295%</td>
                                <td class="metric good">120+</td>
                                <td class="metric good">2.1</td>
                                <td class="metric average">+245%</td>
                                <td class="metric average">91%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-legend">
                    <div class="legend-item">
                        <span class="legend-color excellent"></span>
                        <span>Exceptional Performance</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color good"></span>
                        <span>Above Average</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color average"></span>
                        <span>Industry Standard</span>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    createUKCitiesChart() {
        return `
        <section class="uk-cities-chart">
            <div class="container">
                <div class="section-header">
                    <h2>UK Cities SEO Performance Chart</h2>
                    <p>Our client success across major UK cities - real performance data</p>
                </div>
                <div class="chart-container">
                    <div class="chart-grid">
                        ${this.ukCitiesRankings.map(city => `
                            <div class="city-performance-card">
                                <div class="city-header">
                                    <h3>${city.city}</h3>
                                    <div class="city-badge">${city.clients} Clients</div>
                                </div>
                                <div class="performance-metrics">
                                    <div class="metric-item">
                                        <span class="metric-label">Avg Position</span>
                                        <span class="metric-value rank-${Math.floor(city.avgRanking)}">#${city.avgRanking}</span>
                                    </div>
                                    <div class="metric-item">
                                        <span class="metric-label">Traffic Boost</span>
                                        <span class="metric-value traffic">+${city.trafficIncrease}%</span>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${(city.trafficIncrease / 500) * 100}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="chart-summary">
                    <div class="summary-stat">
                        <h4>500+</h4>
                        <p>Total UK Clients</p>
                    </div>
                    <div class="summary-stat">
                        <h4>1.8</h4>
                        <p>Average UK Ranking</p>
                    </div>
                    <div class="summary-stat">
                        <h4>94%</h4>
                        <p>Page 1 Success Rate</p>
                    </div>
                    <div class="summary-stat">
                        <h4>365%</h4>
                        <p>Average Traffic Increase</p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    createCompetitorComparisonChart() {
        return `
        <section class="competitor-comparison">
            <div class="container">
                <div class="section-header">
                    <h2>OutSourceSU vs UK SEO Agencies</h2>
                    <p>See how we rank against other leading UK SEO agencies</p>
                </div>
                <div class="comparison-table-wrapper">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Metric</th>
                                <th class="highlight-col">OutSourceSU</th>
                                <th>Agency B</th>
                                <th>Agency C</th>
                                <th>Agency D</th>
                                <th>UK Average</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Average Traffic Increase</td>
                                <td class="highlight-col best">+365%</td>
                                <td class="good">+280%</td>
                                <td class="average">+195%</td>
                                <td class="average">+165%</td>
                                <td class="poor">+125%</td>
                            </tr>
                            <tr>
                                <td>Page 1 Rankings (3 months)</td>
                                <td class="highlight-col best">94%</td>
                                <td class="good">78%</td>
                                <td class="average">65%</td>
                                <td class="average">58%</td>
                                <td class="poor">45%</td>
                            </tr>
                            <tr>
                                <td>Client Retention Rate</td>
                                <td class="highlight-col best">96%</td>
                                <td class="good">84%</td>
                                <td class="average">72%</td>
                                <td class="average">68%</td>
                                <td class="poor">60%</td>
                            </tr>
                            <tr>
                                <td>ROI Average</td>
                                <td class="highlight-col best">485%</td>
                                <td class="good">320%</td>
                                <td class="average">245%</td>
                                <td class="average">190%</td>
                                <td class="poor">150%</td>
                            </tr>
                            <tr>
                                <td>Time to Page 1</td>
                                <td class="highlight-col best">68 days</td>
                                <td class="good">95 days</td>
                                <td class="average">125 days</td>
                                <td class="average">145 days</td>
                                <td class="poor">180 days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="comparison-cta">
                    <h3>Ready to Experience UK's #1 SEO Performance?</h3>
                    <a href="contact.html" class="btn-primary">Get Your Free Competitive Analysis</a>
                </div>
            </div>
        </section>
        `;
    }

    init() {
        const chartsSection = document.getElementById('uk-charts-section');
        if (chartsSection) {
            chartsSection.innerHTML = 
                this.createIndustryPerformanceTable() +
                this.createUKCitiesChart() +
                this.createCompetitorComparisonChart();
        }
    }
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const charts = new UKRankingCharts();
    charts.init();
});

// Export for use in other files
if (typeof window !== 'undefined') {
    window.UKRankingCharts = UKRankingCharts;
}
