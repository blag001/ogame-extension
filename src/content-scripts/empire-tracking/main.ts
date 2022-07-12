import { getQueryParameters } from "../../shared/utils/getQueryParameters";
import { trackAlliancePage } from "./trackAlliancePage";
import { trackResearchPage } from "./trackResearchPage";
import { _throw } from "../../shared/utils/_throw";
import { trackSuppliesPage } from "./trackSuppliesPage";
import { trackFacilitiesPage } from "./trackFacilitiesPage";
import { trackShipyardPage } from "./trackShipyardPage";
import { trackFleetDispatchPage } from "./trackFleetDispatchPage";
import { trackDefensesPage } from "./trackDefensesPage";
import { trackOverviewPage } from "./trackOverviewPage";
import { trackResourceSettingsPage } from "./trackResourceSettingsPage";
import { trackEmpirePage } from "./trackEmpirePage";
import { trackOnIngamePages } from "./trackOnIngamePages";
import { trackLifeformBuildingsPage } from "./trackLifeformBuildings";
import { trackLifeformResearchPage } from "./trackLifeformResearchPage";
import { trackLifeformSettingsPage } from "./trackLifeformSettingsPage";

interface PageTracker {
    condition: (queryParams: Record<string, string>) => boolean;
    action: () => void;
}

interface ObserverCallback {
    selector: string;
    asap?: boolean;
    callback: (element: Element) => void;
}

const queryParams = getQueryParameters(location.search);
const pageTrackers: PageTracker[] = [
    {
        action: () => trackOnIngamePages(),
        condition: query => ['ingame', 'messages', 'chat', 'shop', 'highscore', 'rewards', 'premium', 'resourceSettings'].includes(query.page),
    },
    {
        action: () => trackResearchPage(),
        condition: query => query.page == 'ingame' && query.component == 'research',
    },
    {
        action: () => trackSuppliesPage(),
        condition: query => query.page == 'ingame' && query.component == 'supplies',
    },
    {
        action: () => trackFacilitiesPage(),
        condition: query => query.page == 'ingame' && query.component == 'facilities',
    },
    {
        action: () => trackShipyardPage(),
        condition: query => query.page == 'ingame' && query.component == 'shipyard',
    },
    {
        action: () => trackFleetDispatchPage(),
        condition: query => query.page == 'ingame' && query.component == 'fleetdispatch',
    },
    {
        action: () => trackDefensesPage(),
        condition: query => query.page == 'ingame' && query.component == 'defenses',
    },
    {
        action: () => trackAlliancePage(),
        condition: query => query.page == 'ingame' && query.component == 'alliance',
    },
    {
        action: () => trackOverviewPage(),
        condition: query => query.page == 'ingame' && query.component == 'overview',
    },
    {
        action: () => trackResourceSettingsPage(),
        condition: query => query.page == 'resourceSettings',
    },
    {
        action: () => trackLifeformBuildingsPage(),
        condition: query => query.page == 'ingame' && query.component == 'lfbuildings',
    },
    {
        action: () => trackLifeformResearchPage(),
        condition: query => query.page == 'ingame' && query.component == 'lfresearch',
    },
    {
        action: () => trackLifeformSettingsPage(),
        condition: query => query.page == 'ingame' && query.component == 'lfsettings',
    },
    {
        action: () => trackEmpirePage(),
        condition: query => query.page == 'standalone' && query.component == 'empire',
    },
];
export const observerCallbacks: ObserverCallback[] = [];
const observer = new MutationObserver(() => {
    const siteFooter = document.querySelector('#siteFooter');
    if (siteFooter == null) {
        return;
    }

    for (let i = 0; i < observerCallbacks.length; i++) {
        const observerCallback = observerCallbacks[i];
        if(siteFooter == null && !observerCallback.asap) {
            continue;
        }
        
        const elem = document.querySelector(observerCallback.selector);

        if (elem != null) {
            observerCallbacks.splice(i, 1);
            i--;
            observerCallback.callback(elem);
        }
    }

    if (observerCallbacks.length == 0) {
        observer.disconnect();
    }
});
observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
});

pageTrackers.forEach(pageTracker => {
    if (pageTracker.condition(queryParams)) {
        pageTracker.action();
    }
});
