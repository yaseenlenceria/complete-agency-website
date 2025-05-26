
// Cities Page Manager - Handles filtering, search, and dynamic content
class CitiesPageManager {
    constructor() {
        this.allCities = [];
        this.filteredCities = [];
        this.currentFilters = {
            search: '',
            region: '',
            industry: '',
            cityType: ''
        };
        
        this.services = {
            construction: [
                { name: 'Construction SEO', url: 'construction-seo.html' },
                { name: 'Architects SEO', url: 'architects-seo.html' },
                { name: 'Plumbers SEO', url: 'plumbers-seo.html' }
            ],
            roofing: [
                { name: 'Roofer SEO', url: 'roofer-seo.html' },
                { name: 'Roof Repair SEO', url: 'roof-repair-seo.html' },
                { name: 'Roof Replacement SEO', url: 'roof-replacement-seo.html' },
                { name: 'Commercial Roofing SEO', url: 'commercial-roofing-seo.html' },
                { name: 'Best Roofing Company SEO', url: 'best-roofing-company.html' },
                { name: 'Best Roofing Companies SEO', url: 'best-roofing-companies-seo.html' }
            ],
            professional: [
                { name: 'Law Firm SEO', url: 'law-firm-seo.html' },
                { name: 'Dentists SEO', url: 'dentists-seo.html' },
                { name: 'Financial SEO', url: 'financial-seo.html' },
                { name: 'Accountants SEO', url: 'accountants-seo.html' }
            ],
            'real-estate': [
                { name: 'Real Estate SEO', url: 'real-estate-seo.html' }
            ],
            agency: [
                { name: 'White Label SEO', url: 'white-label-seo.html' },
                { name: 'Professional SEO Services UK', url: 'professional-seo-services-uk.html' },
                { name: 'Top SEO Agency UK', url: 'top-seo-agency-uk.html' },
                { name: 'Best SEO Agency Manchester', url: 'best-seo-agency-manchester.html' },
                { name: 'SEO Agency Birmingham', url: 'seo-agency-birmingham.html' }
            ]
        };
    }

    init() {
        this.prepareCitiesData();
        this.bindEvents();
        this.renderCities();
    }

    prepareCitiesData() {
        this.allCities = [];
        
        Object.entries(ukCitiesData).forEach(([regionKey, regionData]) => {
            regionData.cities.forEach(city => {
                this.allCities.push({
                    name: city.name,
                    slug: city.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                    region: regionKey,
                    regionName: regionData.name,
                    major: city.major || false,
                    services: this.getServicesForCity(city),
                    stats: this.generateCityStats()
                });
            });
        });
        
        this.filteredCities = [...this.allCities];
    }

    getServicesForCity(city) {
        // Return all services for now, but could be customized per city
        const allServices = [];
        Object.values(this.services).forEach(serviceGroup => {
            allServices.push(...serviceGroup);
        });
        return allServices.slice(0, 8); // Limit to 8 services for preview
    }

    generateCityStats() {
        return {
            traffic: Math.floor(Math.random() * 300 + 200) + '%',
            leads: Math.floor(Math.random() * 200 + 150) + '%',
            ranking: '#' + Math.floor(Math.random() * 3 + 1)
        };
    }

