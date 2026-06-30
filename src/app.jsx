import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";


import Home from "./Pages/Home";
import Layout from "./Layout";
import StartS from "./Pages/StarterS";
import CheckComp from "./Pages/CheckComp";
import Plan from "./Pages/Plan";
import Info from "./Pages/Info";
import Term from "./Pages/Term";
import Review from "./Pages/Review";
import Request from "./Pages/Request";
import Receipt from "./Pages/Receipt";
import Success from "./Pages/Success";
import Retry from "./Pages/Retry";
import Recharge from "./Pages/Recharge";
import AddInfo from "./Pages/AddInfo";
import RTerm from "./Pages/RTerm";
import RReview from "./Pages/RReview";


function App() {
    const location = useLocation();

    return (
        <>
            <ScrollToTop />

            {/* <Header /> */}

            <main>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/start-screen" element={<StartS />} />
                            <Route path="/check-compatibility" element={<CheckComp />} />
                            <Route path="/plan" element={<Plan />} />
                            <Route path="/information" element={<Info />} />
                            <Route path="/term" element={<Term />} />
                            <Route path="/review" element={<Review />} />
                            <Route path="/request" element={<Request />} />
                            <Route path="/success" element={<Success />} />
                            <Route path="/retry" element={<Retry />} />
                            <Route path="/receipt" element={<Receipt />} />


                            <Route path="/recharge" element={<Recharge />} />
                            <Route path="/add-information" element={<AddInfo />} />
                            <Route path="/r-term" element={<RTerm />} />
                            <Route path="/r-review" element={<RReview />} />

                            
                        </Route>
                    </Routes>
                </AnimatePresence>
            </main>
        </>
    );
}

export default App;