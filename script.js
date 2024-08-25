document.addEventListener('DOMContentLoaded', function() {
  const ramSlider = document.getElementById('ramSlider');
  const cpuPercentageSlider = document.getElementById('cpuPercentageSlider');
  const storageSlider = document.getElementById('storageSlider');
  const ramValue = document.getElementById('ramValue');
  const cpuPercentageValue = document.getElementById('cpuPercentageValue');
  const storageValue = document.getElementById('storageValue');
  const price = document.getElementById('price');

  // Pricing logic
  function calculatePrice() {
      const ramValueNum = parseFloat(ramSlider.value);
      const ramPrice = ramValueNum * 0.25; // $0.25 per GB of RAM
      const cpuPercentage = parseFloat(cpuPercentageSlider.value);
      const cpuPrice = (cpuPercentage / 100) * 2; // $2 per 100% CPU allocation

      // Minimum disk space is 3 GB per GB of RAM
      const minDiskSpace = ramValueNum * 3;
      const storageValueNum = parseFloat(storageSlider.value);

      // Calculate storage price: $0.20 per GB for all storage
      const storagePrice = storageValueNum * 0.20;

      const totalPrice = ramPrice + cpuPrice + storagePrice;
      const discountedPrice = totalPrice * 0.50; // Apply 50% discount
      price.textContent = discountedPrice.toFixed(2);
  }

  // Update pricing when sliders change
  ramSlider.addEventListener('input', () => {
      ramValue.textContent = `${ramSlider.value} GB`;
      // Ensure storage slider's value is always at least the minimum required disk space
      storageSlider.min = ramSlider.value * 3;
      storageSlider.value = Math.max(storageSlider.value, storageSlider.min);
      storageValue.textContent = `${storageSlider.value} GB`;
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

  // Initial calculation
  calculatePrice();
});
