window.CrazyGames.SDK.init().then(() => {
  load();
  setAutoSave();

  if (window.CrazyGames.SDK.environment === "disabled") return;

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

  if (!mobileCheck()) {
    setInterval(() => {
      window.CrazyGames.SDK.banner.requestResponsiveBanner(
        "responsive-banner-container"
      );
    }, 1000 * 61);
  }
});
