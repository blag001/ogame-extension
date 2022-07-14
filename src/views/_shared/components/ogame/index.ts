import Vue from 'vue';
import OAllianceClass from './OAllianceClass.vue';
import OBuilding from './OBuilding.vue';
import OItem from './OItem.vue';
import OOfficer from './OOfficer.vue';
import OPlayerClass from './OPlayerClass.vue';
import OResearch from './OResearch.vue';
import OResource from './OResource.vue';
import OShip from './OShip.vue';
import OLifeform from './OLifeform.vue';
import OLifeformBuilding from './OLifeformBuilding.vue';
import OLifeformTechnology from './OLifeformTechnology.vue';

Vue.component('o-alliance-class', OAllianceClass);
Vue.component('o-building', OBuilding);
Vue.component('o-item', OItem);
Vue.component('o-lifeform', OLifeform);
Vue.component('o-lifeform-building', OLifeformBuilding);
Vue.component('o-lifeform-technology', OLifeformTechnology);
Vue.component('o-officer', OOfficer);
Vue.component('o-player-class', OPlayerClass);
Vue.component('o-research', OResearch);
Vue.component('o-resource', OResource);
Vue.component('o-ship', OShip);