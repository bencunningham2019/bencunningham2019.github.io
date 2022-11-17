const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  async function allAlice() {
    const result1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
    const result2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
    const result3 = await alice3.animate(aliceTumbling, aliceTiming).finished;
  }
  
  allAlice();