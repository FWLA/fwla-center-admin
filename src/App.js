import CodeIcon from '@material-ui/icons/Code';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TvIcon from '@material-ui/icons/Tv';
import VideocamIcon from '@material-ui/icons/Videocam';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LayersIcon from '@material-ui/icons/Layers';
import BlockIcon from '@material-ui/icons/Block';
import germanMessages from 'ra-language-german';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { AmbulancePatternsCreate, AmbulancePatternsEdit, AmbulancePatternsList } from './ambulancePatterns';
import { CameraCreate, CameraEdit, CameraList } from './cameras';
import provider from './data-provider';
import { DisplayEventCreate, DisplayEventEdit, DisplayEventList } from './DisplayEvent';
import { EventLogList } from './eventLogs';
import MyLayout from './Layout';
import { OperationList, OperationShow } from './Operation';
import { OperationKeysCreate, OperationKeysEdit, OperationKeysList } from './operationKeys';
import { RailwayCoordinateBoxCreate, RailwayCoordinateBoxEdit, RailwayCoordinateBoxList } from './railwayCoordinateBox';
import { RealEstateCreate, RealEstateEdit, RealEstateList } from './realEstates';
import { RealEstateTagCreate, RealEstateTagEdit, RealEstateTagList } from './realEstateTags';
import { RegexPatternsEdit, RegexPatternsList } from './regexPatterns';
import { ResourceKeyPatternsCreate, ResourceKeyPatternsEdit, ResourceKeyPatternsList } from './resourceKeyPatterns';
import { ResourceCreate, ResourceEdit, ResourceList } from './resources';
import { RiverSectorCreate, RiverSectorEdit, RiverSectorList } from './riverSectors';
import { StationCreate, StationEdit, StationList } from './stations';
import { MapLayerList, MapLayerCreate, MapLayerEdit } from './MapLayer';
import { RoadblockList, RoadblockCreate, RoadblockEdit } from './Roadblock';


const messages = {
  de: germanMessages
};

const i18nProvider = locale => messages[locale];

const App = () => (
  <Admin title="FWLA Center" appLayout={MyLayout} dataProvider={provider('/api/v1')} locale="de" i18nProvider={i18nProvider}>

    {/*
      General entities
    */}
    <Resource name="operations" options={{ label: 'Einsätze' }} list={OperationList} show={OperationShow} icon={WhatshotIcon} />
    <Resource name="displayEvents" options={{ label: 'Anzeigen' }} list={DisplayEventList} create={DisplayEventCreate} edit={DisplayEventEdit} icon={TvIcon} />
    <Resource name="resources" options={{ label: 'Fahrzeuge' }} list={ResourceList} create={ResourceCreate} edit={ResourceEdit} icon={DriveEtaIcon} />
    <Resource name="realEstates" options={{ label: 'Objekte' }} list={RealEstateList} create={RealEstateCreate} edit={RealEstateEdit} icon={HomeIcon} />
    <Resource name="roadblocks" options={{ label: 'Straßensperren' }} list={RoadblockList} create={RoadblockCreate} edit={RoadblockEdit} icon={BlockIcon} />

    {/*
      Geo data entities
    */}
    <Resource name="mapLayers" options={{ label: 'Kartenebenen' }} list={MapLayerList} create={MapLayerCreate} edit={MapLayerEdit} icon={LayersIcon} />
    <Resource name="riverSectors" options={{ label: 'Flussabschnitte' }} list={RiverSectorList} create={RiverSectorCreate} edit={RiverSectorEdit} icon={CodeIcon} />
    <Resource name="railwayCoordinateBoxes" options={{ label: 'Bahn-Ausschnitte' }} list={RailwayCoordinateBoxList} create={RailwayCoordinateBoxCreate} edit={RailwayCoordinateBoxEdit} icon={CodeIcon} />

    {/*
      Master data entities
    */}
    <Resource name="regexPatterns" options={{ label: 'Regex Patterns' }} list={RegexPatternsList} edit={RegexPatternsEdit} icon={CodeIcon} />
    <Resource name="stations" options={{ label: 'Standorte' }} list={StationList} create={StationCreate} edit={StationEdit} icon={HomeIcon} />
    <Resource name="operationKeys" options={{ label: 'Einsatzstichworte' }} list={OperationKeysList} create={OperationKeysCreate} edit={OperationKeysEdit} icon={WhatshotIcon} />
    <Resource name="resourceKeyPatterns" options={{ label: 'Einsatzmittel-Pattern' }} create={ResourceKeyPatternsCreate} edit={ResourceKeyPatternsEdit} list={ResourceKeyPatternsList} icon={CodeIcon} />
    <Resource name="ambulancePatterns" options={{ label: 'Rettungsdienst-Pattern' }} create={AmbulancePatternsCreate} edit={AmbulancePatternsEdit} list={AmbulancePatternsList} icon={CodeIcon} />
    <Resource name="realEstateTags" options={{ label: 'Objektgruppen' }} list={RealEstateTagList} create={RealEstateTagCreate} edit={RealEstateTagEdit} icon={HomeIcon} />
    <Resource name="cameras" options={{ label: 'Kameras' }} list={CameraList} create={CameraCreate} edit={CameraEdit} icon={VideocamIcon} />

    {/*
      Analysis data entities
    */}
    <Resource name="eventLogs" options={{ label: 'Logs' }} list={EventLogList} icon={InfoIcon} />
  </Admin>
);

export default App;
