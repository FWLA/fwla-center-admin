import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonHalRestProvider from 'ra-data-json-hal';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';

import { RegexPatternsList, RegexPatternsEdit } from './regexPatterns';
import { StationList, StationCreate, StationEdit } from './stations';

const App = () => (
    <Admin dataProvider={jsonHalRestProvider('/api')}>
      <Resource name="regexPatterns" list={RegexPatternsList} edit={RegexPatternsEdit} icon={CodeIcon} />
      <Resource name="stations" list={StationList} create={StationCreate} edit={StationEdit} icon={HomeIcon} />
    </Admin>
);
 
export default App;
