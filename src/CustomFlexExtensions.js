import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import reducers, { namespace } from './states';

//independent UI components
import { loadCustomTaskList } from './components/examples/CustomTaskList'
import { loadCustomCRMContainer } from './components/examples/CRMContainer'

// common event handlers
import { registerReservationCreatedExtensions } from "./eventListeners/workerClient/reservationCreated";
import { registerActionExtensions } from "./eventListeners/actionsFramework"

// custom notifications
import "./notifications/CustomNotifications";

const PLUGIN_NAME = "CustomFlexExtensions";

export default class CustomFlexExtensions extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    // Add custom extensions
    loadCustomCRMContainer.bind(this)(flex, manager);
    loadCustomTaskList.bind(this)(flex, manager);
    registerReservationCreatedExtensions(manager);
    registerActionExtensions();

    // vanilla sample
    this.registerReducers(manager);

  }

  /**
  * Registers any plugin reducers
  *
  * @param manager { Flex.Manager }
  */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
