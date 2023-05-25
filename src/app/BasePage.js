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
import Kontakt from "../_metronic/components/kontakt/kontakt";
import finanzenmitercan from "../_metronic/components/finanzenmitercan/finanzenmitercan";
import Finanzenmitercan from "../_metronic/components/finanzenmitercan/finanzenmitercan";
import Lbm from "../_metronic/components/lbm/lbm";
import Mutualz from "../_metronic/components/Mutualz/Mutualz";
import Houselovelive from "../_metronic/components/houselovelive/houselovelive";
import Deniashome from "../_metronic/components/deniashome/deniashome";
import Zuhauseselig from "../_metronic/components/zuhauseselig/zuhauseselig";
import Energyfinance from "../_metronic/components/energyfinance/energyfinance";
import JagrasHome from "../_metronic/components/jagrasHome/jagrasHome";
import Envoltec from "../_metronic/components/Envoltec/Envoltec";
import Stahlbetonhaus from "../_metronic/components/Stahlbetonhaus/Stahlbetonhaus";
import Anniinteriorlove from "../_metronic/components/Anniinteriorlove/Anniinteriorlove";
import EnergyConzept from "../_metronic/components/energyConzept/EnergyConzept";
import DerBauleiter from "../_metronic/components/derBauleiter/DerBauleiter";
import Josefashome from "../_metronic/components/josefashome/Josefashome";
import WillaNr from "../_metronic/components/willaNr/WillaNr";
import VorteilsrechnerGreen from "../_metronic/components/vorteilsrechnerGreen/VorteilsrechnerGreen";
import HomeLivingInterior from "../_metronic/components/HomeLivingInterior/HomeLivingInterior";
import Interiorlacasa from "../_metronic/components/Interiorlacasa/Interiorlacasa";
import Sarahklefisch from "../_metronic/components/Sarahklefisch/Sarahklefisch";
import JesamGroupSolutions from "../_metronic/components/JesamGroupSolutions/JesamGroupSolutions";
import DieStadtvilla from "../_metronic/components/DieStadtvilla/DieStadtvilla";
import Encrease from "../_metronic/components/encrease/Encrease";
import CkFunnel from "../_metronic/components/Ck/CkFunnel";
import FamilieNachhaltigkeit from "../_metronic/components/FamilieNachhaltigkeit/FamilieNachhaltigkeit";
import FamilienglueckTrifft from "../_metronic/components/FamilienglueckTrifft/FamilienglueckTrifft";
import GinaKaas from "../_metronic/components/GinaKaas/GinaKaas";
import LeysHome from "../_metronic/components/LeysHome/LeysHome";
import MyNordicHome from "../_metronic/components/MyNordicHome/MyNordicHome";
import Oguzaksy from "../_metronic/components/Oguzaksy/Oguzaksy";
import Eigenheimliebe from "../_metronic/components/Eigenheimliebe/Eigenheimliebe";
import FlyKati from "../_metronic/components/FlyKati/FlyKati";
import Nordiccalm from "../_metronic/components/Nordiccalm/Nordiccalm";
import NeuesNest from "../_metronic/components/NeuesNest/NeuesNest";
import GeliebtesHus from "../_metronic/components/GeliebtesHus/GeliebtesHus";
import Reinblick from "../_metronic/components/Reinblick/Reinblick";
import ItsVnssa from "../_metronic/components/ItsVnssa/ItsVnssa";
import Christelle from "../_metronic/components/Christelle/Christelle";
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
          <ContentRoute exact path="/energie-konzept" component={EnergyConzept} />
          <ContentRoute exact path="/geliebtes-hus" component={GeliebtesHus} />
          <ContentRoute exact path="/reinblick" component={Reinblick} />
          <ContentRoute exact path="/its-vnssa" component={ItsVnssa} />
          <ContentRoute exact path="/christelle" component={Christelle} />
          <ContentRoute exact path="/derbauleiter" component={DerBauleiter} />
          <ContentRoute exact path="/josefashome" component={Josefashome} />
          <ContentRoute exact path="/willanr" component={WillaNr} />
          <ContentRoute exact path="/vorteilsrechner-green" component={VorteilsrechnerGreen} />
          <ContentRoute exact path="/home-living-interior" component={HomeLivingInterior} />
          <ContentRoute exact path="/interiorlacasa" component={Interiorlacasa} />
          <ContentRoute exact path="/jesamGroupSolutions" component={JesamGroupSolutions} />
          <ContentRoute exact path="/die-stadtvilla" component={DieStadtvilla} />
          <ContentRoute exact path="/familie-nachhaltigkeit" component={FamilieNachhaltigkeit} />
          <ContentRoute exact path="/familienglueck-trifft" component={FamilienglueckTrifft} />
          <ContentRoute exact path="/gina-kaas" component={GinaKaas} />
          <ContentRoute exact path="/leys-home" component={LeysHome} />
          <ContentRoute exact path="/my-nordic-home-am-see" component={MyNordicHome} />
          <ContentRoute exact path="/Oguzaksy" component={Oguzaksy} />
          <ContentRoute exact path="/eigenheimliebe" component={Eigenheimliebe} />
          <ContentRoute exact path="/fly-kati" component={FlyKati} />
          <ContentRoute exact path="/nordiccalm" component={Nordiccalm} />
          <ContentRoute exact path="/neues-nest" component={NeuesNest} />
          <ContentRoute exact path="/sarahklefisch" component={Sarahklefisch} />
          <ContentRoute exact path="/solar-pvcheck" component={SolarPvcheck} />
          <ContentRoute exact path="/hv" component={Hv} />
          <ContentRoute exact path="/pink" component={Pink} />
          <ContentRoute exact path="/fe-finance" component={FFinance} />
          <ContentRoute exact path="/fe-energy" component={Feenergy} />
          <ContentRoute exact path="/kontakt" component={Kontakt} />
          <ContentRoute exact path="/lbm" component={Lbm} />
          <ContentRoute exact path="/mutualz" component={Mutualz} />
          <ContentRoute exact path="/encrease" component={Encrease} />
          <ContentRoute exact path="/ckfunnel" component={CkFunnel} />
          <ContentRoute
            exact
            path="/finanzenmitercan"
            component={Finanzenmitercan}
          />
          <ContentRoute
            exact
            path="/houselovelive"
            component={Houselovelive}
          />
          <ContentRoute
            exact
            path="/deniashome"
            component={Deniashome}
          />
          <ContentRoute
            exact
            path="/zuhauseselig"
            component={Zuhauseselig}
          />
          <ContentRoute
            exact
            path="/stahlbetonhaus"
            component={Stahlbetonhaus}
          />
          <ContentRoute
            exact
            path="/anniinteriorlove"
            component={Anniinteriorlove}
          />
          <ContentRoute
            exact
            path="/Jagras_home"
            component={JagrasHome}
          />
          <ContentRoute
            exact
            path="/envoltec"
            component={Envoltec}
          />
          <ContentRoute
            exact
            path="/energyfinance"
            component={Energyfinance}
          />
          <Redirect to="error/error-v6" />
        </Switch>
      </Suspense>
    </>
  );
}
