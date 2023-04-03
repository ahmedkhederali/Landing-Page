import logo from './logo.svg';

import WithSubnavigation from './Components/Navbar/Navbar';
import LargeWithAppLinksAndSocial from './Components/Footer/Footer';
import WithSpeechBubbles from './Components/Testmonial/Testmonial';
import ThreeTierPricing from './Components/Pricing/Pricing';
import BasicStatistics from './Components/Statistical/Statical';
import ContactFormWithSocialButtons from './Components/Contact/Contact';
import SimpleThreeColumns from './Components/Feature/Feature';
import { Box, Center } from '@chakra-ui/react';
import SplitWithImage from './Components/Content/Content';

function App() {
  return (
    <>
     <WithSubnavigation/>
     <SplitWithImage/>
     <SimpleThreeColumns/>


     <ThreeTierPricing/>
     <WithSpeechBubbles/>
     <BasicStatistics />
     <ContactFormWithSocialButtons/>
     <LargeWithAppLinksAndSocial/>

    </>
  );
}

export default App;
