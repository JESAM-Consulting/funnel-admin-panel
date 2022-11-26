import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute, LayoutSplashScreen } from "../_metronic/layout"; 
import DashboardPage from "./pages/DashboardPage"; 
import News from "../_metronic/components/News/News";
import Profile from "../_metronic/components/Profile/Profile";
import Category from "../_metronic/components/Category/Category";
import AppMood from "../_metronic/components/Mood/Mood";
import Users from "../_metronic/components/AllUsers/Users";
import Tweetgenerat from "../_metronic/components/TweetGenerat/Tweetgenerat";
import Subscription from "../_metronic/components/Subscription/Subscription";
import Bcrechner from "../_metronic/components/Bcrechner/Bcrechner";


import Keuters from "../_metronic/components/keuters/keuters";
import Pro from "../_metronic/components/Pro/Pro";
import Sayahi from "../_metronic/components/Sayahi/Sayahi";
import Selfmade from "../_metronic/components/Selfmade-werkstatt/Selfmade-werkstatt";
import Finance from "../_metronic/components/Finance/Finance";
import Immo from "../_metronic/components/Immo/Immo";
import SolarPvcheck from "../_metronic/components/SolarPvcheck/SolarPvcheck";
import Hv from "../_metronic/components/Hv/Hv";
import Pink from "../_metronic/components/Pink/Pink";
import FFinance from "../_metronic/components/FFinance/FFinance";
import Feenergy from "../_metronic/components/Fe-energy/Fe-energy";
export default function BasePage() { 

  return (
    <>
      <Suspense fallback={<LayoutSplashScreen />}>
        <Switch>
          <Redirect exact from="/" to="/bcrechner" />
          {/* <ContentRoute exact path="/dashboard" component={DashboardPage} /> */}
          <ContentRoute exact path="/newsletter" component={News} />
          <ContentRoute exact path="/profile" component={Profile} />
          <ContentRoute exact path="/category" component={Category} />
          <ContentRoute exact path="/mood" component={AppMood} />
          <ContentRoute exact path="/Users" component={Users} />
          <ContentRoute exact path="/tweetgenerat" component={Tweetgenerat} />
          <ContentRoute exact path="/subscription" component={Subscription} />
          <ContentRoute exact path="/bcrechner" component={Bcrechner} />
          <ContentRoute exact path="/keuters" component={Keuters} />
          <ContentRoute exact path="/pro" component={Pro} />
          <ContentRoute exact path="/sayahi-scholz" component={Sayahi} />
          <ContentRoute exact path="/finance" component={Finance} />
          <ContentRoute exact path="/selfmade-werkstatt" component={Selfmade} />
          <ContentRoute exact path="/immo-tommy" component={Immo} />
          <ContentRoute exact path="/solar-pvcheck" component={SolarPvcheck} />
          <ContentRoute exact path="/hv" component={Hv} />
          <ContentRoute exact path="/pink" component={Pink} />
          <ContentRoute exact path="/fe-finance" component={FFinance} />
          <ContentRoute exact path="/fe-energy" component={Feenergy} />
          <Redirect to="error/error-v6" />
        </Switch>
      </Suspense>
    </>
  );
}
