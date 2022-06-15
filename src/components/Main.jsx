/* компонент объединяет отдельные части страницы */

import React from 'react';
import News from './News/News';
import Banner from './Baner/Baner';
import Search from './Search/Search';
import Widgets from './Widgets/Widgets';

/*       <InfoBanner link="#0" img="http://placehold.it/150x150" />
         <Search logo="http://placehold.it/140x100" />
         <Banner link="#0" img="http://placehold.it/750x100" />
         <Widgets />
 */

export default function Main() {
   return (
      <div className="Main">
         <News />
         <Search
            img="http://dummyimage.com/70x20/a6a6ff"
            value="фазы луны сегодня"
         />
         <Banner img="http://dummyimage.com/600x50/a6a6ff" link="#100" />
         <Widgets />
      </div>
   );
}
