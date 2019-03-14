import CodeIcon from '@material-ui/icons/Code';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import germanMessages from 'ra-language-german';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { AmbulancePatternsCreate, AmbulancePatternsEdit, AmbulancePatternsList } from './ambulancePatterns';
import provider from './data-provider';
import { EventLogList } from './eventLogs';
import { OperationKeysCreate, OperationKeysEdit, OperationKeysList } from './operationKeys';
import { OperationsList, OperationsShow } from './operations';
import { RailwayCoordinateBoxCreate, RailwayCoordinateBoxEdit, RailwayCoordinateBoxList } from './railwayCoordinateBox';
import { RealEstateCreate, RealEstateEdit, RealEstateList } from './realEstates';
import { RealEstateTagCreate, RealEstateTagEdit, RealEstateTagList } from './realEstateTags';
import { RegexPatternsEdit, RegexPatternsList } from './regexPatterns';
import { ResourceKeyPatternsCreate, ResourceKeyPatternsEdit, ResourceKeyPatternsList } from './resourceKeyPatterns';
import { ResourceCreate, ResourceEdit, ResourceList } from './resources';
import { RiverSectorCreate, RiverSectorEdit, RiverSectorList } from './riverSectors';
import { StationCreate, StationEdit, StationList } from './stations';


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
    <Resource name="ambulancePatterns" options={{ label: 'Rettungsdienst-Pattern' }} create={AmbulancePatternsCreate} edit={AmbulancePatternsEdit} list={AmbulancePatternsList} icon={CodeIcon} />
    <Resource name="resources" options={{ label: 'Fahrzeuge' }} list={ResourceList} create={ResourceCreate} edit={ResourceEdit} icon={DriveEtaIcon} />
    <Resource name="realEstateTags" options={{ label: 'Objektgruppen' }} list={RealEstateTagList} create={RealEstateTagCreate} edit={RealEstateTagEdit} icon={HomeIcon} />
    <Resource name="realEstates" options={{ label: 'Objekte' }} list={RealEstateList} create={RealEstateCreate} edit={RealEstateEdit} icon={HomeIcon} />
    <Resource name="operations" options={{ label: 'Einsätze' }} list={OperationsList} show={OperationsShow} icon={WhatshotIcon} />
    <Resource name="riverSectors" options={{ label: 'Flussabschnitte' }} list={RiverSectorList} create={RiverSectorCreate} edit={RiverSectorEdit} icon={CodeIcon} />
    <Resource name="railwayCoordinateBoxes" options={{ label: 'Bahn-Ausschnitte' }} list={RailwayCoordinateBoxList} create={RailwayCoordinateBoxCreate} edit={RailwayCoordinateBoxEdit} icon={CodeIcon} />
    <Resource name="eventLogs" options={{ label: 'Logs' }} list={EventLogList} icon={InfoIcon} />
  </Admin>
);

export default App;