    bindEvents() {
        // Search input
        const searchInput = document.getElementById('citySearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentFilters.search = e.target.value;
                this.filterCities();
            });
        }

        // Filter selects
        const filters = ['regionFilter', 'industryFilter', 'cityTypeFilter'];
        filters.forEach(filterId => {
            const filter = document.getElementById(filterId);
            if (filter) {
                filter.addEventListener('change', (e) => {
                    const filterType = filterId.replace('Filter', '');
                    this.currentFilters[filterType === 'cityType' ? 'cityType' : filterType] = e.target.value;
                    this.filterCities();
                });
            }
        });

        // Clear filters
        const clearButton = document.getElementById('clearFilters');
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                this.clearFilters();
            });
        }

        // Reset search
        const resetButton = document.getElementById('resetSearch');
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                this.clearFilters();
            });
        }

        // Close modal
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-modal') || 
                e.target.classList.contains('city-content-template')) {
                this.closeModal();
            }
        });

        // Footer region links
        document.querySelectorAll('[data-region]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const region = e.target.getAttribute('data-region');
                this.filterByRegion(region);
            });
        });

        // Footer city links
        document.querySelectorAll('[data-city]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const cityName = e.target.getAttribute('data-city');
                this.showCityModal(cityName);
            });
        });
    }

    filterCities() {
        this.filteredCities = this.allCities.filter(city => {
            // Search filter
            if (this.currentFilters.search) {
                const searchTerm = this.currentFilters.search.toLowerCase();
                if (!city.name.toLowerCase().includes(searchTerm) &&
                    !city.regionName.toLowerCase().includes(searchTerm)) {
                    return false;
                }
            }

            // Region filter
            if (this.currentFilters.region && city.region !== this.currentFilters.region) {
                return false;
            }

            // City type filter
            if (this.currentFilters.cityType) {
                if (this.currentFilters.cityType === 'major' && !city.major) return false;
                if (this.currentFilters.cityType === 'regular' && city.major) return false;
            }

            return true;
        });

        this.renderCities();
    }

    clearFilters() {
        this.currentFilters = {
            search: '',
            region: '',
            industry: '',
            cityType: ''
        };

        // Reset form elements
        document.getElementById('citySearch').value = '';
        document.getElementById('regionFilter').value = '';
        document.getElementById('industryFilter').value = '';
        document.getElementById('cityTypeFilter').value = '';

        this.filteredCities = [...this.allCities];
        this.renderCities();
    }

    filterByRegion(region) {
        this.currentFilters.region = region;
        document.getElementById('regionFilter').value = region;
        this.filterCities();
        
        // Scroll to results
        document.getElementById('cities').scrollIntoView({ behavior: 'smooth' });
    }

    renderCities() {
        const citiesGrid = document.getElementById('citiesGrid');
        const resultsCount = document.getElementById('resultsCount');
        const resultsTitle = document.getElementById('resultsTitle');
        const noResults = document.getElementById('noResults');

        if (!citiesGrid) return;

        // Update results count
        if (resultsCount) {
            resultsCount.textContent = this.filteredCities.length;
        }

        // Update title based on filters
        let title = 'All UK Cities';
        if (this.currentFilters.region) {
            const regionName = ukCitiesData[this.currentFilters.region]?.name || this.currentFilters.region;
            title = `${regionName} Cities`;
        }
        if (this.currentFilters.search) {
            title = `Search Results for "${this.currentFilters.search}"`;
        }
        if (resultsTitle) {
            resultsTitle.textContent = title;
        }

        // Show/hide no results
        if (this.filteredCities.length === 0) {
            citiesGrid.style.display = 'none';
            noResults.style.display = 'block';
            return;
        } else {
            citiesGrid.style.display = 'grid';
            noResults.style.display = 'none';
        }

        // Render cities
        citiesGrid.innerHTML = this.filteredCities.map(city => this.createCityCard(city)).join('');

        // Bind click events to city cards
        citiesGrid.querySelectorAll('.city-card').forEach(card => {
            card.addEventListener('click', () => {
                const cityName = card.getAttribute('data-city');
                this.showCityModal(cityName);
            });
        });
    }

    createCityCard(city) {
        const servicesPreview = city.services.slice(0, 4);
        
        return `
            <div class="city-card ${city.major ? 'major-city' : ''}" data-city="${city.name}">
                <div class="city-name">
                    <i class="fas fa-map-marker-alt"></i>
                    ${city.name}
                </div>
                <div class="city-region">${city.regionName}</div>
                <div class="city-services-preview">
                    ${servicesPreview.map(service => 
                        `<span class="service-tag">${service.name.replace(' SEO', '')}</span>`
                    ).join('')}
                    ${city.services.length > 4 ? `<span class="service-tag">+${city.services.length - 4} more</span>` : ''}
                </div>
                <div class="city-stats">
                    <div class="city-stat">
                        <div class="city-stat-number">${city.stats.traffic}</div>
                        <div class="city-stat-label">Traffic</div>
                    </div>
                    <div class="city-stat">
                        <div class="city-stat-number">${city.stats.leads}</div>
                        <div class="city-stat-label">Leads</div>
                    </div>
                    <div class="city-stat">
                        <div class="city-stat-number">${city.stats.ranking}</div>
                        <div class="city-stat-label">Ranking</div>
                    </div>
                </div>
            </div>
        `;
    }

    showCityModal(cityName) {
        const city = this.allCities.find(c => c.name === cityName);
        if (!city) return;

        const modal = document.getElementById('cityContentTemplate');
        const modalCityName = document.getElementById('modalCityName');
        const modalServices = document.getElementById('modalServices');

        if (!modal || !modalCityName || !modalServices) return;

        // Update modal content
        modalCityName.textContent = `SEO Services in ${city.name}`;
        
        // Update all city name placeholders
        modal.querySelectorAll('.city-name-placeholder').forEach(element => {
            element.textContent = city.name;
        });

        // Populate services
        modalServices.innerHTML = city.services.map(service => `
            <a href="${service.url}" class="modal-service-item">
                ${service.name}
            </a>
        `).join('');

        // Show modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('cityContentTemplate');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ukCitiesData !== 'undefined' && window.location.pathname.includes('cities-pages.html')) {
        window.citiesPageManager = new CitiesPageManager();
        window.citiesPageManager.init();
    }
});

// Export for use in other files
if (typeof window !== 'undefined') {
    window.CitiesPageManager = CitiesPageManager;
}
