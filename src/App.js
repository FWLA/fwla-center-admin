import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import germanMessages from 'ra-language-german';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ResourceCreate, ResourceEdit, ResourceList } from './resources';
import provider from './data-provider';
import { EventLogList } from './eventLogs';
import { OperationKeysCreate, OperationKeysEdit, OperationKeysList } from './operationKeys';
import { RealEstateCreate, RealEstateEdit, RealEstateList } from './realEstates';
import { RegexPatternsEdit, RegexPatternsList } from './regexPatterns';
import { StationCreate, StationEdit, StationList } from './stations';
import { ResourceKeyPatternsList, ResourceKeyPatternsCreate, ResourceKeyPatternsEdit } from './resourceKeyPatterns';


const messages = {
  de: germanMessages
};

const i18nProvider = locale => messages[locale];

const App = () => (
  <Admin title="FWLA Center" dataProvider={provider('/api/v1')} locale="de" i18nProvider={i18nProvider}>
    <Resource name="regexPatterns" options={{ label: 'Regex Patterns' }} list={RegexPatternsList} edit={RegexPatternsEdit} icon={CodeIcon} />
    <Resource name="stations" options={{ label: 'Standorte' }} list={StationList} create={StationCreate} edit={StationEdit} icon={HomeIcon} />
    <Resource name="operationKeys" options={{ label: 'Einsatzstichworte' }} list={OperationKeysList} create={OperationKeysCreate} edit={OperationKeysEdit} icon={WhatshotIcon} />
    <Resource name="resourceKeyPatterns" options={{ label: 'Einsatzmittel-Pattern' }} create={ResourceKeyPatternsCreate} edit={ResourceKeyPatternsEdit} list={ResourceKeyPatternsList} icon={CodeIcon} />
    <Resource name="resources" options={{ label: 'Fahrzeuge' }} list={ResourceList} create={ResourceCreate} edit={ResourceEdit} icon={DriveEtaIcon} />
    <Resource name="realEstates" options={{ label: 'Objekte' }} list={RealEstateList} create={RealEstateCreate} edit={RealEstateEdit} icon={HomeIcon} />
    <Resource name="eventLogs" options={{ label: 'Logs' }} list={EventLogList} icon={InfoIcon} />
  </Admin>
);

export default App;
