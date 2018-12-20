import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import germanMessages from 'ra-language-german';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ActiveResourceCreate, ActiveResourceEdit, ActiveResourceList } from './activeResources';
import provider from './data-provider';
import { EventLogList } from './eventLogs';
import { OperationKeysCreate, OperationKeysEdit, OperationKeysList } from './operationKeys';
import { PassiveResourceCreate, PassiveResourceEdit, PassiveResourceList } from './passiveResources';
import { RealEstateCreate, RealEstateEdit, RealEstateList } from './realEstates';
import { RegexPatternsEdit, RegexPatternsList } from './regexPatterns';
import { StationCreate, StationEdit, StationList } from './stations';


const messages = {
  de: germanMessages
};

const i18nProvider = locale => messages[locale];

const App = () => (
  <Admin dataProvider={provider('/api/v1')} locale="de" i18nProvider={i18nProvider}>
    <Resource name="regexPatterns" options={{ label: 'Regex Patterns' }} list={RegexPatternsList} edit={RegexPatternsEdit} icon={CodeIcon} />
    <Resource name="stations" options={{ label: 'Standorte' }} list={StationList} create={StationCreate} edit={StationEdit} icon={HomeIcon} />
    <Resource name="operationKeys" options={{ label: 'Einsatzstichworte' }} list={OperationKeysList} create={OperationKeysCreate} edit={OperationKeysEdit} icon={WhatshotIcon} />
    <Resource name="activeResources" options={{ label: 'Fahrzeuge' }} list={ActiveResourceList} create={ActiveResourceCreate} edit={ActiveResourceEdit} icon={SettingsIcon} />
    <Resource name="passiveResources" options={{ label: 'Abrollbehälter & Anhänger' }} list={PassiveResourceList} create={PassiveResourceCreate} edit={PassiveResourceEdit} icon={SettingsIcon} />
    <Resource name="realEstates" options={{ label: 'Objekte' }} list={RealEstateList} create={RealEstateCreate} edit={RealEstateEdit} icon={HomeIcon} />
    <Resource name="eventLogs" options={{ label: 'Logs' }} list={EventLogList} icon={InfoIcon} />
  </Admin>
);

export default App;
