/* eslint import/no-cycle: off */
import HomePage from './home-page';
import AppBarPage from './app-bar-page';
import CardPage from './card-page';
import DrawerPage from './drawer-page';
import ElevationPage from './elevation-page';
import ExpansionPanelPage from './expansion-panel-page';
import TextFieldPage from './text-field-page';
import SelectPage from './select-page';
import SliderPage from './slider-page';
import SwitchPage from './switch-page';
import TabBarPage from './tab-bar-page';
import ThemePage from './theme-page';
import ButtonPage from './button-page';
import CheckboxPage from './checkbox-page';
import GridPage from './grid-page';
import ImageListPage from './image-list-page';
import RadioButtonPage from './radio-button-page';

export default [
  { title: 'Home', path: '/', component: HomePage },
  { title: 'App Bars', path: '/app-bars', component: AppBarPage },
  { title: 'Buttons', path: '/buttons', component: ButtonPage },
  { title: 'Cards', path: '/cards', component: CardPage },
  { title: 'Checkboxes', path: '/checkboxes', component: CheckboxPage },
  { title: 'Drawers', path: '/drawers', component: DrawerPage },
  { title: 'Elevation', path: '/elevation', component: ElevationPage },
  { title: 'Expansion Panels', path: '/expansion-panels', component: ExpansionPanelPage },
  { title: 'Image Lists', path: '/image-lists', component: ImageListPage },
  { title: 'Layout Grids', path: '/layout-grids', component: GridPage },
  { title: 'Tab Bars', path: '/tab-bars', component: TabBarPage },
  { title: 'Text Fields', path: '/text-field', component: TextFieldPage },
  { title: 'Select Boxes', path: '/select-boxes', component: SelectPage },
  { title: 'Sliders', path: '/sliders', component: SliderPage },
  { title: 'Switches', path: '/switches', component: SwitchPage },
  { title: 'Radio Buttons', path: '/radio-buttons', component: RadioButtonPage },
  { title: 'Theme Editor', path: '/theme-editor', component: ThemePage },
];
