// // routes/bookingRoutes.js
// const express = require("express");
// const router = express.Router();
// const bookingController = require("../controllers/bookingController");
// const { isLoggedIn } = require("../middleware");

// router.get("/:id/new", isLoggedIn, bookingController.showBookingForm);
// router.post("/:id", isLoggedIn, bookingController.createBooking);
// router.get("/", isLoggedIn, bookingController.showUserBookings);
// router.get("/:id", isLoggedIn, bookingController.showBookingDetails);
// router.post("/:id/cancel", isLoggedIn, bookingController.cancelBooking);

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const bookingController = require("../controllers/bookingController");
// const { isLoggedIn } = require("../middleware");

// // show booking form for specific listing
// router.get("/listings/:id/book", isLoggedIn, bookingController.showBookingForm);

// // create booking
// router.post("/bookings/:id", isLoggedIn, bookingController.createBooking);

// // show all bookings for user
// router.get("/bookings", isLoggedIn, bookingController.showUserBookings);

// // show specific booking details
// router.get("/bookings/:id", isLoggedIn, bookingController.showBookingDetails);

// // cancel booking
// router.post("/bookings/:id/cancel", isLoggedIn, bookingController.cancelBooking);

// module.exports = router;




// // routes/bookingRoutes.js
// const express = require("express");
// const router = express.Router();
// const bookingController = require("../controllers/bookingController");
// const { isLoggedIn } = require("../middleware");

// // Show booking form for a specific listing
// router.get("/listings/:id/book", isLoggedIn, bookingController.showBookingForm);

// // Create booking
// router.post("/bookings/:id", isLoggedIn, bookingController.createBooking);

// // Show all bookings for a logged-in user
// router.get("/bookings", isLoggedIn, bookingController.showUserBookings);

// // Show details for one booking
// router.get("/bookings/:id", isLoggedIn, bookingController.showBookingDetails);

// // Cancel a booking
// router.post("/bookings/:id/cancel", isLoggedIn, bookingController.cancelBooking);

// module.exports = router;




// // routes/bookingRoutes.js
// const express = require("express");
// const router = express.Router();
// const bookingController = require("../controllers/bookingController");
// const { isLoggedIn } = require("../middleware");

// // Show booking form for a specific listing
// router.get("/:id/new", isLoggedIn, bookingController.showBookingForm);

// // Create a booking
// router.post("/:id", isLoggedIn, bookingController.createBooking);

// // Show all bookings for the current user
// router.get("/", isLoggedIn, bookingController.showUserBookings);

// // Show details of a particular booking
// router.get("/details/:id", isLoggedIn, bookingController.showBookingDetails);

// // Cancel a booking
// router.post("/cancel/:id", isLoggedIn, bookingController.cancelBooking);

// module.exports = router;





// // routes/bookingRoutes.js
// const express = require("express");
// const router = express.Router();
// const bookingController = require("../controllers/bookingController");
// const { isLoggedIn } = require("../middleware");

// router.get("/:id/new", isLoggedIn, bookingController.showBookingForm);
// router.post("/:id", isLoggedIn, bookingController.createBooking);
// router.get("/", isLoggedIn, bookingController.showUserBookings);
// router.get("/details/:id", isLoggedIn, bookingController.showBookingDetails);
// router.post("/cancel/:id", isLoggedIn, bookingController.cancelBooking);

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const bookingController = require("../controllers/bookingController");
// const { isLoggedIn } = require("../middleware");

// // Show booking form for a specific listing
// router.get("/:id/new", isLoggedIn, bookingController.showBookingForm);

// // Create a booking
// router.post("/:id", isLoggedIn, bookingController.createBooking);

// // Show all bookings for the current user
// router.get("/", isLoggedIn, bookingController.showUserBookings);

// // Show details of a particular booking
// router.get("/:id", isLoggedIn, bookingController.showBookingDetails);

// // Cancel a booking
// router.post("/:id/cancel", isLoggedIn, bookingController.cancelBooking);

// module.exports = router;




const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const { isLoggedIn } = require("../middleware");

// Show booking form for a specific listing
router.get("/:id/new", isLoggedIn, bookingController.showBookingForm);

// Create a booking
router.post("/:id", isLoggedIn, bookingController.createBooking);

// Show all bookings for the current user
router.get("/", isLoggedIn, bookingController.showUserBookings);

// Show details of a particular booking
router.get("/:id", isLoggedIn, bookingController.showBookingDetails);

// Cancel a booking
router.post("/:id/cancel", isLoggedIn, bookingController.cancelBooking);

module.exports = router;
