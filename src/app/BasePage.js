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
import Esrafet from "../_metronic/components/Esrafet/Esrafet";
import DeryaMusic from "../_metronic/components/deryaMusic/DeryaMusic";
import NordicChic from "../_metronic/components/nordicChic/NordicChic";
import NinaLessia from "../_metronic/components/NinaLessia/NinaLessia";
import Maryshionista from "../_metronic/components/maryshionista/Maryshionista";
import Hilalekr from "../_metronic/components/hilalekr/Hilalekr";
import Aysenurr from "../_metronic/components/aysenurr/Aysenurr";
import BrittaBrand from "../_metronic/components/brittaBrand/BrittaBrand";
import Modernesholzhaus from "../_metronic/components/modernesholzhaus/Modernesholzhaus";
import LauraNiemeyer from "../_metronic/components/lauraNiemeyer/LauraNiemeyer";
import SarahFbr from "../_metronic/components/sarahFbr/SarahFbr";
import Wohnsinnigewelt from "../_metronic/components/wohnsinnigewelt/Wohnsinnigewelt";
import Nativita from "../_metronic/components/nativita/Nativita";
import HouseFamilyLife from "../_metronic/components/houseFamilyLife/HouseFamilyLife";
import InfoSolarPvcheck from "../_metronic/components/infoSolarPvcheck/InfoSolarPvcheck";
import PremiumSolar from "../_metronic/components/premiumSolar/PremiumSolar";
import BeiUnsDoma from "../_metronic/components/beiUnsDoma/BeiUnsDoma";
import Valentinakarina from "../_metronic/components/valentinakarina/Valentinakarina";
import DieMarinaaa from "../_metronic/components/dieMarinaaa/DieMarinaaa";
import JeaReveur from "../_metronic/components/jeaReveur/JeaReveur";
import VivienRich from "../_metronic/components/vivienRich/VivienRich";
import Carrykinkatty from "../_metronic/components/carrykinkatty/Carrykinkatty";
import Aykanalessia from "../_metronic/components/aykanalessia/Aykanalessia";
import JessyNeumann from "../_metronic/components/jessyNeumann/JessyNeumann";
import Itsnadinesko from "../_metronic/components/itsnadinesko/Itsnadinesko";
import FamilyVanbuulHolz from "../_metronic/components/familyVanbuulHolz/FamilyVanbuulHolz";
import WohnKultur from "../_metronic/components/wohnKultur/WohnKultur";
import Mrslavieestbelle from "../_metronic/components/mrslavieestbelle/Mrslavieestbelle";
import Vivilicous from "../_metronic/components/vivilicous/Vivilicous";
import Itsonlylove from "../_metronic/components/itsonlylove/Itsonlylove";
import MiloMyHero from "../_metronic/components/miloMyHero/MiloMyHero";
import Liisawood from "../_metronic/components/liisawood/Liisawood";
import RoMini from "../_metronic/components/roMini/RoMini";
import Kathiwagener from "../_metronic/components/kathiwagener/Kathiwagener";
import AllaboutKatrin from "../_metronic/components/allaboutKatrin/AllaboutKatrin";
import NewFunnel from "../_metronic/components/newFunnel/NewFunnel";
import Stephifashion from "../_metronic/components/stephifashion/Stephifashion";
import JennaFranke from "../_metronic/components/jennaFranke/JennaFranke";
import FamilieLeichtgemacht from "../_metronic/components/familieLeichtgemacht/FamilieLeichtgemacht";
import Homeheartmade from "../_metronic/components/homeheartmade/Homeheartmade";
import SonjasPicturebook from "../_metronic/components/sonjasPicturebook/SonjasPicturebook";
import ModernityInterior from "../_metronic/components/modernityInterior/ModernityInterior";
import SiSichen from "../_metronic/components/siSichen/SiSichen";
import Fashionkitchen from "../_metronic/components/fashionkitchen/Fashionkitchen";
import Tommythebrain from "../_metronic/components/tommythebrain/Tommythebrain";
import Mariemariniofficial from "../_metronic/components/Mariemariniofficial/Mariemariniofficial";
import Jaanagoeslightly from "../_metronic/components/jaanagoeslightly/Jaanagoeslightly";
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
          <ContentRoute exact path="/britta-brand" component={BrittaBrand} />
          <ContentRoute exact path="/modernesholzhaus" component={Modernesholzhaus} />
          <ContentRoute exact path="/christelle" component={Christelle} />
          <ContentRoute exact path="/derbauleiter" component={DerBauleiter} />
          <ContentRoute exact path="/josefashome" component={Josefashome} />
          <ContentRoute exact path="/maryshionista" component={Maryshionista} />
          <ContentRoute exact path="/hilalekr" component={Hilalekr} />
          <ContentRoute exact path="/aysenurr" component={Aysenurr} />
          <ContentRoute exact path="/wohnsinnigewelt" component={Wohnsinnigewelt} />
          <ContentRoute exact path="/info-solar-pvcheck" component={InfoSolarPvcheck} />
          <ContentRoute exact path="/premium-solar" component={PremiumSolar} />
          <ContentRoute exact path="/bei-uns-doma" component={BeiUnsDoma} />
          <ContentRoute exact path="/valentinakarina" component={Valentinakarina} />

          <ContentRoute exact path="/die-Marinaaa" component={DieMarinaaa} />
          <ContentRoute exact path="/jea-reveur" component={JeaReveur} />
          <ContentRoute exact path="/vivien-rich" component={VivienRich} />
          <ContentRoute exact path="/carrykinkatty" component={Carrykinkatty} />
          <ContentRoute exact path="/aykanalessia" component={Aykanalessia} />
          <ContentRoute exact path="/jessy-neumann" component={JessyNeumann} />
          <ContentRoute exact path="/itsnadinesko" component={Itsnadinesko} />
          <ContentRoute exact path="/family-vanbuul-holz" component={FamilyVanbuulHolz} />
          <ContentRoute exact path="/wohn-kultur" component={WohnKultur} />
          <ContentRoute exact path="/mrslavieestbelle" component={Mrslavieestbelle} />
          <ContentRoute exact path="/vivilicous" component={Vivilicous} />
          <ContentRoute exact path="/itsonlylove" component={Itsonlylove} />
          <ContentRoute exact path="/milo-my-hero" component={MiloMyHero} />
          <ContentRoute exact path="/Liisawood" component={Liisawood} />
          <ContentRoute exact path="/ro-mini" component={RoMini} />
          <ContentRoute exact path="/kathiwagener" component={Kathiwagener} />
          <ContentRoute exact path="/allabout-katrin" component={AllaboutKatrin} />
          <ContentRoute exact path="/new-funnel" component={NewFunnel} />
          <ContentRoute exact path="/stephifashion" component={Stephifashion} />
          <ContentRoute exact path="/jenna-franke" component={JennaFranke} />
          <ContentRoute exact path="/familie-leichtgemacht" component={FamilieLeichtgemacht} />
          <ContentRoute exact path="/homeheartmade" component={Homeheartmade} />
          <ContentRoute exact path="/sonjas-picturebook" component={SonjasPicturebook} />
          <ContentRoute exact path="/modernity-interior" component={ModernityInterior} />
          <ContentRoute exact path="/si_sichen" component={SiSichen} />
          <ContentRoute exact path="/fashionkitchen" component={Fashionkitchen} />
          <ContentRoute exact path="/tommythebrain" component={Tommythebrain} />
          <ContentRoute exact path="/mariemariniofficial" component={Mariemariniofficial} />
          <ContentRoute exact path="/jaanagoeslightly" component={Jaanagoeslightly} />

          <ContentRoute exact path="/nativita" component={Nativita} />
          <ContentRoute exact path="/house-family-life" component={HouseFamilyLife} />
          <ContentRoute exact path="/laura-niemeyer" component={LauraNiemeyer} />
          <ContentRoute exact path="/sarah-fbr" component={SarahFbr} />
          <ContentRoute exact path="/derya-music" component={DeryaMusic} />
          <ContentRoute exact path="/nordic-chic" component={NordicChic} />
          <ContentRoute exact path="/nina-lessia" component={NinaLessia} />
          <ContentRoute exact path="/esrafet" component={Esrafet} />
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
