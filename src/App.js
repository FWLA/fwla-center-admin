import React from 'react';
import { Admin, Resource } from 'react-admin';
import provider from './data-provider';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SettingsIcon from '@material-ui/icons/Settings';

import { RegexPatternsList, RegexPatternsEdit } from './regexPatterns';
import { StationList, StationCreate, StationEdit } from './stations';
import { OperationKeysList, OperationKeysCreate, OperationKeysEdit } from './operationKeys';
import { ActiveResourceList, ActiveResourceCreate, ActiveResourceEdit } from './activeResources';
import { PassiveResourceList, PassiveResourceCreate, PassiveResourceEdit } from './passiveResources';
import { RealEstateList, RealEstateCreate, RealEstateEdit } from './realEstates';

const App = () => (
    <Admin dataProvider={provider('/api/v1')}>
      <Resource name="regexPatterns" options={{ label: 'Regex Patterns' }} list={RegexPatternsList} edit={RegexPatternsEdit} icon={CodeIcon} />
      <Resource name="stations" options={{ label: 'Stations' }} list={StationList} create={StationCreate} edit={StationEdit} icon={HomeIcon} />
      <Resource name="operationKeys" options={{ label: 'Operation Keys' }} list={OperationKeysList} create={OperationKeysCreate} edit={OperationKeysEdit} icon={WhatshotIcon} />
      <Resource name="activeResources" options={{ label: 'Active Resources' }} list={ActiveResourceList} create={ActiveResourceCreate} edit={ActiveResourceEdit} icon={SettingsIcon} />
      <Resource name="passiveResources" options={{ label: 'Passive Resources' }} list={PassiveResourceList} create={PassiveResourceCreate} edit={PassiveResourceEdit} icon={SettingsIcon} />
      <Resource name="realEstates" options={{ label: 'Real Estate' }} list={RealEstateList} create={RealEstateCreate} edit={RealEstateEdit} icon={HomeIcon} />
    </Admin>
);
 
export default App;
