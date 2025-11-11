


// const Booking = require("../models/booking");
// const Listing = require("../models/listing");

// module.exports.showBookingForm = async (req, res) => {
//   const { id } = req.params; // listing id
//   const listing = await Listing.findById(id);
//   if (!listing) {
//     req.flash("error", "Listing not found!");
//     return res.redirect("/listings");
//   }
//   res.render("bookings/new", { listing });
// };

// module.exports.createBooking = async (req, res) => {
//   try {
//     const { id } = req.params; // listing id
//     const { checkIn, checkOut, guests } = req.body;

//     const listing = await Listing.findById(id);
//     if (!listing) {
//       req.flash("error", "Listing not found!");
//       return res.redirect("/listings");
//     }

//     // Validate input
//     if (!checkIn || !checkOut || !guests) {
//       req.flash("error", "Please fill all booking details.");
//       return res.redirect(`/listings/${id}`);
//     }

//     // Calculate number of days
//     const start = new Date(checkIn);
//     const end = new Date(checkOut);
//     const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

//     if (isNaN(days) || days <= 0) {
//       req.flash("error", "Invalid date range!");
//       return res.redirect(`/listings/${id}`);
//     }

//     // Calculate total price
//     const totalPrice = listing.price * days * guests;

//     // Create new booking
//     const booking = new Booking({
//       user: req.user._id,
//       listing: listing._id,
//       checkIn,
//       checkOut,
//       guests,
//       totalPrice,
//       status: "confirmed",
//     });

//     await booking.save();

//     req.flash("success", "Booking confirmed successfully!");
//     res.redirect(`/bookings/${booking._id}`);
//   } catch (err) {
//     console.error("Booking Error:", err);
//     req.flash("error", "Booking failed. Please try again.");
//     res.redirect("back");
//   }
// };

// module.exports.showUserBookings = async (req, res) => {
//   const bookings = await Booking.find({ user: req.user._id }).populate("listing");
//   res.render("bookings/index", { bookings });
// };

// module.exports.showBookingDetails = async (req, res) => {
//   const { id } = req.params;
//   const booking = await Booking.findById(id).populate("listing user");
//   if (!booking) {
//     req.flash("error", "Booking not found!");
//     return res.redirect("/bookings");
//   }
//   res.render("bookings/show", { booking });
// };

// module.exports.cancelBooking = async (req, res) => {
//   const { id } = req.params;
//   const booking = await Booking.findById(id);
//   if (!booking) {
//     req.flash("error", "Booking not found!");
//     return res.redirect("/bookings");
//   }

//   if (!booking.user.equals(req.user._id)) {
//     req.flash("error", "You are not authorized to cancel this booking!");
//     return res.redirect("/bookings");
//   }

//   booking.status = "cancelled";
//   await booking.save();

//   req.flash("success", "Booking cancelled successfully!");
//   res.redirect("/bookings");
// };




const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.showBookingForm = async (req, res) => {
  const { id } = req.params; // listing id
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  res.render("bookings/new", { listing });
};

module.exports.createBooking = async (req, res) => {
  try {
    const { id } = req.params; // listing id
    const { checkIn, checkOut, guests } = req.body;

    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    // Validate input
    if (!checkIn || !checkOut || !guests) {
      req.flash("error", "Please fill all booking details.");
      return res.redirect(`/listings/${id}`);
    }

    // Calculate days
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (isNaN(days) || days <= 0) {
      req.flash("error", "Invalid date range!");
      return res.redirect(`/listings/${id}`);
    }

    // Calculate total price
    const totalPrice = listing.price * days * guests;

    // Create booking
    const booking = new Booking({
      user: req.user._id,
      listing: listing._id,
      checkIn: start,
      checkOut: end,
      guests,
      totalPrice,
      status: "confirmed",
    });

    await booking.save();

    req.flash("success", "Booking confirmed successfully!");
    res.redirect(`/bookings/${booking._id}`);
  } catch (err) {
    console.error("Booking Error:", err);
    req.flash("error", "Booking failed. Please try again.");
    res.redirect("back");
  }
};

module.exports.showUserBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate("listing");
  res.render("bookings/index", { bookings });
};

module.exports.showBookingDetails = async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findById(id).populate("listing user");
  if (!booking) {
    req.flash("error", "Booking not found!");
    return res.redirect("/bookings");
  }
  res.render("bookings/show", { booking });
};

// ✅ UPDATED — Delete booking instead of cancelling
module.exports.cancelBooking = async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findById(id);

  if (!booking) {
    req.flash("error", "Booking not found!");
    return res.redirect("/bookings");
  }

  // Check authorization
  if (!booking.user.equals(req.user._id)) {
    req.flash("error", "You are not authorized to cancel this booking!");
    return res.redirect("/bookings");
  }

  // Delete the booking
  await Booking.findByIdAndDelete(id);

  req.flash("success", "Booking cancelled and removed successfully!");
  res.redirect("/bookings");
};
