const router = require("express").Router();
const stripe = require("stripe")("sk_test_51LvOoiSIey7w1QmSWRUQyI1j7rsKLZn3942y1qhNVZIMr3wLZ6ydGTvSGLtCre98shiQb5iwXg1BPgVAF6slcw5R00v8fTfgdZ");

router.post("/payment", async (req, res) => {
  await stripe.paymentIntents.create(
    {
      // source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
        console.log(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;