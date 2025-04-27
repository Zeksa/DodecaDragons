window.CrazyGames.SDK.init().then(() => {
  load();
  setAutoSave();

  if (window.CrazyGames.SDK.environment === "disabled") return;

  window.storageHandler = {
    setItem: (key, value) => window.CrazyGames.SDK.data.setItem(key, value),
    getItem: (key) => window.CrazyGames.SDK.data.getItem(key),
  };

  window.requestRewardedAd = () => {
    const callbacks = {
      adFinished: () => {
        console.log("End midgame ad");
        boostSpeed();
      },
      adError: (error) => console.log("Error midgame ad", error),
      adStarted: () => console.log("Start midgame ad"),
    };
    window.CrazyGames.SDK.ad.requestAd("rewarded", callbacks);
  };

  document.getElementById("watchAdButton").style.display = "block";
});

window.storageHandler = {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: (key) => localStorage.getItem(key),
};
