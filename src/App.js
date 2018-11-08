import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonHalRestProvider from 'ra-data-json-hal';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import { RegexPatternsList, RegexPatternsEdit } from './regexPatterns';
import { StationList, StationCreate, StationEdit } from './stations';
import { OperationKeysList, OperationKeysCreate, OperationKeysEdit } from './operationKeys';

const App = () => (
    <Admin dataProvider={jsonHalRestProvider('/api')}>
      <Resource name="regexPatterns" options={{ label: 'Regex Patterns' }} list={RegexPatternsList} edit={RegexPatternsEdit} icon={CodeIcon} />
      <Resource name="stations" options={{ label: 'Stations' }} list={StationList} create={StationCreate} edit={StationEdit} icon={HomeIcon} />
      <Resource name="operationKeys" options={{ label: 'Operation Keys' }} list={OperationKeysList} create={OperationKeysCreate} edit={OperationKeysEdit} icon={WhatshotIcon} />
    </Admin>
);
 
export default App;
