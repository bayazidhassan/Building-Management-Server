const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;



//all routes
const connectDB = require('./db/connectDB');
const applyMiddleware = require('./middlewares/applyMiddleware');
const authenticationRoutes = require('./routes/authentication/index')
const apartmentsRoutes = require('./routes/apartments/index')
const apartmentsCountRoutes = require('./routes/apartmentsCount/index')
const usersRoutes = require('./routes/users/index')
const checkAdminRoutes = require('./routes/checkAdmin.js/index')
const checkMemberRoutes = require('./routes/checkMember/index')
const setAgreementRoutes = require('./routes/setAgreements/index')
const getAgreementRoutes = require('./routes/getAgreements/index')
const getAllAgreementRoutes = require('./routes/getAllAgreements/index')
const setRejectStatusRoutes = require('./routes/setRejectStatus/index')
const setMemberRoleRoutes = require('./routes/setMemberRole/index')
const paymentAgreementsRoutes = require('./routes/paymentAgreements/index')
const getAgreementPaymentRoutes = require('./routes/getAgreementPayment/index')
const CreatePaymentIntentRoutes = require('./routes/createPaymentIntent/index')
const setPaymentHistoryRoutes = require('./routes/setPaymentHistory/index')
const getPaymentHistoryRoutes = require('./routes/getPaymentHistory/index')
const getAllMembersRoutes = require('./routes/getAllMembers/index')
const removeMemberRoutes = require('./routes/removeMember/index')
const makeAnnouncementRoutes = require('./routes/makeAnnouncement/index')
const getAnnouncementRoutes = require('./routes/getAnnouncement/index')
const getAllUsersRoutes = require('./routes/getAllUsers/index')
const getBookedApartmentRoutes = require('./routes/getBookedApartment/index')
const setApartmentStatusPendingRoutes = require('./routes/setApartmentStatusPending/index')
const getApartmentStatusRoutes = require('./routes/getApartmentStatus/index')
const setCouponRoutes = require('./routes/addCoupon/index')
const getAllCouponsRoutes = require('./routes/getAllCoupons/index')
const changeCouponStatusRoutes = require('./routes/changeCouponStatus/index')
const getCouponPercentageRoutes = require('./routes/getCouponPercentage/index')



//middleware
applyMiddleware(app);


app.use(authenticationRoutes);
app.use(apartmentsRoutes);
app.use(apartmentsCountRoutes);
app.use(usersRoutes);
app.use(checkAdminRoutes);
app.use(checkMemberRoutes);
app.use(setAgreementRoutes);
app.use(getAgreementRoutes);
app.use(getAllAgreementRoutes);
app.use(setRejectStatusRoutes);
app.use(setMemberRoleRoutes);
app.use(paymentAgreementsRoutes);
app.use(getAgreementPaymentRoutes);
app.use(CreatePaymentIntentRoutes);
app.use(setPaymentHistoryRoutes);
app.use(getPaymentHistoryRoutes);
app.use(getAllMembersRoutes);
app.use(removeMemberRoutes);
app.use(makeAnnouncementRoutes);
app.use(getAnnouncementRoutes);
app.use(getAllUsersRoutes);
app.use(getBookedApartmentRoutes);
app.use(setApartmentStatusPendingRoutes);
app.use(getApartmentStatusRoutes);
app.use(setCouponRoutes);
app.use(getAllCouponsRoutes);
app.use(changeCouponStatusRoutes);
app.use(getCouponPercentageRoutes);






app.get('/health', (req, res) => {
    res.send('Building Management server is running')
})

app.all('*', (req, res, next) => {
    const error = new Error(`The requested url is invalid: [${req.url}]`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 5000).json({
        message: err.message
    })
})

// const main = async () => {
//     await connectDB();
//     app.listen(port, () => {
//         console.log(`Building Management server is running on port: ${port}`)
//     })
// }

// main();


module.exports = app