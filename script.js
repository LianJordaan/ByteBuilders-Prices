document.addEventListener('DOMContentLoaded', function() {
  const ramSlider = document.getElementById('ramSlider');
  const cpuPercentageSlider = document.getElementById('cpuPercentageSlider');
  const storageSlider = document.getElementById('storageSlider');
  const ramValue = document.getElementById('ramValue');
  const cpuPercentageValue = document.getElementById('cpuPercentageValue');
  const storageValue = document.getElementById('storageValue');
  const price = document.getElementById('price');
  const additionalStorageInfo = document.getElementById('additionalStorageInfo');

  // Resources section elements
  const resourceRam = document.getElementById('resourceRam');
  const resourceCpu = document.getElementById('resourceCpu');
  const resourceStorage = document.getElementById('resourceStorage');

  // Pricing logic
  function calculatePrice() {
      const ramValueNum = parseFloat(ramSlider.value);
      const ramPrice = ramValueNum * 0.25; // $0.25 per GB of RAM
      const cpuPercentage = parseFloat(cpuPercentageSlider.value);
      const cpuPrice = (cpuPercentage / 100) * 2; // $1.5 per 100% CPU allocation
      const storageValueNum = parseFloat(storageSlider.value);
      const storagePrice = storageValueNum * 0.10; // $0.10 per GB of storage 

      const totalPrice = ramPrice + cpuPrice + storagePrice - 0.1;
      const discountedPrice = totalPrice * 1; // Apply 0% discount
      price.textContent = discountedPrice.toFixed(2);

      // Update additional storage message
      const additionalStorage = Math.floor(ramValueNum / 2);
      additionalStorageInfo.textContent = `You get an additional ${additionalStorage} GB of free storage based on your selected RAM.`;

      // Update the resources section
      resourceRam.textContent = `${ramValueNum} GB`;
      resourceCpu.textContent = `${cpuPercentage}%`;
      resourceStorage.textContent = `${storageValueNum} GB + ${additionalStorage} GB additional based on RAM`;
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

  // Initial calculation
  calculatePrice();
});
