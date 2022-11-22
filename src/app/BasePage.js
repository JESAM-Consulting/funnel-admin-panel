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
export default function BasePage() { 

  return (
    <>
      <Suspense fallback={<LayoutSplashScreen />}>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <ContentRoute exact path="/dashboard" component={DashboardPage} />
          <ContentRoute exact path="/newsletter" component={News} />
          <ContentRoute exact path="/profile" component={Profile} />
          <ContentRoute exact path="/category" component={Category} />
          <ContentRoute exact path="/mood" component={AppMood} />
          <ContentRoute exact path="/Users" component={Users} />
          <ContentRoute exact path="/tweetgenerat" component={Tweetgenerat} />
          <ContentRoute exact path="/subscription" component={Subscription} />
          <ContentRoute exact path="/bcrechner" component={Bcrechner} />
          <Redirect to="error/error-v6" />
        </Switch>
      </Suspense>
    </>
  );
}
