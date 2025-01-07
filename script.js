document.addEventListener('DOMContentLoaded', function() {
    const ramSlider = document.getElementById('ramSlider');
    const cpuPercentageSlider = document.getElementById('cpuPercentageSlider');
    const storageSlider = document.getElementById('storageSlider');
    const ramValue = document.getElementById('ramValue');
    const cpuPercentageValue = document.getElementById('cpuPercentageValue');
    const storageValue = document.getElementById('storageValue');
    const price = document.getElementById('full-price');
    const discount_price = document.getElementById('discount-price');
    const additionalStorageInfo = document.getElementById('additionalStorageInfo');
  
    // Resources section elements
    const resourceRam = document.getElementById('resourceRam');
    const resourceCpu = document.getElementById('resourceCpu');
    const resourceStorage = document.getElementById('resourceStorage');
  
    // Cloud storage elements
    const cloudStorageSlider = document.getElementById('cloudStorageSlider');
    const cloudStorageValue = document.getElementById('cloudStorageValue');
    const cloudPrice = document.getElementById('cloudPrice');
    const cloudResourceStorage = document.getElementById('cloudResourceStorage');
  
    // New elements for months dropdown and savings info
    const monthsDropdown = document.getElementById('monthsDropdown');
    const savingsInfo = document.getElementById('savingsInfo');
    const banner = document.querySelector('.banner');
    const discountedPriceText = document.querySelector('.discounted-price-text');
    let isSaleOngoing = true; // Toggle this variable to true or false to indicate if a sale is ongoing

    const cloudMonthsDropdown = document.getElementById('cloudMonthsDropdown');
  
    // Pricing logic
    function calculatePrice() {
        const ramValueNum = parseFloat(ramSlider.value);
        const ramPrice = ramValueNum * 0.25; // $0.25 per GB of RAM
        const cpuPercentage = parseFloat(cpuPercentageSlider.value);
        const cpuPrice = (cpuPercentage / 100) * 2; // $1.5 per 100% CPU allocation
        const storageValueNum = parseFloat(storageSlider.value);
        const storagePrice = storageValueNum * 0.10; // $0.10 per GB of storage 
  
        const months = parseInt(monthsDropdown.value);
        const totalPrice = (ramPrice + cpuPrice + storagePrice) * months;
        price.textContent = totalPrice.toFixed(2);
  
        let discountedPrice = totalPrice;
        if (isSaleOngoing) {
            discountedPrice = totalPrice * 0.75; // Apply 25% discount
            discount_price.textContent = discountedPrice.toFixed(2);
            savingsInfo.textContent = `You save $${(totalPrice - discountedPrice).toFixed(2)} because of the discount!`;
        } else {
            discount_price.textContent = '';
            savingsInfo.textContent = '';
        }
  
        // Update additional storage message
        const additionalStorage = Math.floor(ramValueNum / 2);
        additionalStorageInfo.textContent = `You get an additional ${additionalStorage} GB of free storage based on your selected RAM.`;
  
        // Update the resources section
        resourceRam.textContent = `${ramValueNum} GB`;
        resourceCpu.textContent = `${cpuPercentage}%`;
        resourceStorage.textContent = `${storageValueNum} GB + ${additionalStorage} GB additional based on RAM`;
    }
  
    function calculateCloudPrice() {
        const cloudStorageValueNum = parseFloat(cloudStorageSlider.value);
        const cloudStoragePrice = cloudStorageValueNum * 0.02; // $0.02 per GB of cloud storage
        const cloudMonths = parseInt(cloudMonthsDropdown.value);
        const totalCloudPrice = cloudStoragePrice * cloudMonths;
        cloudPrice.textContent = totalCloudPrice.toFixed(2);

        // Update the cloud resources section
        cloudResourceStorage.textContent = `${cloudStorageValueNum} GB`;
    }
  
    // Update pricing and resources when sliders change
    ramSlider.addEventListener('input', () => {
        ramValue.textContent = `${ramSlider.value} GB`;
        calculatePrice();
    });
  
    cpuPercentageSlider.addEventListener('input', () => {
        cpuPercentageValue.textContent = `${cpuPercentageSlider.value}%`;
        calculatePrice();
    });
  
    storageSlider.addEventListener('input', () => {
        storageValue.textContent = `${storageSlider.value} GB`;
        calculatePrice();
    });
  
    cloudStorageSlider.addEventListener('input', () => {
        cloudStorageValue.textContent = `${cloudStorageSlider.value} GB`;
        calculateCloudPrice();
    });
  
    monthsDropdown.addEventListener('change', calculatePrice);
    cloudMonthsDropdown.addEventListener('change', calculateCloudPrice);
  
    // Initial calculation
    calculatePrice();
    calculateCloudPrice();
  
    // Initial setup based on sale status
    if (!isSaleOngoing) {
        banner.style.display = 'none';
        discountedPriceText.style.display = 'none';
        savingsInfo.style.display = 'none';
    }
  });
