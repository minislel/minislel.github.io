<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        * {
            font-family: "Comic Sans MS", "Comic Sans";
        }
    </style>
    <title>LOLOLOLO</title>
</head>

<body>
    <h1>uwu</h1>
    <h2><input type="checkbox" class="catboy" />i am a catboy</h2>
    <a href="https://minislel.github.io">CLICK HERE BOY</a>
    <button class="napierdalacz">
        <img src="https://i.imgur.com/31fA5CM.png" width="100" height="100" />
    </button>
    <button class="napierdalacz-stop">
        <img src="https://i.imgur.com/sgQXzaw.png" width="100" height="100" alt="" />
    </button>
    <input type="number" class="loyalityId" value="985" />
    <script>
        let intid = null;
        document.querySelector(".napierdalacz").addEventListener("click", () => {
            if (intid) clearInterval(intid);
            intid = setInterval(() => {
                getPrize(
                    mcd.bridge,
                    parseInt(document.querySelector(".loyalityId").value),
                    mcd.bridge.message("deals")
                );
            }, 2500);
        });
        document.querySelector(".napierdalacz-stop").addEventListener("click", () => {
            if (intid) clearInterval(intid);
        });
        document.addEventListener("mcdBridgeReady", function (e) {
            console.log("gowno");
            let offerActivation = mcd.bridge.message("offerActivation");
            let deals = mcd.bridge.message("deals");
            let user = mcd.bridge.message("user");
            user.send({
                promptlogin: true
            });
            user.on("data", function (data) {
                console.log("chuj");
                console.log(data);
                console.log(user);
                console.log(deals);
                console.log("kutas");
                //   getPrize(offerActivation);
                let i = 985;
            });
            user.on("error", function (error) {});
            user.on("done", function () {});
        });

        function getPrize(bridge, loyalityId, deals) {
            let offerActivation = bridge.message("offerActivation")
            let offers = bridge.message("offers")
            offers.send({
                getRedeemedOffers: true
            });
            offerActivation.send({
                loyaltyId: 2400,
                autoActivate: true,
                rewardId: 97983
            });
            offerActivation.on("data", function (data) {
                console.log("offer activation data", loyalityId, data[0]);
            });
            offerActivation.on("error", function (error) {
                console.warn("MCD ERROR", loyalityId, JSON.stringify(error));
            });
            offerActivation.on("done", function () {
                console.log("corn done 11", loyalityId);
                console.log(offerActivation);
                console.log(JSON.stringify(offerActivation));
            });

            // offers.on("data", function (data) {
            //     console.log("offers data", loyalityId, data);
            //     //  console.log(JSON.stringify(data));
            // });
            // offers.on("error", function (error) {
            //     console.warn("offers MCD ERROR", loyalityId, JSON.stringify(error));
            // });
            // offers.on("done", function () {
            //     console.log("offers done 22", loyalityId);
            // });
        }
    </script>
    <script src="//cdn.jsdelivr.net/npm/eruda"></script>
    <script>
        eruda.init();
    </script>
</body>

</html>
